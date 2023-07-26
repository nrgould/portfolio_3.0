import { COLORS } from '../../theme';
import { SubTitle } from '../atoms/SubTitle';
import { Title } from '../atoms/Title';
import React, { useRef } from 'react';
import styled from 'styled-components';
import { motion, useInView } from 'framer-motion';
import { StaticImage } from 'gatsby-plugin-image';
import { Text } from '../atoms/Text';
import FlexColumn from '../atoms/FlexColumn';

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
	font-size: 1.5rem;

	@media (max-width: 767px) {
		font-size: 1.2rem;
	}
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
				<FlexColumn alignItems='center' justifyContent='center'>
					<StaticImage
						src='../../images/R6II9003.jpg'
						width={200}
						height={200}
						style={{ borderRadius: '50%' }}
						alt='Portrait of Nicholas Gould'
					/>
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
							elit. Deleniti exercitationem veritatis quibusdam
							rerum magnam nostrum beatae dolore corporis
							molestiae voluptatem?
						</StyledText>
					</TextContainer>
				</FlexColumn>
			</Container>
		</>
	);
}
