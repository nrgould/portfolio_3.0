import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { COLORS } from '../../theme';
import FlexColumn from '../atoms/FlexColumn';
import FlexRow from '../atoms/FlexRow';
import { Title } from '../atoms/Title';
import { Text } from '../atoms/Text';
import '@fontsource/josefin-sans';

const Container = styled(motion.div)`
	width: 100%;
	height: 100vh;
	scroll-snap-align: start;
	position: relative;

	@media (max-width: 767px) {
	}
`;

export const ExternalLink = styled.a`
	margin-right: 1rem;
	text-decoration: none;
	font-family: 'Josefin Sans', sans-serif;
	color: ${COLORS.secondary};

	&:hover {
		color: ${COLORS.primary};
	}
`;

export default function Footer() {
	return (
		<Container>
			<FlexColumn
				style={{ height: '100%' }}
				alignItems='center'
				justifyContent='center'>
				<Title style={{ fontSize: '1.75rem' }}>
					See more of my work:
				</Title>
				<FlexRow alignItems='center' justifyContent='center'>
					<ExternalLink
						target='_blank'
						href='https://www.instagram.com/nicholasgould1'>
						Instagram
					</ExternalLink>
					<ExternalLink
						target='_blank'
						href='https://www.behance.net/nrgould197'>
						Behance
					</ExternalLink>
					<ExternalLink
						target='_blank'
						href='https://www.linkedin.com/in/nicholasgouldfpv/'>
						LinkedIn
					</ExternalLink>
				</FlexRow>
				<Text
					style={{
						position: 'absolute',
						bottom: 10,
						color: COLORS.border,
					}}>
					© {new Date().getFullYear()} Nicholas Gould
				</Text>
			</FlexColumn>
		</Container>
	);
}
