import { Title } from '../atoms/Title';
import {
	MotionValue,
	motion,
	useAnimation,
	useInView,
	useMotionValue,
	useMotionValueEvent,
	useScroll,
	useTransform,
} from 'framer-motion';
import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { COLORS } from '../../theme';

const TitleContainer = styled.div`
	scroll-snap-align: start;
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const StyledTitle = styled(Title)`
	font-size: 5rem;
	line-height: 5rem;

	@media (max-width: 767px) {
		font-size: 2.8rem;
	}
`;

export default function AnimatedTitlePage({ text }) {
	const ref = useRef();

	console.log(ref);

	const { scrollYProgress } = useScroll({
		target: ref,
		// offset: ['end end', 'start start'],
	});

	useMotionValueEvent(scrollYProgress, 'change', (latest) => {
		console.log('Page scroll: ', latest);
	});

	const scaleAnim = useTransform(scrollYProgress, [0, 0.5, 1], [0.5, 1, 1.5]);

	return (
		<TitleContainer ref={ref}>
			<StyledTitle
				aria-label={text}
				role='heading'
				as={motion.h1}
				initial={{ opacity: 0, y: 30, scaleX: 0.75 }}
				whileInView={{ scaleX: 1, opacity: 1, y: 0 }}
				transition={{ duration: 0.6 }}
				whileTap={{ scale: 0.97 }}>
				{text}
			</StyledTitle>
		</TitleContainer>
	);
}
