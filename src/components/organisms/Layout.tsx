import { Main } from '../atoms/Main';
import React from 'react';
import { useWindowDimensions } from '../../hooks/useWindowDimensions';
import { COLORS, breakpoint } from '../../theme';

interface Props {
	children: JSX.Element | JSX.Element[];
	fullWidth?: boolean;
	bottomMargin?: boolean;
}

export default function Layout({ children, bottomMargin, fullWidth }: Props) {
	const { width }: any = useWindowDimensions();
	return (
		<>
			{/* {width > breakpoint ? <NavbarDesktop /> : <NavbarMobile />} */}
			<Main
				style={{
					width: fullWidth ? '100%' : '80%',
					marginBottom: bottomMargin ? '5rem' : 0,
					backgroundColor: COLORS.background,
					// overflowX: fullWidth ? "hidden" : "auto",
				}}>
				{children}
			</Main>
		</>
	);
}
