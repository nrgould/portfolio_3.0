import styled from 'styled-components';
import { breakpoint, COLORS } from '../../theme';

interface Props {
	size?: string | number;
}

export const Title = styled.h1<Props>`
	font-size: ${(p) => p.size ?? '2rem'};
	color: ${COLORS.primaryText};
	font-weight: 700;
	position: relative;
	overflow: hidden;
	text-overflow: ellipsis;
	display: -webkit-box;
	-webkit-line-clamp: 5; /* number of lines to show */
	-webkit-box-orient: vertical;
	line-clamp: 5;
	line-height: 3.2rem;

	@media (max-width: ${breakpoint + 'px'}) {
		font-size: ${(p) => p.size ?? '2rem'};
	}
`;
