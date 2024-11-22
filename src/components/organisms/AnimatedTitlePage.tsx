import { Title } from '../atoms/Title';
import { motion, useMotionValueEvent, useScroll } from 'framer-motion';
import { StaticImage } from 'gatsby-plugin-image';
import React, { useRef } from 'react';
import styled from 'styled-components';

const TitleContainer = styled.section`
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
`;

const StyledTitle = styled(Title)`
	font-size: 5rem;
	line-height: 5rem;
	letter-spacing: 16px;
	margin-bottom: 2rem;

	@media (max-width: 767px) {
		font-size: 2rem;
		letter-spacing: 10px;
	}
`;

const LogoContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 1rem;
	margin-top: 1rem;

	@media (max-width: 767px) {
		margin: 0 0.5rem;
	}
`;

export default function AnimatedTitlePage({ text }) {
	const ref = useRef();

	const { scrollYProgress } = useScroll({
		target: ref,
		// offset: ['end end', 'start start'],
	});

	useMotionValueEvent(scrollYProgress, 'change', (latest) => {
		console.log('Page scroll: ', latest);
	});

	return (
		<TitleContainer ref={ref}>
			<StyledTitle
				aria-label={text}
				role='heading'
				as={motion.h1}
				initial={{ opacity: 0, y: 0, scaleX: 0.8 }}
				whileInView={{ scaleX: 1, opacity: 1, y: 0 }}
				transition={{ duration: 0.6 }}
				whileTap={{ scale: 0.97 }}
			>
				{text}
			</StyledTitle>

			{/* Logo animations with staggered delay */}
			<LogoContainer>
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.2 }}
					whileHover={{ scale: 1.05 }}
				>
					<StaticImage
						src='../../images/logos/c2life.png'
						alt='C2Life Logo'
						height={75}
					/>
				</motion.div>
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.4 }}
					whileHover={{ scale: 1.05 }}
				>
					<StaticImage
						src='../../images/logos/smartwool.png'
						alt='Smartwool Logo'
						height={75}
					/>
				</motion.div>
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.6 }}
					whileHover={{ scale: 1.05 }}
				>
					<StaticImage
						src='../../images/logos/ravensbrew.png'
						alt='Ravens Brew Coffee Logo'
						height={75}
					/>
				</motion.div>
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.8 }}
					whileHover={{ scale: 1.05 }}
				>
					<StaticImage
						src='../../images/logos/eightangles.png'
						alt='Eight Angles Logo'
						height={75}
					/>
				</motion.div>
			</LogoContainer>
		</TitleContainer>
	);
}
