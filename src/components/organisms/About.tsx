import { Title } from '../atoms/Title';
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { StaticImage } from 'gatsby-plugin-image';
import { Text } from '../atoms/Text';
import FlexColumn from '../atoms/FlexColumn';

const Container = styled.section`
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

// New styled component for the "Featured in The Paper" section
const FeaturedSection = styled.div`
	margin-top: 2rem;
	display: flex;
	flex-direction: column;
	align-items: center;

	a {
		text-decoration: none;
		color: inherit;
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
						style={{
							borderRadius: '50%',
							overflow: 'hidden',
						}}
						imgStyle={{
							objectFit: 'cover',
							objectPosition: 'center',
						}}
						alt='Portrait of Nicholas Gould'
					/>
					<TextContainer>
						<Title
							as={motion.h2}
							whileInView={'visible'}
							initial={'hidden'}
							variants={variants}
						>
							ABOUT ME
						</Title>
						<StyledText
							as={motion.p}
							whileInView={'visible'}
							initial={'hidden'}
							variants={variants}
							transition={{ delay: 0.5 }}
						>
							I’m a lifestyle photographer focused on creating
							honest, engaging images for both brands and
							individuals. Whether shooting portraits or capturing
							product experiences in a unique setting, my aim is
							to tell real stories that resonate. By blending a
							relaxed approach with careful attention to detail, I
							deliver visuals that help my clients connect with
							their audience on a genuine level.
						</StyledText>
					</TextContainer>
					{/* New "Featured in The Paper" Section */}
					<FeaturedSection>
						<a
							href='https://www.thepaper.media/news/goulds-landscape-photography-combines-creativity-love-of-outdoors/article_fab87202-bbdf-11ef-b0ff-4f52004d46e9.html'
							target='_blank'
							rel='noopener noreferrer'
						>
							<Title
								as={motion.h3}
								whileInView={'visible'}
								initial={'hidden'}
								variants={variants}
								style={{
									marginTop: '1rem',
									marginBottom: '0',
									fontSize: '1rem',
									textAlign: 'center',
								}}
							>
								Featured in
							</Title>
							<div
								style={{
									marginTop: '0.5rem',
									display: 'flex',
									gap: '1rem',
								}}
							>
								<StaticImage
									src='../../images/logos/thepaper.png'
									alt='The Paper logo'
									width={200}
									height={50}
									imgStyle={{
										objectFit: 'contain',
									}}
								/>
								<StaticImage
									src='../../images/logos/BACLogo.jpg'
									alt='Burke Arts Council Logo'
									width={45}
									height={50}
									// imgStyle={{
									// 	objectFit: 'contain',
									// }}
								/>
							</div>
						</a>
					</FeaturedSection>
				</FlexColumn>
			</Container>
		</>
	);
}
