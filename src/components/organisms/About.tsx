import { Title } from '../atoms/Title';
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { StaticImage } from 'gatsby-plugin-image';
import { Text } from '../atoms/Text';
import FlexColumn from '../atoms/FlexColumn';

const Container = styled.div`
	height: 100vh;
	display: flex;
	width: 100vw;
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

	@media (max-width: 767px) {
		width: 90%;
	}
`;

const StyledText = styled(Text)`
	max-width: 50rem;
	font-size: 1.5rem;
	margin: 0;
	text-align: center;

	@media (max-width: 767px) {
		font-size: 1.2rem;
		max-width: 100%;
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
			<Container id='about'>
				<FlexColumn alignItems='center' justifyContent='center'>
					<StaticImage
						src='../../images/nicholas_portrait.jpg'
						width={150}
						height={150}
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
							as={motion.p}
							whileInView={'visible'}
							initial={'hidden'}
							variants={variants}
							transition={{ delay: 0.5 }}>
							As a lifestyle photographer with a passion for the
							outdoors, coffee, and traveling, I help clients
							establish greater emotional appeal to their brands
							through capturing authentic moments between people
							and product. With a deep appreciation for nature and
							an innate ability to connect with people, I strive
							to create compelling visuals that resonate with
							audiences and evoke emotions.
						</StyledText>
					</TextContainer>
				</FlexColumn>
			</Container>
		</>
	);
}
