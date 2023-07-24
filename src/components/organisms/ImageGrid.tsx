import { COLORS, breakpoint } from '../../theme';
import { SubTitle } from '../atoms/SubTitle';
import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { useWindowDimensions } from '../../hooks/useWindowDimensions';
import { motion, useInView } from 'framer-motion';
import GridImage from '../molecules/GridImage';

const Container = styled.div`
	background-color: ${COLORS.background};
	width: 100vw;
`;

const GridContainer = styled(motion.div)`
	width: 100vw;
	/* padding: 1rem; */
	display: grid;
	/* grid-template-columns: 1fr 1fr; */
	grid-template-columns: repeat(2, minmax(100px, 2fr));
	grid-auto-rows: auto;
	/* grid-template-rows: repeat(auto-fit, minmax(200px, 1fr)); */
	/* grid-template-rows: minmax(200px, 2fr); */
	/* grid-gap: 6px; */
`;

const TextContainer = styled(motion.div)`
	display: flex;
	justify-content: center;
	align-items: center;
`;
export default function ImageGrid({ data }) {
	const [gridWidth, setGridWidth] = useState(2);
	const { width, height }: any = useWindowDimensions();

	const ref = useRef(null);
	const inView = useInView(ref, { once: true });

	useEffect(() => {
		if (width > breakpoint) {
			setGridWidth(3);
		} else {
			setGridWidth(2);
		}
	});

	const variants = {
		hidden: { opacity: 0 },
		show: {
			opacity: 1,
			transition: {
				staggerChildren: 0.07,
				// when: 'beforeChildren',
			},
		},
	};

	//2 image wide grid on mobile, 3 images wide with padding on desktop
	//even padding around images, around 4-8px
	//each image has it's own staggered animation

	return (
		<Container>
			<TextContainer>
				<SubTitle>LIFESTYLE</SubTitle>
			</TextContainer>
			<GridContainer
				ref={ref}
				variants={variants}
				animate={inView ? 'show' : 'hidden'}>
				{data.allFile.edges.map((item, index) => {
					return <GridImage key={index} item={item} />;
				})}
			</GridContainer>
		</Container>
	);
}
