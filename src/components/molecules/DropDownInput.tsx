import { Field } from "formik";
import React from "react";
import styled from "styled-components";
import { useWindowDimensions } from "../../hooks/useWindowDimensions";
import { breakpoint, COLORS, SHADOW } from "../../theme";
import { FaChevronDown } from "react-icons/fa";

const StyledField = styled(Field)`
  /* border-radius: 8px; */
  border: none;
  border-bottom: 1px solid ${COLORS.border};
  padding: 0.75rem 0;
  /* box-shadow: ${SHADOW.normal}; */
  font-family: "sora";
  font-weight: 500;
  background-color: ${COLORS.white};
  color: ${COLORS.primaryText};
  position: relative;
  z-index: 5;
  min-width: 15vw;
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
  margin-bottom: 2rem;
  justify-content: space-between;
  position: relative;
`;

const FieldContainer = styled.div`
  position: relative;
`;

const Icon = styled(FaChevronDown)`
  margin: auto;
  position: absolute;
  right: 16px;
  z-index: 10;
  top: 0;
  bottom: 0;
`;

interface Props {
  label: string;
  name: string;
  placeholder?: string;
  children?: JSX.Element | JSX.Element[];
  handleChange: any;
  margin?: boolean;
}

export default function DropDownInput({
  label,
  name,
  placeholder,
  children,
  handleChange,
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
      <FieldContainer
        style={{
          width: width < breakpoint ? width / 1.3 : "100%",
        }}
      >
        <StyledField
          style={{
            width: width < breakpoint ? width / 1.3 : "100%",
          }}
          name={name}
          as="select"
          placeholder={placeholder}
          onChange={handleChange}
        >
          {children}
        </StyledField>
        <Icon size={18} color={COLORS.primaryText} />
      </FieldContainer>
    </Container>
  );
}
