import { StaticImage } from 'gatsby-plugin-image';
import { COLORS } from '../../theme';
import { SubTitle } from '../atoms/SubTitle';
import { Title } from '../atoms/Title';
import React, { useRef } from 'react';
import styled from 'styled-components';
import { useWindowDimensions } from '../../hooks/useWindowDimensions';
import { motion, useInView } from 'framer-motion';
import ButtonNavLink from '../atoms/ButtonNavLink';
import { FaArrowRight } from 'react-icons/fa';

const ImageContainer = styled.div`
	background-color: ${COLORS.background};
	/* width: 100vw; */
	height: 100vh;
	display: grid;
	scroll-snap-align: start;
`;

const TextContainer = styled(motion.div)`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

const StyledTitle = styled(Title)`
	padding: 0;
	margin: 0;
	color: ${COLORS.primary};
	font-size: 3rem;
	text-align: center;
	line-height: 4rem;
	max-width: 50%;
	margin-bottom: 0.5rem;

	@media (max-width: 767px) {
		font-size: 2.2rem;
		line-height: 3rem;
		max-width: 90%;
	}
`;
const StyledSubTitle = styled(SubTitle)`
	padding: 0;
	margin: 0;
	color: ${COLORS.secondaryText};
	max-width: 50%;
	text-align: center;
	@media (max-width: 767px) {
		max-width: 90%;
		font-size: 1.2rem;
	}
`;

export default function Hero() {
	const ref = useRef(null);
	const { height }: any = useWindowDimensions();

	return (
		<ImageContainer ref={ref}>
			<StaticImage
				alt='portrait of Nicholas Gould in Copenhagen, Denmark'
				src='../../images/optimized_images/1_portrait_couple_looking_at_eachother_sunset.jpg'
				placeholder='dominantColor'
				layout='fullWidth'
				style={{
					gridArea: '1/1',
					maxHeight: height,
					opacity: '50%',
				}}
				aspectRatio={1}
				formats={['auto', 'webp', 'avif']}
			/>
			<div
				style={{
					gridArea: '1/1',
					position: 'relative',
					placeItems: 'end',
					display: 'grid',
					marginBottom: '3rem',
				}}
			>
				<TextContainer>
					<StyledTitle
						as={motion.h1}
						initial={{ opacity: 0, scale: 1, y: 10 }}
						whileInView={{ opacity: 1, scale: 1, y: 0 }}
						transition={{
							duration: 0.8,
							delay: 0.2,
							ease: [0, 0.71, 0.2, 1.01],
						}}
					>
						Capturing Authentic Moments, Elevating Brand Connection
					</StyledTitle>
					<StyledSubTitle
						as={motion.h2}
						initial={{ opacity: 0, scale: 0.9, y: 20 }}
						whileInView={{ opacity: 1, scale: 1, y: 0 }}
						transition={{
							duration: 0.8,
							delay: 0.3,
							ease: [0, 0.71, 0.2, 1.01],
						}}
					>
						Based in North Carolina, I bring my love for the
						outdoors and travel to life through photography,
						creating visuals that connect brands with audiences on a
						deeper level
					</StyledSubTitle>
					<ButtonNavLink
						to='#contact'
						text='Work With Me'
						primary
						icon={
							<FaArrowRight
								color={COLORS.buttonTextBlack}
								size={14}
							/>
						}
					/>
				</TextContainer>
			</div>
		</ImageContainer>
	);
}
