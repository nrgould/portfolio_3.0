import styled from "styled-components";
import { COLORS } from "../../theme";
import hexRgb from "hex-rgb";
import React from "react";

interface TextProps {
  redTint?: number;
  greenTint?: number;
  blueTint?: number;
}

const TextSpanText = styled.span<TextProps>`
  background-color: rgba(
    ${(p) => p.redTint},
    ${(p) => p.greenTint},
    ${(p) => p.blueTint},
    0.3
  );
  border-radius: 4px;
  padding: 0 4px;
  margin: 0 4px;
  box-sizing: border-box;
  /* hyphens: auto; */
`;

interface Props {
  color?: "purple" | "error" | "warning" | "success" | "blue";
  children?: React.ReactChild | React.ReactChild[];
}

export default function TextSpan({ children, color }: Props) {
  let RGBcolor = hexRgb(COLORS.primary);

  switch (color) {
    case "purple":
      RGBcolor = hexRgb(COLORS.purple);
      break;
    case "success":
      RGBcolor = hexRgb(COLORS.success);
      break;
    case "error":
      RGBcolor = hexRgb(COLORS.error);
      break;
    case "warning":
      RGBcolor = hexRgb(COLORS.warning);
      break;
    case "blue":
      RGBcolor = hexRgb(COLORS.blue);
      break;
  }

  return (
    <TextSpanText
      redTint={RGBcolor.red}
      greenTint={RGBcolor.green}
      blueTint={RGBcolor.blue}
    >
      {children}
    </TextSpanText>
  );
}
