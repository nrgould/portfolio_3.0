import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { COLORS } from '../../theme';
import { SubTitle } from '../atoms/SubTitle';

const TextContainer = styled(motion.div)`
	display: flex;
	/* justify-content: center;
	align-items: center;
	flex-direction: column; */
	flex-grow: 1;
	justify-content: center;
	align-items: center;
	flex-wrap: nowrap;
	width: 60%;
	margin: auto;

	@media (max-width: 767px) {
		font-size: 0.8rem;
		width: 100%;
	}
`;

const ListItem = styled(SubTitle)`
	padding: 8px 12px;
	position: relative;
	cursor: pointer;
	/* height: 24px; */
	display: flex;
	justify-content: center;
	align-items: center;
	flex: 1;
	min-width: 0;
	position: relative;
	user-select: none;
	font-size: 1.5rem;

	@media (max-width: 767px) {
		font-size: 0.8rem;
	}
`;

const Underline = styled(motion.div)`
	position: absolute;
	bottom: -1px;
	left: 0;
	right: 0;
	height: 1px;
	background: ${COLORS.primary};
`;

const categories = ['LIFESTYLE', 'LANDSCAPE', 'PRODUCT', 'PORTRAIT'];

export default function CategorySelector({ category, setCategory }) {
	return (
		<>
			<TextContainer>
				{categories.map((cat) => {
					return (
						<ListItem
							as={motion.h3}
							whileTap={{ scale: 0.97 }}
							onClick={() => setCategory(cat)}>
							{cat.toUpperCase()}
							{cat === category ? <Underline /> : null}
						</ListItem>
					);
				})}
			</TextContainer>
		</>
	);
}
