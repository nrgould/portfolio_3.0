import { Main } from '../atoms/Main';
import React from 'react';
import { COLORS } from '../../theme';
import Navbar from './Navbar';

interface Props {
	children: JSX.Element | JSX.Element[];
	fullWidth?: boolean;
	bottomMargin?: boolean;
	ref?: any;
	hideLogo?: boolean;
}

export default function Layout({
	children,
	bottomMargin,
	fullWidth,
	ref,
	hideLogo,
}: Props) {
	return (
		<>
			<Navbar hideLogo={hideLogo} />
			<Main
				ref={ref}
				style={{
					width: fullWidth ? '100%' : '80%',
					marginBottom: bottomMargin ? '5rem' : 0,
					backgroundColor: COLORS.background,
				}}
			>
				{children}
			</Main>
		</>
	);
}
