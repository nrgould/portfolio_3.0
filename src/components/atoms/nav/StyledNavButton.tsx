import styled from "styled-components";
import { Link } from "gatsby";
import { COLORS, SHADOW } from "../../../theme";

export const StyledNavButton = styled(Link)`
  color: ${COLORS.primaryText};
  text-decoration: none;
  font-weight: 600;
  text-align: center;
  background: ${COLORS.primary};
  padding: 0.75rem 1.75rem;
  border-radius: 6px;
  box-shadow: ${SHADOW.normal};
  cursor: pointer;

  &:hover {
    background: ${COLORS.primary};
    transform: scale(1.01);
  }

  transition: all 200ms ease;
`;
