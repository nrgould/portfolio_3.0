import React from "react";
import { SubTitle } from "../atoms/SubTitle";
import FlexRow from "../atoms/FlexRow";
import { Body } from "../atoms/Body";
import Avatar from "../atoms/Avatar";
import { breakpoint, COLORS } from "../../theme";
import { useWindowDimensions } from "../../hooks/useWindowDimensions";
import styled from "styled-components";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { TestimonialCol } from "./Testimonial";

export const Quote = styled.span`
  font-size: 4rem;
  font-weight: bold;
  margin: 0;
`;

export default function TestimonialInverse({
  img,
  name,
  title,
  company,
  text,
}) {
  const { width } = useWindowDimensions();
  const isSmallDevice = width < breakpoint;
  const animationControl = useAnimation();
  const { inView, ref } = useInView({ triggerOnce: true, threshold: 0.3 });

  if (inView) {
    animationControl.start({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeIn",
      },
    });
  }

  return (
    <FlexRow
      style={{ width: isSmallDevice ? "80%" : "70%", margin: "auto" }}
      alignItems="center"
      justifyContent="space-evenly"
      wrap="wrap-reverse"
    >
      <TestimonialCol>
        <Body
          style={{
            textAlign: "left",
            fontSize: "1.8rem",
            fontWeight: "bold",
            lineHeight: "3rem",
          }}
        >
          <Quote
            style={{
              position: "absolute",
              top: -40,
              left: isSmallDevice ? 0 : -40,
            }}
          >
            "
          </Quote>
          {text}
          <Quote style={{ position: "absolute", bottom: -60, right: 20 }}>
            "
          </Quote>
        </Body>
      </TestimonialCol>
      <TestimonialCol
        style={{
          marginBottom: "4rem",
        }}
      >
        <Avatar alt="Testimonial" background={COLORS.brown} img={img} />
        <SubTitle
          style={{
            textAlign: "center",
            lineHeight: "2rem",
            margin: 0,
            marginTop: "1rem",
          }}
        >
          {name}
        </SubTitle>
        <SubTitle
          style={{ textAlign: "center", lineHeight: "2rem", margin: 0 }}
        >
          {`${title}, ${company}`}
        </SubTitle>
      </TestimonialCol>
    </FlexRow>
  );
}
