import styled, { css } from "styled-components";
import { COLORS, SHADOW } from "../../theme";

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

export const AnimatedCard = styled.div<styleProps>`
  /* overflow: hidden; */
  border-radius: 4px;
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
`;
