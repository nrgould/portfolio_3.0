import React from "react";
import styled from "styled-components";

interface Props {
  justifyContent: string;
  alignItems: string;
  wrap?: string;
  style?: object;
  children: JSX.Element | JSX.Element[];
}

export const StyledRow = styled.div<Props>`
  display: flex;
  flex-direction: row;
  justify-content: ${(p) => p.justifyContent};
  align-items: ${(p) => p.alignItems};
  flex-wrap: ${(p) => p.wrap || "no-wrap"};
`;

export default function FlexRow({
  children,
  alignItems,
  justifyContent,
  wrap,
  style,
}: Props) {
  return (
    <StyledRow
      alignItems={alignItems}
      justifyContent={justifyContent}
      wrap={wrap}
      style={style}
    >
      {children}
    </StyledRow>
  );
}
