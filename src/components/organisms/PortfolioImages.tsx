import React, { useEffect, useState } from 'react';
import ImageGrid from './ImageGrid';
import styled from 'styled-components';
import { AnimatePresence } from 'framer-motion';
import { COLORS } from '../../theme';
import CategorySelector from '../molecules/CategorySelector';
import AnimatedTitlePage from './AnimatedTitlePage';

const Container = styled.div`
	background-color: ${COLORS.background};
	width: 100vw;
	min-height: 100vh;
	padding-top: 2.5rem;
	scroll-snap-align: start;
`;

export default function PortfolioImages({ data }) {
	const [portraits, setPortraits] = useState([]);
	const [landscapes, setLandscapes] = useState([]);
	const [lifestyle, setLifestyle] = useState([]);
	const [products, setProducts] = useState([]);
	const [category, setCategory] = useState('LIFESTYLE');

	useEffect(() => {
		const updatedCategories = data.portfolioPhotos.edges.reduce(
			(acc, image) => {
				const { base } = image.node;

				if (base.includes('portrait') && !portraits.includes(image)) {
					acc.portraits.push(image);
				}

				if (base.includes('landscape') && !landscapes.includes(image)) {
					acc.landscapes.push(image);
				}

				if (base.includes('lifestyle') && !lifestyle.includes(image)) {
					acc.lifestyle.push(image);
				}

				if (base.includes('product') && !products.includes(image)) {
					acc.products.push(image);
				}

				return acc;
			},
			{
				portraits: [...portraits],
				landscapes: [...landscapes],
				lifestyle: [...lifestyle],
				products: [...products],
			}
		);

		setPortraits(updatedCategories.portraits);
		setLandscapes(updatedCategories.landscapes);
		setLifestyle(updatedCategories.lifestyle);
		setProducts(updatedCategories.products);
	}, [data, portraits, landscapes, lifestyle, products]);

	function handleCategory() {
		switch (category) {
			case 'LIFESTYLE':
				return lifestyle;
			case 'LANDSCAPE':
				return landscapes;
			case 'PORTRAIT':
				return portraits;
		}
	}

	return (
		<>
			<AnimatedTitlePage text='PHOTOGRAPHY' />
			<Container id='images'>
				<AnimatePresence mode='wait'>
					<CategorySelector
						category={category}
						setCategory={setCategory}
					/>
					<ImageGrid data={handleCategory()} />
				</AnimatePresence>
			</Container>
		</>
	);
}
