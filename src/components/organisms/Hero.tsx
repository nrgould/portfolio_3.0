import { StaticImage } from 'gatsby-plugin-image';
import { COLORS } from '../../theme';
import { SubTitle } from '../atoms/SubTitle';
import { Title } from '../atoms/Title';
import React, { useRef } from 'react';
import styled from 'styled-components';
import { useWindowDimensions } from '../../hooks/useWindowDimensions';
import { motion, useInView } from 'framer-motion';

const ImageContainer = styled.div`
	background-color: ${COLORS.background};
	width: 100vw;
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
	font-size: 4rem;
	text-align: center;
	line-height: 4rem;
	max-width: 80%;

	@media (max-width: 767px) {
		font-size: 2.5rem;
		line-height: 3rem;
	}
`;
const StyledSubTitle = styled(SubTitle)`
	padding: 0;
	margin: 0;
	color: ${COLORS.secondary};
	max-width: 80%;
	text-align: center;
`;

export default function Hero() {
	const ref = useRef(null);
	const { width, height }: any = useWindowDimensions();

	const inView = useInView(ref, { once: true });

	const variants = {
		hidden: { opacity: 0, scale: 0.5 },
		show: { opacity: 1, scale: 1 },
	};
	return (
		<ImageContainer ref={ref}>
			<StaticImage
				alt='portrait of Nicholas Gould in Copenhagen, Denmark'
				src='../../images/optimized_images/self_nicholas_in_front_of_zugspitze_sunset.jpg'
				placeholder='blurred'
				layout='fullWidth'
				style={{
					gridArea: '1/1',
					maxWidth: width,
					maxHeight: height,
					opacity: '50%',
				}}
				aspectRatio={1}
			/>
			<div
				style={{
					gridArea: '1/1',
					position: 'relative',
					placeItems: 'center',
					display: 'grid',
				}}>
				<TextContainer>
					<StyledTitle
						as={motion.h1}
						initial={{ opacity: 0, scale: 0.5, y: 30 }}
						whileInView={{ opacity: 1, scale: 1, y: 0 }}
						transition={{
							duration: 0.8,
							delay: 0.2,
							ease: [0, 0.71, 0.2, 1.01],
						}}>
						NICHOLAS GOULD
					</StyledTitle>
					<StyledSubTitle
						as={motion.h2}
						initial={{ opacity: 0, scale: 0.5, y: 30 }}
						whileInView={{ opacity: 1, scale: 1, y: 0 }}
						transition={{
							duration: 0.8,
							delay: 0.5,
							ease: [0, 0.71, 0.2, 1.01],
						}}>
						Photographer & Filmmaker based in Raleigh, NC
					</StyledSubTitle>
				</TextContainer>
			</div>
		</ImageContainer>
	);
}
