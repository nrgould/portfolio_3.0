import React, { useRef } from 'react';
import styled from 'styled-components';
import { motion, useInView } from 'framer-motion';
import GridImage from '../molecules/GridImage';
import { SubTitle } from '../atoms/SubTitle';
import FlexRow from '../atoms/FlexRow';

const GridContainer = styled(motion.div)`
	width: 100vw;
	column-count: 3;
	column-gap: 0px;
	line-height: 0;
	padding: 0 1rem;

	@media (max-width: 767px) {
		column-count: 2;
		padding: 0 0.5rem;
	}
`;

export default function ImageGrid({ data }) {
	const ref = useRef(null);
	const inView = useInView(ref, { once: true });

	const variants = {
		hidden: { opacity: 0 },
		show: {
			opacity: 1,
			transition: {
				staggerChildren: 0.07,
			},
		},
	};

	return (
		<>
			{data.length < 1 ? (
				<FlexRow
					style={{ height: '50vh' }}
					alignItems='center'
					justifyContent='center'>
					<SubTitle style={{ textAlign: 'center' }}>
						Sorry, something went wrong.
					</SubTitle>
				</FlexRow>
			) : null}
			<GridContainer
				ref={ref}
				variants={variants}
				animate={inView ? 'show' : 'hidden'}>
				{data.map((image) => {
					return <GridImage key={image.node.id} image={image} />;
				})}
			</GridContainer>
		</>
	);
}
