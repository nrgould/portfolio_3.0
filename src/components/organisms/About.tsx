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
	align-items: center;
	justify-content: center;
`;

const StyledText = styled(Text)`
	max-width: 50rem;
`;

export default function About() {
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

				<Title
					as={motion.h1}
					variants={variants}
					initial={'hidden'}
					whileInView='visible'>
					ABOUT ME
				</Title>
			</Container>
			<Container>
				<TextContainer>
					<Title
						as={motion.h2}
						whileInView={'visible'}
						initial={'hidden'}
						variants={variants}>
						ABOUT ME
					</Title>
					<StyledText
						style={{ margin: 0 }}
						as={motion.p}
						whileInView={'visible'}
						initial={'hidden'}
						variants={variants}
						transition={{ delay: 0.5 }}>
						Lorem ipsum dolor sit, amet consectetur adipisicing
						elit. Deleniti exercitationem veritatis quibusdam rerum
						magnam nostrum beatae dolore corporis molestiae
						voluptatem?
					</StyledText>
				</TextContainer>
			</Container>
		</>
	);
}
