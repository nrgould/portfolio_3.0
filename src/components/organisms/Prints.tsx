import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { StaticImage } from 'gatsby-plugin-image';
import { Title } from '../atoms/Title';
import { Text } from '../atoms/Text';
import Button from '../atoms/Button';
import { FaArrowRight } from 'react-icons/fa';
import { COLORS } from '../../theme';

const Container = styled.div`
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
		width: 70%; /* Adjust width to make the image smaller on mobile */
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
		padding: 1rem;
		margin-top: 2rem;
	}
`;

const StyledText = styled(Text)`
	max-width: 40rem;
	font-size: 1.5rem;
	margin: 1rem 0;

	@media (max-width: 767px) {
		font-size: 1.2rem;
		max-width: 100%;
	}
`;

export default function Prints() {
	const variants = {
		hidden: {
			opacity: 0,
			y: 50,
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

	return (
		<Container id='prints'>
			<ImageContainer>
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
					crafted with the highest quality materials to bring the
					beauty of nature into your space. Each piece is thoughtfully
					curated and signed, ensuring a unique addition to your art
					collection.
				</StyledText>
				<motion.div
					variants={variants}
					initial={'hidden'}
					style={{ marginTop: 10 }}
					whileInView={'visible'}
				>
					<Button
						text='See Prints'
						primary
						icon={
							<FaArrowRight
								color={COLORS.buttonTextBlack}
								size={14}
							/>
						}
						onClick={() =>
							window.open(
								'https://studio.nicholasgouldphoto.com',
								'_blank',
								'noopener,noreferrer'
							)
						}
					>
						View Prints
					</Button>
				</motion.div>
			</ContentContainer>
		</Container>
	);
}
