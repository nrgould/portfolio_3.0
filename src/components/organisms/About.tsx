import { Title } from '../atoms/Title';
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
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
							style={{
								margin: 0,
								maxWidth: '50vw',
								textAlign: 'center',
							}}
							as={motion.p}
							whileInView={'visible'}
							initial={'hidden'}
							variants={variants}
							transition={{ delay: 0.5 }}>
							As a lifestyle photographer with a passion for the
							outdoors, coffee, and traveling, I thrive on
							capturing authentic moments that celebrate the
							beauty of life. With a deep appreciation for nature
							and an innate ability to connect with people, I
							strive to create compelling visuals that resonate
							with audiences and evoke emotions.
						</StyledText>
					</TextContainer>
				</FlexColumn>
			</Container>
		</>
	);
}
