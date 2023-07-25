import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { COLORS } from '../../theme';

const Container = styled.div`
	height: 100vh;
	width: 100vw;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	scroll-snap-align: start;
`;

const Box = styled(motion.div)`
	width: 100px;
	height: 100px;
	background-color: ${COLORS.primary};
	margin: 1rem;
`;

export default function Test() {
	const parentVariants = {
		hidden: {
			opacity: 0,
			y: 50,
			transition: { duration: 0.5 },
		},
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.5,
				when: 'beforeChildren', //use this instead of delay
				staggerChildren: 0.2, //apply stagger on the parent tag
			},
		},
	};
	const childVariants = {
		hidden: {
			opacity: 0,
			x: 200,
			transition: { duration: 0.5 },
		},
		visible: {
			opacity: 1,
			x: 0,
			transition: { duration: 0.5 },
		},
	};
	return (
		<Container>
			<motion.div
				variants={parentVariants}
				animate='visible'
				initial='hidden'>
				<Box variants={childVariants} />
				<Box variants={childVariants} />
				<Box variants={childVariants} />
				<Box variants={childVariants} />
				<Box variants={childVariants} />
			</motion.div>
		</Container>
	);
}
