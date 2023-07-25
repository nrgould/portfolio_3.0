import { Field } from 'formik';
import React from 'react';
import styled from 'styled-components';
import { useWindowDimensions } from '../../hooks/useWindowDimensions';
import { breakpoint, COLORS, SHADOW } from '../../theme';

const StyledTextArea = styled(Field)`
	border-radius: 4px;
	border: none;
	background-color: ${COLORS.foreground};
	color: ${COLORS.secondaryText};
	padding: 0.75rem 1rem;
	box-sizing: border-box;
	/* box-shadow: ${SHADOW.normal}; */
	margin-bottom: 2rem;
	resize: vertical;
	&::placeholder {
		font-family: 'Josefin Sans';
		color: ${COLORS.placeholderText};
	}
	font-family: 'Josefin Sans';
`;

const StyledLabel = styled.label`
	font-weight: 600;
	font-size: 1rem;
	margin-bottom: 0.3rem;
	color: ${COLORS.secondaryText};
`;

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: space-between;
`;

interface Props {
	label: string;
	name: string;
	placeholder?: string;
	style?: object;
	handleChange: any;
	value: string;
	width?: string;
}

export default function TextArea({
	label,
	name,
	placeholder,
	style,
	handleChange,
	value,
	width,
}: Props) {
	const { width: viewWidth } = useWindowDimensions();
	return (
		<Container
			style={{
				width:
					viewWidth < breakpoint
						? viewWidth / 1.3
						: width
						? width
						: `100%`,
				...style,
			}}>
			<StyledLabel>{label}</StyledLabel>
			<StyledTextArea
				style={{
					width:
						viewWidth < breakpoint
							? viewWidth / 1.3
							: `calc(100% - 16px)`,
					...style,
				}}
				name={name}
				as='textarea'
				placeholder={placeholder}
				rows={5}
				onChange={handleChange}
				value={value}
			/>
		</Container>
	);
}
