import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";
import styled from "styled-components";
import { VALUES } from "../../constants";
import { breakpoint, COLORS } from "../../theme";
import { Title } from "../atoms/Title";

const Container = styled.div`
  margin: 10rem 0;
  background-color: ${COLORS.gray};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem 0;

  @media (max-width: ${breakpoint + "px"}) {
    width: 100%;
    margin: 8rem auto;
  }
`;

const ValuesWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  flex-wrap: wrap;
`;

interface ValueProps {
  color?: string;
}

const ValueContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  background-color: ${COLORS.white};
  height: 20rem;

  margin: 1rem 2rem;
  padding: 2.5rem 2rem 1rem 1rem;
  border-radius: 4px;
  overflow: hidden;
  position: relative;
`;

const NumberContainer = styled.div`
  max-width: 4rem;
  max-height: 4rem;
  width: 4rem;
  height: 4rem;
  margin-right: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const NumberText = styled.h4<ValueProps>`
  font-size: 3rem;
  color: ${(p) => p.color};
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

const ValueTitle = styled.h2`
  font-size: 1.8rem;
  margin: 0;
  margin-bottom: 0.8rem;
  color: ${COLORS.primaryText};
`;

const ValueText = styled.h4`
  font-size: 1rem;
  max-width: 20rem;
  font-weight: 500;
  line-height: 1.8rem;
  margin: 0;
  color: ${COLORS.primaryText};
`;

const StyledBar = styled.div<ValueProps>`
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 6px;
  background-color: ${(p) => p.color};
`;

export default function Values() {
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
    <Container
      as={motion.div}
      variants={container}
      initial="hidden"
      animate="show"
      ref={ref}
    >
      <Title>Core values that drive us</Title>
      <ValuesWrapper>
        {VALUES.map((value, i) => (
          <ValueContainer
            as={motion.div}
            key={i}
            custom={i}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            variants={logo}
            whileHover={{ scale: 1.01 }}
          >
            <NumberContainer>
              <NumberText color={value.color}>{i + 1 + "."}</NumberText>
            </NumberContainer>
            <TextContainer>
              <ValueTitle>{value.title}</ValueTitle>
              <ValueText>{value.description}</ValueText>
            </TextContainer>
            <StyledBar color={value.color} />
          </ValueContainer>
        ))}
      </ValuesWrapper>
    </Container>
  );
}
