import { Field } from "formik";
import React from "react";
import styled from "styled-components";
import { useWindowDimensions } from "../../hooks/useWindowDimensions";
import { breakpoint, COLORS, SHADOW } from "../../theme";

const StyledField = styled(Field)`
  /* border-radius: 8px; */
  border: none;
  border-bottom: 1px solid ${COLORS.border};
  min-width: 15vw;
  padding: 0.75rem 0;
  /* box-shadow: ${SHADOW.normal}; */
  box-sizing: border-box;
  font-family: "sora";
  font-weight: 500;
  background-color: ${COLORS.white};
  color: ${COLORS.primaryText};
  -webkit-appearance: none;
  &::placeholder {
    font-family: "sora";
    font-weight: 500;
  }
`;

const StyledLabel = styled.label`
  font-weight: 600;
  font-size: 1rem;
  margin-bottom: 0.3rem;
  color: ${COLORS.primaryText};
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
  color: ${COLORS.error};
  font-size: 0.8rem;
  position: absolute;
  bottom: -32px;
  left: 5px;
`;

interface Props {
  label: string;
  name: string;
  placeholder?: string;
  error: string | null;
  handleChange: any;
  value: string;
  margin?: boolean;
}

export default function TextInput({
  label,
  name,
  placeholder,
  error,
  handleChange,
  value,
  margin,
}: Props) {
  const { width } = useWindowDimensions();
  return (
    <Container
      style={{
        width: width < breakpoint ? width / 1.3 : `calc(100% - 16px)`,
        margin: margin ? "1rem" : "1rem 0",
      }}
    >
      <StyledLabel>{label}</StyledLabel>
      <StyledField
        style={{
          width: width < breakpoint ? width / 1.3 : "100%",
        }}
        name={name}
        type="text"
        placeholder={placeholder}
        onChange={handleChange}
        value={value}
      />
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </Container>
  );
}
