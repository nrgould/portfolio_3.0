import React from "react";
import styled from "styled-components";

interface ColumnProps {
  justifyContent: string;
  wrap?: string;
  alignItems: string;
}

interface Props extends ColumnProps {
  children: any;
  style?: object;
}

const StyledColumn = styled.div<ColumnProps>`
  display: flex;
  flex-direction: column;
  justify-content: ${(p) => p.justifyContent};
  align-items: ${(p) => p.alignItems};
  flex-wrap: ${(p) => p.wrap || "no-wrap"};
`;

export default function FlexColumn({
  children,
  alignItems,
  justifyContent,
  wrap,
  style,
}: Props) {
  return (
    <StyledColumn
      style={style}
      alignItems={alignItems}
      justifyContent={justifyContent}
      wrap={wrap}
    >
      {children}
    </StyledColumn>
  );
}
