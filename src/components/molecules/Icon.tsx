import React from "react";
import styled from "styled-components";
import {
  FaComment,
  FaPercentage,
  FaGlobe,
  FaEnvelope,
  FaVideo,
  FaBullhorn,
} from "react-icons/fa";
import { ImTextColor } from "react-icons/im";
import { COLORS } from "../../theme";
import { SERVICES } from "../../constants";

const IconContainer = styled.div<{ bgColor: string; size: number }>`
  width: ${(p) => p.size + "px"};
  height: ${(p) => p.size + "px"};
  background-color: ${(p) => p.bgColor};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
`;

interface Props {
  color?: string;
  name: string | "paid" | "sms" | "email" | "cro" | "web" | "content";
  size: number;
  bgColor?: string;
  style?: object;
}

export default function Icon({ color, name, size, bgColor, style }: Props) {
  let icon: any;

  switch (name) {
    case "paid":
      icon = <FaBullhorn color={color || SERVICES[0].icon.color} size={size} />;
      break;
    case "sms":
      icon = <FaComment color={color || SERVICES[1].icon.color} size={size} />;
      break;
    case "email":
      icon = <FaEnvelope color={color || SERVICES[2].icon.color} size={size} />;
      break;
    case "cro":
      icon = (
        <FaPercentage color={color || SERVICES[3].icon.color} size={size} />
      );
      break;
    case "web":
      icon = <FaGlobe color={color || SERVICES[4].icon.color} size={size} />;
      break;
    case "content":
      icon = <FaVideo color={color || SERVICES[5].icon.color} size={size} />;
      break;
    case "text":
      icon = <ImTextColor color={COLORS.primary3} size={size} />;
    default:
      break;
  }

  return (
    <IconContainer style={style} size={size * 2.4} bgColor={bgColor}>
      {icon}
    </IconContainer>
  );
}
