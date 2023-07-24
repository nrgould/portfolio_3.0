import { COLORS } from '../../theme';
import { SubTitle } from '../atoms/SubTitle';
import { Title } from '../atoms/Title';
import React, { useRef } from 'react';
import styled from 'styled-components';
import { useWindowDimensions } from '../../hooks/useWindowDimensions';
import { motion, useInView } from 'framer-motion';
import { StaticImage } from 'gatsby-plugin-image';

const Container = styled.div`
	height: 100vh;
	width: 100vw;
	background-color: ${COLORS.background};
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
`;

const AvatarImage = styled(StaticImage);

export default function About() {
	const { width, height }: any = useWindowDimensions();
	return (
		<>
      <Container>
        <StaticImage
          src='../../images/photography/self portraits/R6II5047-Edit.jpg'
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
        
      </Container>
    </>
	);
}
