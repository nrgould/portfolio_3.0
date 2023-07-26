import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import {
	MotionValue,
	motion,
	useInView,
	useScroll,
	useTransform,
} from 'framer-motion';
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

function useParallax(value: MotionValue<number>, distance: number) {
	return useTransform(value, [0, 1], [-distance, distance]);
}

export default function Test() {
	const ref = useRef(null);
	const inView = useInView(ref);

	const { scrollYProgress } = useScroll({ target: ref });
	const y = useParallax(scrollYProgress, 350);

	// useEffect(() => {
	// 	console.log('Element is in view: ', inView);
	// }, [inView]);

	return (
		<Container>
			<motion.div
				ref={ref}
				animate={inView ? 'visible' : 'hidden'}
				initial='hidden'>
				<Box />
			</motion.div>
		</Container>
	);
}
