import React from "react";
import styled, { css } from "styled-components";
import { SHADOW, COLORS, breakpoint } from "../../theme";

interface styleProps {
  flexDir?: any;
  alignItems?: any;
  justifyContent?: any;
  width?: any;
  height?: any;
  secondary?: boolean;
  hoverStyles?: boolean;
}

const hoverStyles = css<styleProps>`
  transition: all 500ms ease;
  &:hover {
    background-color: ${COLORS.primary3};
  }
`;

const flexStyles = css<styleProps>`
  display: flex;
  flex-direction: ${(p) => p.flexDir};
  align-items: ${(p) => p.alignItems};
  justify-content: ${(p) => p.justifyContent};
`;

const Container = styled.div<styleProps>`
  /* overflow: hidden; */
  border-radius: 16px;
  width: ${(p) => p.width || "20rem"};
  min-width: 20rem;
  height: ${(p) => p.height || "30rem"};
  background-color: ${(p) => (p.secondary ? COLORS.gray : "#fff")};
  box-shadow: ${SHADOW.normal};
  ${(p) => p.flexDir && flexStyles}
  padding: 3rem 2rem;
  margin: 2rem 1rem;
  transition: all 200ms ease;
  ${(p) => p.hoverStyles && hoverStyles}

  @media (max-width: ${breakpoint + "px"}) {
    padding: 2rem 1.2rem;
  }
`;

interface Props {
  children?: any;
  flexDir?: any;
  alignItems?: any;
  justifyContent?: any;
  width?: any;
  height?: any;
  secondary?: boolean;
  style?: object;
  hoverStyles?: boolean;
}

export default function Card({
  width,
  height,
  children,
  flexDir,
  alignItems,
  justifyContent,
  secondary,
  style,
  hoverStyles,
}: Props) {
  return (
    <Container
      flexDir={flexDir}
      width={width}
      height={height}
      alignItems={alignItems}
      justifyContent={justifyContent}
      secondary={secondary}
      style={style}
      hoverStyles={hoverStyles}
    >
      {children}
    </Container>
  );
}
