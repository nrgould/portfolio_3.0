import React, { useEffect, useState } from 'react';
import ImageGrid from './ImageGrid';
import styled from 'styled-components';
import { AnimatePresence } from 'framer-motion';
import { COLORS } from '../../theme';
import CategorySelector from '../molecules/CategorySelector';

const Container = styled.div`
	background-color: ${COLORS.background};
	width: 100vw;
	min-height: 100vh;
	padding-top: 3rem;
	padding-bottom: 3rem;
	scroll-snap-align: start;
`;

export default function PortfolioImages({ data }) {
	const [category, setCategory] = useState('LIFESTYLE');
	const [filteredImages, setFilteredImages] = useState([]);

	useEffect(() => {
		const categories = data.portfolioPhotos.edges.reduce(
			(acc, image) => {
				const { base } = image.node;

				if (base.includes('portrait')) {
					acc.portraits.push(image);
				} else if (base.includes('landscape')) {
					acc.landscapes.push(image);
				} else if (base.includes('lifestyle')) {
					acc.lifestyle.push(image);
				} else if (base.includes('product')) {
					acc.products.push(image);
				}

				return acc;
			},
			{ portraits: [], landscapes: [], lifestyle: [], products: [] }
		);

		switch (category) {
			case 'LIFESTYLE':
				setFilteredImages(categories.lifestyle);
				break;
			case 'LANDSCAPE':
				setFilteredImages(categories.landscapes);
				break;
			case 'PORTRAIT':
				setFilteredImages(categories.portraits);
				break;
			default:
				setFilteredImages(categories.lifestyle);
		}
	}, [data, category]);

	return (
		<Container id='images'>
			<AnimatePresence>
				<CategorySelector
					category={category}
					setCategory={setCategory}
				/>
				<ImageGrid data={filteredImages} />
			</AnimatePresence>
		</Container>
	);
}
