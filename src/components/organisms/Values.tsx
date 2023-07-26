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

export default function Values() {
	return (
		<>
			<Container>
				<Title>VALUES</Title>
				<StyledSubtitle>CREATIVE VISION</StyledSubtitle>
				<StyledSubtitle>MISSION-DRIVEN</StyledSubtitle>
				<StyledSubtitle>EFFICIENCY</StyledSubtitle>
			</Container>
			<Container>
				<TextContainer>
					<Title>CREATIVE VISION</Title>
					<StyledText>
						Find the Equilibrium between art and effectiveness
					</StyledText>
				</TextContainer>
			</Container>
		</>
	);
}
