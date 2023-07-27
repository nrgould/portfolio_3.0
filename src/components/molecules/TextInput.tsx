import { Field } from 'formik';
import React from 'react';
import styled from 'styled-components';
import { useWindowDimensions } from '../../hooks/useWindowDimensions';
import { breakpoint, COLORS, SHADOW } from '../../theme';
import '@fontsource/josefin-sans';

const StyledField = styled(Field)`
	border-radius: 4px;
	border: none;
	/* border-bottom: 1px solid ${COLORS.border}; */
	min-width: 25vw;
	padding: 0.75rem 0.5rem;
	/* box-shadow: ${SHADOW.normal}; */
	box-sizing: border-box;
	font-family: 'Josefin Sans', sans-serif;
	font-weight: 500;
	background-color: ${COLORS.foreground};
	color: ${COLORS.secondaryText};
	-webkit-appearance: none;
	&::placeholder {
		font-family: 'Josefin Sans', sans-serif;
		color: ${COLORS.placeholderText};
	}
`;

const StyledLabel = styled.label`
	font-family: 'Josefin Sans', sans-serif;
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
	margin-bottom: 2rem;
	position: relative;
`;

export const ErrorMessage = styled.p`
	font-family: 'Josefin Sans', sans-serif;
	color: ${COLORS.error};
	font-size: 0.8rem;
	font-weight: 300;
	position: absolute;
	bottom: -32px;
	left: 5px;
`;

interface Props {
	label: string;
	name: string;
	placeholder?: string;
	error?: string | null;
	handleChange: any;
	value: string;
	margin?: boolean;
	required?: boolean;
	width?: string;
	style?: object;
}

export default function TextInput({
	label,
	name,
	placeholder,
	error,
	handleChange,
	value,
	margin,
	required,
	width,
	style,
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
			<StyledField
				style={{
					width:
						viewWidth < breakpoint
							? viewWidth / 1.3
							: width
							? width
							: `100%`,
					...style,
				}}
				name={name}
				type='text'
				placeholder={placeholder}
				onChange={handleChange}
				value={value}
				required={required}
			/>
			{error && <ErrorMessage>{error}</ErrorMessage>}
		</Container>
	);
}
