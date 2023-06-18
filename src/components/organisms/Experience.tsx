import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { Title } from "../atoms/Title";
import ArrowRight from "../Icons/ArrowRight";
import { breakpoint, COLORS } from "../../theme";
import AvatarGroup from "../molecules/AvatarGroup";
import ButtonLink from "../atoms/ButtonLink";
import { motion, useInView, useScroll } from "framer-motion";
import TextSpan from "../atoms/TextSpan";

const HEIGHT = 600;

const Container = styled.div`
  margin: 10rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  height: ${HEIGHT + "px"};
  overflow-x: hidden;

  @media (max-width: ${breakpoint + "px"}) {
    width: 90%;
    margin: 4rem auto;
  }
`;

const Box1 = styled(motion.div)`
  position: absolute;
  width: 20rem;
  height: 5rem;
  background-color: ${COLORS.gray};
  top: 0;
  left: 0;
  z-index: -1;

  @media (max-width: ${breakpoint + "px"}) {
    display: none;
  }
`;
const Box2 = styled(motion.div)`
  position: absolute;
  width: 20rem;
  height: 5rem;
  background-color: ${COLORS.gray};
  bottom: 0;
  right: 0;
  z-index: -1;

  @media (max-width: ${breakpoint + "px"}) {
    display: none;
  }
`;

export default function Experience() {
  const ref = useRef(null);

  const inView = useInView(ref, { once: true });

  const variants = {
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
      },
    },
    hidden: {
      opacity: 0,
    },
  };

  return (
    <Container ref={ref}>
      <AvatarGroup />
      <Title
        as={motion.h2}
        style={{ textAlign: "center" }}
        initial={{ opacity: 0, scale: 0.75 }}
        animate={
          inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.75 }
        }
        transition={{ duration: 0.5, delay: 0.2 }}
        size="3rem"
      >
        Over <TextSpan>20 years</TextSpan>
        <br />
        of digital marketing <br />
        experience
      </Title>
      <ButtonLink
        primary
        text="Meet The Team"
        link="/team"
        icon={<ArrowRight />}
      />
      <Box1
        initial={{ x: -200 }}
        animate={inView ? "visible" : "hidden"}
        variants={variants}
      />
      <Box2
        initial={{ x: 200 }}
        animate={inView ? "visible" : "hidden"}
        variants={variants}
      />
    </Container>
  );
}
