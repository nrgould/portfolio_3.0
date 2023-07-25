import React, { useState } from 'react';
import ImageGrid from './ImageGrid';
import styled from 'styled-components';
import { AnimatePresence, motion } from 'framer-motion';
import { COLORS } from '../../theme';
import { SubTitle } from '../atoms/SubTitle';
import CategorySelector from '../molecules/CategorySelector';

const Container = styled.div`
	background-color: ${COLORS.background};
	width: 100vw;
	min-height: 100vh;
`;

export default function PortfolioImages({ data }) {
	const [portraits, setPortraits] = useState([]);
	const [landscapes, setLandscapes] = useState([]);
	const [lifestyle, setLifestyle] = useState([]);
	const [products, setProducts] = useState([]);
	const [category, setCategory] = useState('LIFESTYLE');

	data.portfolioPhotos.edges.map((image) => {
		if (
			image.node.base.includes('portrait') &&
			!portraits.includes(image)
		) {
			setPortraits([...portraits, image]);
		}

		if (
			image.node.base.includes('landscape') &&
			!landscapes.includes(image)
		) {
			setLandscapes([...landscapes, image]);
		}

		if (
			image.node.base.includes('lifestyle') &&
			!lifestyle.includes(image)
		) {
			setLifestyle([...lifestyle, image]);
		}

		if (image.node.base.includes('product') && !products.includes(image)) {
			setProducts([...products, image]);
		}
	});

	function handleCategory() {
		switch (category) {
			case 'LIFESTYLE':
				return lifestyle;
			case 'LANDSCAPE':
				return landscapes;
			case 'PRODUCT':
				return products;
			case 'PORTRAIT':
				return portraits;
		}
	}

	return (
		<Container>
			<AnimatePresence mode='wait'>
				<CategorySelector
					category={category}
					setCategory={setCategory}
				/>
				<ImageGrid data={handleCategory()} />
			</AnimatePresence>
		</Container>
	);
}
