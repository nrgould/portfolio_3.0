import styled from 'styled-components';
import '@fontsource/josefin-sans';
import { COLORS } from '../../theme';

export const Text = styled.p`
	font-family: 'Josefin Sans', sans-serif;
	font-size: 1rem;
	color: ${COLORS.secondaryText};
	line-height: 1.75;
	white-space: normal;
	margin: 0;
	padding: 0;
`;
