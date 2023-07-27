import React from 'react';
import styled from 'styled-components';
import { motion, Transition } from 'framer-motion';
import { COLORS } from '../../../theme';
import { useWindowDimensions } from '../../../hooks/useWindowDimensions';

interface Props {
	isOpen?: Boolean;
	color?: string;
	strokeWidth?: string | number;
	width?: string | number;
	height?: string | number;
	transition?: Transition;
	lineProps?: any;
	style?: object;
	onClick?: () => void;
}

const Container = styled(motion.div)`
	/* display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; */
	padding: 1rem;
	padding-right: 0;
	z-index: 20;
	cursor: pointer;
`;

const BurgerLine = styled(motion.div)`
	width: 30px;
	height: 4px;
	background-color: ${COLORS.primary};
	border-radius: 0px;
	z-index: 20;

	&:not(:last-child) {
		margin-bottom: 4px;
	}
`;

export default function Burger({
	isOpen,
	style,
	lineProps = null,
	transition = null,
	width = 24,
	height = 24,
	strokeWidth = 1,
	color = '#000',
	...props
}: Props) {
	const variant = isOpen ? 'opened' : 'closed';
	const top = {
		closed: {
			rotate: 0,
			translateY: 0,
		},
		opened: {
			rotate: 45,
			translateY: 8,
		},
	};
	const center = {
		closed: {
			opacity: 1,
		},
		opened: {
			opacity: 0,
		},
	};
	const bottom = {
		closed: {
			rotate: 0,
			translateY: 0,
		},
		opened: {
			rotate: -45,
			translateY: -8,
		},
	};

	lineProps = {
		initial: 'closed',
		animate: variant,
		transition,
		...lineProps,
	};
	return (
		<Container {...props} style={style}>
			<BurgerLine variants={top} {...lineProps} />
			<BurgerLine variants={center} {...lineProps} />
			<BurgerLine variants={bottom} {...lineProps} />
		</Container>
	);
}
