import { Link } from "gatsby";
import React from "react";
import styled, { css } from "styled-components";
import { COLORS } from "../../theme";

interface styleProps {
  hasIcon?: boolean;
  primary?: boolean;
  secondary?: boolean;
}

const primaryStyles = css`
  color: ${COLORS.primary};
  &:hover {
    color: ${COLORS.primarySoft};
  }
`;

const secondaryStyles = css`
  color: ${COLORS.secondary};
  &:hover {
    color: ${COLORS.secondarySoft};
  }
`;

const iconStyles = css`
  margin-right: 5px;
  transition: all 200ms ease;
`;

const ButtonText = styled.p<styleProps>`
  text-decoration: none;
  font-weight: 600;
  font-size: 1rem;
  padding: 0;
  margin: 0;
  ${(p) => p.hasIcon && iconStyles};
`;

export const StyledButton = styled.div<styleProps>`
  border: none;
  background: none;
  cursor: pointer;
  margin: 1rem 0;
  padding: 0;
  transition: all 200ms ease;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  ${(p) => p.primary && primaryStyles};
  ${(p) => p.secondary && secondaryStyles};
`;

interface Props {
  text: string;
  icon?: any;
  primary?: boolean;
  secondary?: boolean;
  link: string;
  style?: object;
}

const StyledLink = styled(Link)`
  text-decoration: none;
  width: 100%;
`;

export default function InverseButton({
  text,
  icon,
  primary,
  secondary,
  link,
  style,
}: Props) {
  const hasIcon = !!icon;
  return (
    <StyledLink to={link}>
      <StyledButton
        style={style}
        hasIcon={hasIcon}
        primary={primary}
        secondary={secondary}
      >
        <ButtonText hasIcon={hasIcon}>{text}</ButtonText>
        {icon}
      </StyledButton>
    </StyledLink>
  );
}
