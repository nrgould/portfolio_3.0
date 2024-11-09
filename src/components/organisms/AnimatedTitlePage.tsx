import { Title } from '../atoms/Title';
import {
	motion,
	useMotionValueEvent,
	useScroll,
	useTransform,
} from 'framer-motion';
import React, { useRef } from 'react';
import styled from 'styled-components';

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
	letter-spacing: 16px;

	@media (max-width: 767px) {
		font-size: 2rem;
		letter-spacing: 10px;
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
				initial={{ opacity: 0, y: 0, scaleX: 0.8 }}
				whileInView={{ scaleX: 1, opacity: 1, y: 0 }}
				transition={{ duration: 0.6 }}
				whileTap={{ scale: 0.97 }}
			>
				{text}
			</StyledTitle>
		</TitleContainer>
	);
}
