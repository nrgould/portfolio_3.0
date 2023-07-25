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

export default function GridImage({ image }) {
	const ref = useRef(null);
	let inView = useInView(ref, { once: true });

	const variants = {
		hidden: { opacity: 0, y: 30, scaleX: 0.9 },
		show: inView
			? {
					opacity: 1,
					y: 0,
					scaleX: 1,
					transition: {
						type: 'spring',
						damping: 20,
						stiffness: 100,
						bounce: 0,
					},
			  }
			: { opacity: 0, y: 30, scaleX: 0.9 },
	};

	return (
		<GridImageContainer
			ref={ref}
			variants={variants}
			whileInView={{ scaleX: 1, opacity: 1, y: 0 }}
			initial={{ scaleX: 0.9, opacity: 0, y: 30 }}
			exit={{ scaleX: 0.9, opacity: 0, y: 30 }}
			whileTap={{ scale: 0.97 }}>
			<GatsbyImage
				image={image.node.childImageSharp.gatsbyImageData}
				alt={image.node.base.split('_').join(' ')}
			/>
		</GridImageContainer>
	);
}
