import React from 'react';
import styled, { css } from 'styled-components';
import '@fontsource/josefin-sans';
import { COLORS, SHADOW } from '../../theme';
import { GatsbyLinkProps, Link } from 'gatsby';

interface styleProps {
	hasIcon?: boolean;
	primary?: boolean;
	secondary?: boolean;
}

const primaryStyles = css`
	color: ${COLORS.primaryText};
	background: ${COLORS.primary};

	&:hover {
		background: ${COLORS.primarySoft};
		transform: scale(1.01);
	}
`;

const secondaryStyles = css`
	color: ${COLORS.buttonTextBlack};
	background: ${COLORS.secondary};

	&:hover {
		background: ${COLORS.primary};
		transform: scale(1.01);
	}
`;

const iconStyles = css`
	margin-right: 5px;
	transition: all 200ms ease;
`;

const ButtonText = styled.p<styleProps>`
	text-decoration: none;
	font-weight: 500;
	font-size: 1rem;
	padding: 0;
	margin: 0;
	${(p) => p.hasIcon && iconStyles};
`;

export const StyledLink = styled(Link)<styleProps>`
	border: none;
	margin-top: 1rem;
	text-align: center;
	cursor: pointer;
	padding: 0.75rem 1.5rem;
	border-radius: 4px;
	box-shadow: ${SHADOW.normal};
	transition: all 200ms ease;
	display: flex;
	flex-direction: row;
	align-items: center;
	font-family: 'Josefin Sans', sans-serif;
	justify-content: space-around ${(p) => p.primary && primaryStyles};
	text-decoration: none;
	color: ${COLORS.buttonTextBlack} ${(p) => p.secondary && secondaryStyles};
`;

interface Props extends GatsbyLinkProps<unknown> {
	text: string;
	icon?: JSX.Element;
	primary?: boolean;
	secondary?: boolean;
	style?: object;
	type?: 'button' | 'submit' | 'reset';
}

export default function ButtonNavLink({
	text,
	icon,
	primary,
	secondary,
	style,
	type,
	to,
}: Props) {
	const hasIcon = !!icon;
	return (
		<StyledLink
			style={style}
			to={to}
			hasIcon={hasIcon}
			primary={primary}
			secondary={secondary}
			type={type}
		>
			<ButtonText style={style} hasIcon={hasIcon}>
				{text}
			</ButtonText>
			{icon}
		</StyledLink>
	);
}
