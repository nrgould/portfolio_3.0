import React from "react";
import styled, { css } from "styled-components";
import { COLORS, SHADOW } from "../../theme";

interface styleProps {
  hasIcon?: boolean;
  primary?: boolean;
  secondary?: boolean;
}

const primaryStyles = css`
  color: ${COLORS.primaryText};
  background: ${COLORS.primary};

  &:hover {
    background: ${COLORS.primarySoft};
    transform: scale(1.01);
  }
`;

const disabledStyles = css`
  color: ${COLORS.secondaryText};
  border: 1px solid ${COLORS.border};
  background: ${COLORS.lightGray};
  cursor: not-allowed;

  &:hover {
    color: ${COLORS.secondaryText};
    background: ${COLORS.gray};
  }
`;

const secondaryStyles = css`
  color: ${COLORS.white};
  background: ${COLORS.secondary};

  &:hover {
    background: ${COLORS.secondarySoft};
    transform: scale(1.01);
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
  font-family: "sora";
  ${(p) => p.hasIcon && iconStyles};
`;

export const StyledButton = styled.button<styleProps>`
  border: none;
  text-align: center;
  cursor: pointer;
  padding: 1rem 2.5rem;
  border-radius: 8px;
  box-shadow: ${SHADOW.normal};
  transition: all 200ms ease;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around ${(p) => p.primary && primaryStyles};
  ${(p) => p.secondary && secondaryStyles};
  ${(p) => p.disabled && disabledStyles};
`;

interface Props extends React.HTMLProps<HTMLButtonElement> {
  text: string;
  icon?: JSX.Element;
  primary?: boolean;
  secondary?: boolean;
  style?: object;
  type?: "button" | "submit" | "reset";
}

export default function Button({
  text,
  icon,
  primary,
  secondary,
  style,
  type,
  onClick,
  disabled,
}: Props) {
  const hasIcon = !!icon;
  return (
    <StyledButton
      style={style}
      hasIcon={hasIcon}
      primary={primary}
      secondary={secondary}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      <ButtonText style={style} hasIcon={hasIcon}>
        {text}
      </ButtonText>
      {icon}
    </StyledButton>
  );
}
