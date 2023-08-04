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

			if (
				image.node.base.includes('product') &&
				!products.includes(image)
			) {
				setProducts([...products, image]);
			}
		});
	});

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
