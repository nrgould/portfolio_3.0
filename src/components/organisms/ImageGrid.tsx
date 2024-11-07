import React, { useRef } from 'react';
import styled from 'styled-components';
import { motion, useInView } from 'framer-motion';
import GridImage from '../molecules/GridImage';
import { SubTitle } from '../atoms/SubTitle';
import FlexRow from '../atoms/FlexRow';

const GridContainer = styled(motion.div)`
	width: 80vw;
	margin: auto;
	column-count: 3;
	column-gap: 0px;
	line-height: 0;
	padding: 0 1rem;

	@media (max-width: 767px) {
		column-count: 2;
		padding: 0 0.5rem;
		width: 100vw;
	}
`;

const variants = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: {
			staggerChildren: 0.07,
		},
	},
	exit: { opacity: 0, x: 200 },
};

export default function ImageGrid({ data }) {
	const ref = useRef(null);
	const inView = useInView(ref, { once: true });

	console.log('InView status:', inView);

	return (
		<>
			{data.length < 1 ? (
				<FlexRow
					style={{ height: '50vh' }}
					alignItems='center'
					justifyContent='center'
				>
					<SubTitle style={{ textAlign: 'center' }}>
						Sorry, something went wrong.
					</SubTitle>
				</FlexRow>
			) : null}
			<GridContainer
				ref={ref}
				variants={variants}
				animate={inView ? 'show' : 'hidden'}
				initial='hidden'
				exit={'exit'}
			>
				{data.map((image, index) => {
					const key = image.node.id || `${image.node.base}-${index}`;
					return <GridImage key={key} image={image} />;
				})}
			</GridContainer>
		</>
	);
}
