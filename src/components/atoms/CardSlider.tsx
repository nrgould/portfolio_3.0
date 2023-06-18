import React from "react";
import styled, { css } from "styled-components";
import { SHADOW, COLORS } from "../../theme";

interface styleProps {
  flexDir?: any;
  alignItems?: any;
  justifyContent?: any;
  width?: any;
  height?: any;
  secondary?: boolean;
}

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
  height: ${(p) => p.height || "30rem"};
  background-color: ${(p) => (p.secondary ? COLORS.gray : "#fff")};
  box-shadow: ${SHADOW.normal};
  ${(p) => p.flexDir && flexStyles}
  padding: 2rem 1rem;
  margin: 3rem 0;
  transition: all 200ms ease;

  &:not(:first-child) {
    margin-left: -2rem;
  }

  &:not(:last-child):hover,
  &:not(:last-child):focus-within {
    transform: translateY(-1rem);
    & ~ div {
      transform: translateX(6rem);
    }
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
}

export default function CardSlider({
  width,
  height,
  children,
  flexDir,
  alignItems,
  justifyContent,
  secondary,
  style,
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
    >
      {children}
    </Container>
  );
}
