import React from "react";
import styled, { css } from "styled-components";
import { COLORS } from "../../theme";
import FlexRow from "../atoms/FlexRow";

const activeStyles = css`
  background-color: ${COLORS.secondary};
`;

const DotContainer = styled.div`
  width: 2rem;
  height: 2rem;
  cursor: pointer;

  /* &:not(:last-child) {
    margin-right: 12px;
  } */
`;

const Dot = styled.div<{ active: number }>`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  border: 2px solid ${COLORS.secondary};

  ${(p) => p.active && activeStyles}
`;

export default function DotGroup({ num, setNum }) {
  return (
    <FlexRow alignItems="center" justifyContent="center">
      <DotContainer onClick={() => setNum(0)}>
        <Dot active={num === 0} />
      </DotContainer>
      <DotContainer onClick={() => setNum(1)}>
        <Dot active={num === 1} />
      </DotContainer>
      <DotContainer onClick={() => setNum(2)}>
        <Dot active={num === 2} />
      </DotContainer>
    </FlexRow>
  );
}
