import { COLORS } from '../../theme';
import { SubTitle } from '../atoms/SubTitle';
import { Title } from '../atoms/Title';
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Text } from '../atoms/Text';
import { Link } from 'gatsby';

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
	justify-content: space-evenly;
`;

const StyledSubtitle = styled(SubTitle)`
	font-size: 5rem;
	color: ${COLORS.secondary};
	line-height: 2rem;

	@media (max-width: 767px) {
		font-size: 2.5rem;
	}
`;

const StyledText = styled(Text)`
	margin: 0;
	font-size: 2rem;
	text-align: center;
`;

const StyledLink = styled(Link)`
	text-decoration: none;
`;

export default function Values() {
	const variants = {
		hidden: { opacity: 0, y: 30 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				type: 'spring',
				damping: 20,
				stiffness: 100,
				bounce: 0,
			},
		},
	};

	return (
		<>
			<Container>
				<Title>VALUES</Title>
				<StyledLink to={'#creative-vision'}>
					<StyledSubtitle
						as={motion.h2}
						whileInView={'visible'}
						whileHover={{ scale: 1.03 }}
						initial={'hidden'}
						variants={variants}>
						CREATIVE VISION
					</StyledSubtitle>
				</StyledLink>
				<StyledLink to={'#mission-driven'}>
					<StyledSubtitle
						as={motion.h2}
						whileInView={'visible'}
						whileHover={{ scale: 1.03 }}
						initial={'hidden'}
						variants={variants}>
						MISSION-DRIVEN
					</StyledSubtitle>
				</StyledLink>
				<StyledLink to={'#efficiency'}>
					<StyledSubtitle
						as={motion.h2}
						whileInView={'visible'}
						whileHover={{ scale: 1.03 }}
						initial={'hidden'}
						variants={variants}>
						EFFICIENCY
					</StyledSubtitle>
				</StyledLink>
			</Container>
			<Container id='creative-vision'>
				<TextContainer>
					<Title>CREATIVE VISION</Title>
					<StyledText
						as={motion.p}
						variants={variants}
						whileInView={'visible'}
						initial={'hidden'}>
						Find the Equilibrium between artistic vision and
						marketability
					</StyledText>
				</TextContainer>
			</Container>
			<Container id='mission-driven'>
				<TextContainer>
					<Title>MISSION-DRIVEN</Title>
					<StyledText
						as={motion.p}
						variants={variants}
						whileInView={'visible'}
						initial={'hidden'}>
						Work with people & brands that are passionate about
						doing good
					</StyledText>
				</TextContainer>
			</Container>
			<Container id='efficiency'>
				<TextContainer>
					<Title>EFFICIENCY</Title>
					<StyledText
						as={motion.p}
						variants={variants}
						whileInView={'visible'}
						initial={'hidden'}>
						Artistic precision to deliver effective work in a timely
						manner
					</StyledText>
				</TextContainer>
			</Container>
		</>
	);
}
