import React, { useRef, useState } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import styled from 'styled-components';
import { COLORS } from '../../theme';
import Button from '../atoms/Button';
import TextInput from '../molecules/TextInput';
import TextArea from '../molecules/TextArea';
import { FaArrowRight } from 'react-icons/fa';
import { SubTitle } from '../atoms/SubTitle';
import FlexRow from '../atoms/FlexRow';
import { motion, useInView } from 'framer-motion';
import { Text } from '../atoms/Text';

const encode = (data: any) => {
	return Object.keys(data)
		.map(
			(key) =>
				encodeURIComponent(key) + '=' + encodeURIComponent(data[key])
		)
		.join('&');
};

const StyledForm = styled(Form)`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-bottom: 2rem;
	min-width: 25vw;
	/* height: 100vh; */
	/* flex: 1 1; */
`;

interface Props {
	style?: object;
}

export default function ContactForm({ style }: Props) {
	const ref = useRef(null);
	const inView = useInView(ref, { once: true });

	const [isSent, setIsSent] = useState(false);

	const parentVariants = {
		hidden: {
			opacity: 0,
			y: 50,
			transition: { duration: 0.5 },
		},
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.5,
				when: 'beforeChildren', //use this instead of delay
				staggerChildren: 0.2, //apply stagger on the parent tag
			},
		},
	};
	const childVariants = {
		hidden: {
			opacity: 0,
			x: 200,
			transition: { duration: 0.5 },
		},
		visible: {
			opacity: 1,
			x: 0,
			transition: { duration: 0.5 },
		},
	};

	const initialValues = {
		name: '',
		email: '',
		website: '',
		adSpend: '',
		description: '',
	};

	const validationSchema = Yup.object({
		name: Yup.string().required('Please enter your name').min(4).max(20),
		email: Yup.string().email().required('Please enter your email'),
		website: Yup.string()
			.matches(
				/[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/,
				'Enter valid url!'
			)
			.required('Please enter your website'),
		adSpend: Yup.string(),
		description: Yup.string(),
	});

	if (isSent) {
		return (
			<>
				<SubTitle style={{ color: COLORS.secondaryText }}>
					Thanks for your submission!
				</SubTitle>
				<Text>I'll get back to you soon.</Text>
			</>
		);
	}

	return (
		<motion.div
			variants={parentVariants}
			animate={inView ? 'visible' : 'hidden'}
			initial='hidden'
			ref={ref}
		>
			<Formik
				initialValues={initialValues}
				validationSchema={validationSchema}
				onSubmit={async (
					values,
					{ setSubmitting, setErrors, resetForm }
				) => {
					try {
						fetch('/?no-cache=1', {
							method: 'POST',
							headers: {
								'Content-Type':
									'application/x-www-form-urlencoded',
							},
							body: encode({ 'form-name': 'contact', ...values }),
						});
						setIsSent(true);
						resetForm();
					} catch (error) {
						setErrors(error);
					} finally {
						setSubmitting(false);
					}
				}}
			>
				{({
					errors,
					touched,
					values,
					handleChange,
					isSubmitting,
					isValid,
					handleReset,
				}) => (
					<StyledForm
						name='contact'
						style={style}
						onReset={handleReset}
						data-netlify='true'
						data-netlify-honeypot='bot-field'
					>
						<motion.div variants={childVariants}>
							<TextInput
								required
								label='Name'
								placeholder='John Doe'
								name='name'
								error={
									errors.name && touched.name
										? errors.name
										: null
								}
								value={values.name}
								handleChange={handleChange}
							/>
						</motion.div>
						<motion.div variants={childVariants}>
							<TextInput
								required
								label='Email'
								placeholder='you@website.com'
								name='email'
								error={
									errors.email && touched.email
										? errors.email
										: null
								}
								value={values.email}
								handleChange={handleChange}
							/>
						</motion.div>
						<motion.div variants={childVariants}>
							<TextInput
								label='Website (if applicable)'
								name='website'
								placeholder='www.yourcompany.com'
								// error={
								// 	errors.website && touched.website
								// 		? errors.website
								// 		: null
								// }
								value={values.website}
								handleChange={handleChange}
							/>
						</motion.div>
						<motion.div variants={childVariants}>
							<TextArea
								label='Project Details'
								name='description'
								placeholder='A few details about the project…'
								handleChange={handleChange}
								value={values.description}
							/>
						</motion.div>
						<motion.div variants={childVariants}>
							<FlexRow
								alignItems='center'
								justifyContent='center'
							>
								<Button
									icon={
										<FaArrowRight
											color={
												isSubmitting || !isValid
													? COLORS.secondaryText
													: COLORS.buttonTextBlack
											}
											size={14}
										/>
									}
									secondary
									disabled={isSubmitting || !isValid}
									text='Get In Touch'
									type='submit'
									style={{ width: '100%' }}
								/>
							</FlexRow>
						</motion.div>
					</StyledForm>
				)}
			</Formik>
		</motion.div>
	);
}
