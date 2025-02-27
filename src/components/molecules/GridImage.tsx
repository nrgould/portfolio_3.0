import { GatsbyImage } from 'gatsby-plugin-image';
import React, { useRef } from 'react';
import styled from 'styled-components';
import { motion, useInView } from 'framer-motion';

const GridImageContainer = styled(motion.div)`
	width: 100%;
	flex-grow: 1;
	padding: 1rem;

	@media (max-width: 767px) {
		padding: 0.5rem;
	}
`;

export default function GridImage({ image, onClick }) {
	const ref = useRef(null);
	let inView = useInView(ref);

	const variants = {
		hidden: { opacity: 0, y: 30 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				type: 'spring',
				damping: 20,
				stiffness: 100,
				bounce: 0,
			},
		},
	};

	return (
		<>
			<GridImageContainer
				ref={ref}
				variants={variants}
				initial={'hidden'}
				animate={inView ? 'visible' : 'hidden'}
				whileHover={{ scale: 1.03 }}
				transition={{ duration: 0.2 }}
				whileTap={{ scale: 0.97 }}
				onClick={onClick}
			>
				<GatsbyImage
					image={image.node.childImageSharp.gatsbyImageData}
					alt={image.node.base.split('_').join(' ')}
				/>
			</GridImageContainer>
		</>
	);
}
