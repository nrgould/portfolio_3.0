import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { StaticImage } from 'gatsby-plugin-image';
import { Title } from '../atoms/Title';
import { Text } from '../atoms/Text';
import Button from '../atoms/Button';
import { FaArrowRight } from 'react-icons/fa';
import { COLORS } from '../../theme';

const Container = styled.section`
	height: 100vh;
	width: 100vw;
	display: flex;
	align-items: center;
	justify-content: center;
	scroll-snap-align: start;
	flex-direction: row;

	@media (max-width: 767px) {
		flex-direction: column;
	}
`;

const ImageContainer = styled.div`
	flex: 1;
	display: flex;
	align-items: center;
	justify-content: flex-end;
	margin-right: 2rem;
	width: 100%;

	@media (max-width: 767px) {
		width: 60%; /* Adjust width to make the image smaller on mobile */
		align-items: flex-end;
		margin-right: 0;
	}
`;

const ContentContainer = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	padding: 2rem;

	@media (max-width: 767px) {
		align-items: center;
		justify-content: flex-start;
		text-align: center;
		margin-top: 0rem;
		padding-top: 1rem;
	}
`;

const StyledText = styled(Text)`
	max-width: 40rem;
	font-size: 1.4rem;
	margin: 1rem 0;

	@media (max-width: 767px) {
		font-size: 1.1rem;
		max-width: 100%;
	}
`;

export default function Prints() {
	const variants = {
		hidden: {
			opacity: 0,
			y: 20,
			transition: { duration: 0.5 },
		},
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.8,
				delay: 0.2,
				ease: [0, 0.71, 0.2, 1.01],
			},
		},
	};

	return (
		<Container id='prints'>
			<ImageContainer
				as={motion.div}
				whileInView={'visible'}
				initial={'hidden'}
				variants={variants}
			>
				<StaticImage
					src='../../images/Amsterdam Bike.png'
					width={400}
					height={500}
					style={{ borderRadius: '8px' }}
					alt='Sample of Nicholas Gould Fine Art Print'
				/>
			</ImageContainer>
			<ContentContainer>
				<Title
					as={motion.h2}
					whileInView={'visible'}
					initial={'hidden'}
					variants={variants}
					style={{ margin: 0 }}
				>
					FINE ART PRINTS
				</Title>
				<StyledText
					as={motion.p}
					whileInView={'visible'}
					initial={'hidden'}
					variants={variants}
					transition={{ delay: 0.5 }}
					style={{ marginTop: 10, marginBottom: 10 }}
				>
					Explore my collection of limited edition fine art prints,
					printed with premium Hahnemühle Photo Rag to bring the
					beauty of nature into your space. Each piece is thoughtfully
					curated and signed, ensuring a unique addition to your art
					collection. Currently only being featured in the Burke Arts
					Council.
				</StyledText>
				<motion.div
					initial={{ opacity: 0, scale: 1, x: 10 }}
					whileInView={{ opacity: 1, scale: 1, x: 0 }}
					transition={{
						duration: 0.8,
						delay: 0.2,
						ease: [0, 0.71, 0.2, 1.01],
					}}
					style={{ marginTop: 10 }}
				>
					<Button
						text='Contact for Inquiries'
						primary
						icon={
							<FaArrowRight
								color={COLORS.buttonTextBlack}
								size={14}
							/>
						}
						style={{ color: COLORS.buttonTextBlack }}
						onClick={() =>
							window.open(
								'mailto:hello@nicholasgouldphoto.com?subject=Fine%20Art%20Print%20Inquiry&body=Hello%2C%0A%0AI%20am%20interested%20in%20learning%20more%20about%20your%20fine%20art%20prints.',
								'_blank',
								'noopener,noreferrer'
							)
						}
					/>
				</motion.div>
			</ContentContainer>
		</Container>
	);
}
