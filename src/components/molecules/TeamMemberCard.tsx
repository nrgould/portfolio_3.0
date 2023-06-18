import React from "react";
import Avatar from "../atoms/Avatar";
import { Body } from "../atoms/Body";
import FlexColumn from "../atoms/FlexColumn";
import { SubTitle } from "../atoms/SubTitle";
import { useWindowDimensions } from "../../hooks/useWindowDimensions";
import { breakpoint, COLORS } from "../../theme";
import styled from "styled-components";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { AnimatedCard } from "../atoms/AnimatedCard";

const Email = styled.a`
  font-weight: 600;
  font-size: 1rem;
  text-decoration: none;
  color: ${COLORS.secondary};
  text-align: center;
`;

interface Props {
  description: string;
  name: string;
  title: string;
  email: string;
  style?: object;
}

export default function TeamMemberCard({
  description,
  name,
  title,
  email,
  style,
}: Props) {
  const { width } = useWindowDimensions();
  const animationControl = useAnimation();
  const { inView, ref } = useInView();

  if (inView) {
    animationControl.start({
      y: 0,
      x: 0,
      opacity: 1,
    });
  }

  return (
    <AnimatedCard
      ref={ref}
      as={motion.div}
      initial={{ y: 50, opacity: 0 }}
      animate={animationControl}
      secondary
      whileHover={{ scale: 1.02 }}
      width={width < breakpoint ? "90vw" : "30rem"}
      height={width < breakpoint ? "fit-content" : "45rem"}
      style={{
        boxShadow: "none",
        // margin: width < breakpoint ? "1rem 0" : "2rem",
        ...style,
      }}
    >
      <FlexColumn
        wrap="wrap"
        alignItems="center"
        justifyContent="center"
        style={{ marginBottom: "2rem" }}
      >
        <Avatar name={name} alt={`${name}'s profile picture`} />
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
          style={{
            fontSize: 16,
            textAlign: "center",
            lineHeight: "2rem",
            margin: 0,
          }}
        >
          {title}
        </SubTitle>
      </FlexColumn>
      <FlexColumn wrap="wrap" alignItems="center" justifyContent="center">
        <Body
          style={{
            overflow: "hidden",
            textOverflow: "ellipsis",
            wordWrap: "break-word",
            lineHeight: "2rem",
            marginBottom: "2rem",
          }}
        >
          {description}
        </Body>
        <Email href={`mailto:${email}`}>{email}</Email>
      </FlexColumn>
    </AnimatedCard>
  );
}
