import { COLORS } from '../../theme';
import { SubTitle } from '../atoms/SubTitle';
import { Title } from '../atoms/Title';
import React, { useRef } from 'react';
import styled from 'styled-components';
import { motion, useInView } from 'framer-motion';
import { StaticImage } from 'gatsby-plugin-image';
import { Text } from '../atoms/Text';

const Container = styled.div`
	height: 100vh;
	width: 100vw;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	scroll-snap-align: start;
`;

const TextContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 80%;
	margin: auto;
	align-items: flex-start;
	justify-content: center;
`;

const AvatarImage = styled(StaticImage);

export default function About() {
	return (
		<>
			<Container>
				<StaticImage
					src='../../images/self portraits/R6II5047-Edit.jpg'
					width={150}
					height={150}
					style={{ borderRadius: '50%' }}
					alt='Portrait of Nicholas Gould'
				/>
				<motion.div
					initial={{ opacity: 0, scale: 0.5 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{
						duration: 0.8,
						delay: 0.5,
						ease: [0, 0.71, 0.2, 1.01],
					}}>
					<Title>ABOUT ME</Title>
				</motion.div>
			</Container>
			<Container>
				<TextContainer>
					<Title>ABOUT ME</Title>
					<Text style={{ margin: 0 }}>
						Lorem ipsum dolor sit, amet consectetur adipisicing
						elit. Deleniti exercitationem veritatis quibusdam rerum
						magnam nostrum beatae dolore corporis molestiae
						voluptatem?
					</Text>
				</TextContainer>
			</Container>
		</>
	);
}
