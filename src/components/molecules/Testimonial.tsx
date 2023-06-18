import React from "react";
import { SubTitle } from "../atoms/SubTitle";
import FlexRow from "../atoms/FlexRow";
import { Body } from "../atoms/Body";
import Avatar from "../atoms/Avatar";
import { breakpoint, COLORS } from "../../theme";
import { useWindowDimensions } from "../../hooks/useWindowDimensions";
import { Quote } from "./TestimonialInverse";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import styled from "styled-components";

export const TestimonialCol = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  transform: rotate(-5deg);
  position: relative;

  @media (max-width: ${breakpoint + "px"}) {
    transform: rotate(0);
  }
`;

export default function Testimonial({ img, name, title, company, text }) {
  const { width } = useWindowDimensions();
  const animationControl = useAnimation();
  const { inView } = useInView({ triggerOnce: true, threshold: 0.3 });

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

  const isSmallDevice = width < breakpoint;
  return (
    <FlexRow
      style={{ width: isSmallDevice ? "80%" : "70%", margin: "auto" }}
      alignItems="center"
      justifyContent={isSmallDevice ? "center" : "space-evenly"}
      wrap="wrap"
    >
      <TestimonialCol
        style={{
          marginBottom: "4rem",
        }}
      >
        <Avatar background={COLORS.brown} img={img} alt="testimonial" />
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
    </FlexRow>
  );
}
