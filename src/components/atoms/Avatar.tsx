import React from "react";
import AlexImage from "../../images/optimized/alex_pfp.jpg";
import PatrickImage from "../../images/optimized/patrick.jpg";
import JordanImage from "../../images/optimized/jordan.jpg";
import NicholasImage from "../../images/optimized/nicholas_pfp.png";
import ProfileImage from "../../images/optimized/profile.jpeg";
import MelissaImage from "../../images/optimized/melissa_pfp.jpg";
import AliImage from "../../images/optimized/ali.png";
import styled from "styled-components";
import { FaBreadSlice } from "react-icons/fa";

interface StyleProps {
  size?: string | number;
  background?: string;
}

const Container = styled.div<StyleProps>`
  width: ${(props) => props.size || "10rem"};
  height: ${(props) => props.size || "10rem"};
  position: relative;
`;

const Image = styled.img<StyleProps>`
  width: ${(props) => props.size || "10rem"};
  height: ${(props) => props.size || "10rem"};
  border-radius: 50%;
  object-fit: cover;
  display: block;
  user-select: none;
`;

const Background = styled.div<StyleProps>`
  width: ${(props) => props.size || "10rem"};
  height: ${(props) => props.size || "10rem"};
  background-color: ${(props) => props.background};
  border-radius: 50%;
  z-index: -1;
  position: absolute;
  top: 5px;
  left: 5px;
`;

interface Props {
  img?: string;
  background?: string;
  size?: number;
  style?: object;
  alt: string;
  name?: string;
}

export default function Avatar({
  size = 200,
  background,
  style,
  alt,
  name,
}: Props) {
  let source;

  switch (name) {
    case "Alex Hadding":
      source = AlexImage;
      break;
    case "Patrick Gall":
      source = PatrickImage;
      break;
    case "Jordan Hadding":
      source = JordanImage;
      break;
    case "Nicholas Gould":
      source = NicholasImage;
      break;
    case "Melissa Martin":
      source = MelissaImage;
      break;
    case "Ali Mannino":
      source = AliImage;
      break;
    default:
      source = ProfileImage;
      break;
  }

  return (
    <Container style={style}>
      <Image width={size} height={size} src={source} alt={alt} />
      {background && <Background background={background} />}
    </Container>
  );
}
