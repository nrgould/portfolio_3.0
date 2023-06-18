import React, { useRef } from "react";
import styled from "styled-components";
import Meta from "../../images/logos/meta.png";
import Klaviyo from "../../images/logos/klaviyo.png";
import Attentive from "../../images/logos/attentive.png";
import { Title } from "../atoms/Title";
import { breakpoint } from "../../theme";
import { motion, useInView } from "framer-motion";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 80%;
  margin: auto;
  margin-top: 2rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;

  @media (max-width: ${breakpoint + "px"}) {
    width: 100%;
    align-items: center;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;

  @media (max-width: ${breakpoint + "px"}) {
    justify-content: center;
  }
`;

const LogoContainer = styled.div`
  width: 12rem;
  flex: 1 1 12rem;
  margin-right: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: ${breakpoint + "px"}) {
    justify-content: center;
    margin: 0 2rem;
  }
`;

const Logo = styled.img`
  max-width: 12rem;
`;

const LOGOS = [
  { alt: "Klaviyo Logo", image: Klaviyo },
  { alt: "Meta Logo", image: Meta },
  { alt: "Attentive Logo", image: Attentive },
];

export default function PreferredPartners() {
  const ref = useRef(null);

  const inView = useInView(ref, { once: true });

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.3,
        when: "beforeChildren",
      },
    },
  };

  const logo = {
    hidden: { y: 50, opacity: 0 },
    show: (index: number) => ({
      y: 0,
      opacity: 1,
      transition: { delay: index * 0.12, stiffness: 50, damping: 20 },
    }),
  };

  return (
    <Wrapper>
      <Title style={{ marginBottom: 10 }}>Preferred partners of</Title>
      <Container
        as={motion.div}
        variants={container}
        initial="hidden"
        animate="show"
        ref={ref}
      >
        {LOGOS.map(({ image }, i) => (
          <LogoContainer
            as={motion.div}
            key={i}
            custom={i}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            variants={logo}
            whileHover={{ scale: 1.02 }}
          >
            <Logo src={image} />
          </LogoContainer>
        ))}
      </Container>
    </Wrapper>
  );
}
