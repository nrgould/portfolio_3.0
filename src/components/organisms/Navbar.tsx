import Burger from '../atoms/nav/Burger';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { AnimatePresence, motion } from 'framer-motion';
import FlexRow from '../atoms/FlexRow';
import { COLORS, breakpoint } from '../../theme';
import FlexColumn from '../atoms/FlexColumn';
import { useWindowDimensions } from '../../hooks/useWindowDimensions';
import { Link } from 'gatsby';
import { Title } from '../atoms/Title';

const Container = styled(motion.nav)`
	position: absolute;
	width: 100vw;
	padding: 1rem 3rem;
	top: 0;
	/* z-index: 10; */

	@media (max-width: 767px) {
		padding: 0 1rem;
	}
`;

const StyledNavLinks = styled.ul`
	padding-top: 2rem;
	display: flex;
	min-height: 95vh;
	flex-direction: column;
	align-items: flex-start;
	justify-content: space-between;
	flex: 1;
	&:last-child {
		margin-top: 2rem;
	}
`;

const NavLink = styled(Link)`
	color: ${COLORS.primaryText};
	font-size: 2rem;
	font-weight: 600;
	padding: 0.75rem 1rem;
	margin-bottom: 8px;
	border-radius: 6px;
	min-width: 90%;
	text-decoration: none;
	text-decoration: none;
	font-weight: 600;
	cursor: pointer;
	margin-right: 1rem;

	@media (max-width: 767px) {
		font-size: 1.5rem;
	}

	transition: all 200ms ease;

	&:hover {
		color: ${COLORS.white};
	}

	&:last-of-type {
		margin-bottom: 2rem;
	}
`;

const StyledTitle = styled(Title)`
	padding: 0;
	margin: 0;
	color: ${COLORS.primary};
	font-size: 1rem;
	text-align: center;
	z-index: 9;
	position: absolute;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -40%);

	@media (max-width: 767px) {
		transform: translate(-50%, -45%);
		font-size: 1rem;
	}
`;

const Drawer = styled(motion.div)<{ isOpen: boolean }>`
	background-color: ${COLORS.foreground};
	width: 30vw;
	height: 100vh;
	position: fixed;
	top: 0;
	z-index: 10;
	display: ${(p) => (p.isOpen ? 'block' : 'none')};

	@media (max-width: 767px) {
		width: 66.6vw;
	}
`;

const Backdrop = styled(motion.div)`
	background-color: #000;
	opacity: 0.4;
	position: absolute;
	top: 0;
	left: 0;
	height: 100vh;
	width: 100vw;
	z-index: 1;
	cursor: pointer;
`;

const DRAWER_OPEN_FACTOR_DESKTOP = 3.8 / 3;
const DRAWER_OPEN_FACTOR_MOBILE = 3;

export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false);

	const { width } = useWindowDimensions();

	let drawerOpenFactor = DRAWER_OPEN_FACTOR_DESKTOP;
	let drawerOpenDist = width;

	useEffect(() => {
		handleDrawerOpenDist();
	});

	function handleDrawerOpenDist() {
		if (width < breakpoint) {
			drawerOpenFactor = DRAWER_OPEN_FACTOR_MOBILE;
		} else {
			drawerOpenFactor = DRAWER_OPEN_FACTOR_DESKTOP;
		}

		drawerOpenDist = width / drawerOpenFactor;

		return drawerOpenDist;
	}

	function handleOpen() {
		setIsOpen(isOpen ? false : true);
		document.body.style.overflow = isOpen ? 'unset' : 'hidden';
	}
	return (
		<>
			<Container>
				<FlexRow
					alignItems='center'
					justifyContent='center'
					style={{ position: 'relative' }}
				>
					<NavLink to='#hero'>
						<StyledTitle>NICHOLAS GOULD</StyledTitle>
					</NavLink>
					<Burger
						isOpen={isOpen}
						onClick={handleOpen}
						strokeWidth='6'
						transition={{
							type: 'spring',
							stiffness: 260,
							damping: 20,
						}}
					/>
				</FlexRow>
			</Container>
			<AnimatePresence mode='wait'>
				{isOpen ? (
					<>
						<Drawer
							isOpen={isOpen}
							exit={{ x: width }}
							initial={{ x: width }}
							animate={
								isOpen
									? { x: handleDrawerOpenDist() }
									: { x: width }
							}
							transition={{
								type: 'tween',
								ease: 'easeInOut',
								duration: 0.5,
							}}
						>
							<StyledNavLinks>
								<FlexColumn
									alignItems='flex-start'
									justifyContent='center'
									style={{ width: '100%' }}
								>
									<NavLink onClick={handleOpen} to='#about'>
										About
									</NavLink>
									<NavLink onClick={handleOpen} to='#images'>
										Stills
									</NavLink>
									<NavLink onClick={handleOpen} to='#values'>
										Values
									</NavLink>
									<NavLink onClick={handleOpen} to='#contact'>
										Contact
									</NavLink>
									<NavLink onClick={handleOpen} to='#prints'>
										Prints
									</NavLink>
								</FlexColumn>
							</StyledNavLinks>
						</Drawer>

						<Backdrop
							initial={{ opacity: 0 }}
							exit={{ opacity: 0 }}
							animate={{ opacity: 0.4 }}
							transition={{ duration: 0.5 }}
							onClick={handleOpen}
						/>
					</>
				) : null}
			</AnimatePresence>
		</>
	);
}
