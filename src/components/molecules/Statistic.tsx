import React, { useRef } from "react";
import styled from "styled-components";
import { COLORS } from "../../theme";
import { motion, useInView } from "framer-motion";

const StatText = styled.h2`
  font-size: 2.5rem;
  color: ${COLORS.primaryText};
  margin-bottom: 0;
  width: 16rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Description = styled.h4`
  font-size: 1rem;
  color: ${COLORS.primaryText};
  font-weight: 500;
  margin: 0;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-basis: 10rem;
  margin: 0.5rem 1rem;
`;

const Character = styled(motion.span)`
  display: inline-block;
  margin-right: -0.05em;
`;

export default function Statistic({ stat, desc }) {
  const ref = useRef(null);

  const inView = useInView(ref, { once: true });

  const chAnimation = {
    hidden: { y: 30, opacity: 0 },
    show: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: { delay: i * 0.07 },
    }),
  };

  return (
    <Container ref={ref}>
      <StatText aria-label={stat} role="heading">
        {stat.split("").map((ch, i) => {
          console.log(ch);
          return (
            <Character
              aria-hidden="true"
              custom={i}
              initial="hidden"
              key={ch + "_" + i}
              animate={inView ? "show" : "hidden"}
              variants={chAnimation}
            >
              {ch}
            </Character>
          );
        })}
      </StatText>
      <Description>{desc}</Description>
    </Container>
  );
}
