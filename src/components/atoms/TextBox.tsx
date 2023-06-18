import React from "react";
import styled from "styled-components";
import { COLORS } from "../../theme";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin-top: 0.5rem;
  min-height: 8rem;
`;

const Text = styled.h3`
  color: #fff;
  font-size: 2rem;
  font-weight: 600;
  margin: 0;
  user-select: none;
`;

const Box = styled.div`
  background-color: ${COLORS.primaryText};
  min-width: 7rem;
  color: #fff;
  border-radius: 12px;
  padding: 0.5rem 0.75rem;
  text-align: center;
  transition: all 200ms ease;
  &:hover {
    background-color: ${COLORS.primary3};
    color: ${COLORS.primaryText};
  }
`;

const BottomLabel = styled.h4`
  color: ${COLORS.primaryText};
  margin: 0;
  margin-top: 0.5rem;
  max-width: 7rem;
`;

interface Props {
  title: string;
  label?: string;
  style?: object;
}

export default function TextBox({ title, label, style }: Props) {
  return (
    <Container style={style}>
      <Box>
        <Text>{title}</Text>
      </Box>
      {label && <BottomLabel>{label}</BottomLabel>}
    </Container>
  );
}
