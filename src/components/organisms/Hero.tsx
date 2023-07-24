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
`;

const TextContainer = styled(motion.div)`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
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
				src='../../images/photography/self portraits/R6II1876.jpg'
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
				<TextContainer
					// variants={variants}
					// animate={inView ? 'show' : 'hidden'}
					initial={{ opacity: 0, scale: 0.5 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{
						duration: 0.8,
						delay: 0.5,
						ease: [0, 0.71, 0.2, 1.01],
					}}>
					<Title
						style={{
							padding: 0,
							margin: 0,
							color: COLORS.primary,
						}}>
						NICHOLAS GOULD
					</Title>
					<SubTitle
						style={{
							padding: 0,
							margin: 0,
							color: COLORS.primary,
						}}>
						Photographer & Filmmaker
					</SubTitle>
				</TextContainer>
			</div>
		</ImageContainer>
	);
}
