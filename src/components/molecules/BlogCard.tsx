import React from "react";
import { Body } from "../atoms/Body";
import FlexColumn from "../atoms/FlexColumn";
import { SubTitle } from "../atoms/SubTitle";
import { useWindowDimensions } from "../../hooks/useWindowDimensions";
import { breakpoint } from "../../theme";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { AnimatedCard } from "../atoms/AnimatedCard";
import Icon from "./Icon";
import InverseButton from "../atoms/InverseButton";
import ArrowRight from "../Icons/ArrowRight";
import { Link } from "gatsby";
import FlexRow from "../atoms/FlexRow";

interface Props {
  body: string;
  tags?: string | string[];
  title: string;
  path: string;
  date: string;
  author: string;
  category: "paid" | "sms" | "email" | "cro" | "web" | "content";
  style?: object;
}

export default function BlogCard({
  body,
  title,
  path,
  author,
  date,
  category,
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

  let categoryLower;

  if (category) {
    categoryLower = category.toLowerCase();
  } else {
    categoryLower = "text";
  }
  console.log(categoryLower);

  return (
    <Link to={`.${path}`} style={{ textDecoration: "none" }}>
      <AnimatedCard
        justifyContent="space-between"
        alignItems="center"
        ref={ref}
        as={motion.div}
        initial={{ y: 50, opacity: 0 }}
        animate={animationControl}
        secondary
        whileHover={{ scale: 1.02 }}
        width={width < breakpoint ? "90vw" : "25rem"}
        height={width < breakpoint ? "fit-content" : "30rem"}
        style={{
          boxShadow: "none",
          ...style,
          margin: "1rem",
        }}
      >
        <FlexColumn
          wrap="wrap"
          alignItems="center"
          justifyContent="center"
          style={{ marginBottom: "2rem" }}
        >
          <Icon name={categoryLower} size={50} />

          <SubTitle
            style={{
              fontSize: 24,
              textAlign: "center",
              lineHeight: "2rem",
              margin: 0,
            }}
          >
            {title}
          </SubTitle>
          <FlexRow alignItems="center" justifyContent="space-between">
            <SubTitle
              style={{
                fontSize: 14,
                textAlign: "center",
                lineHeight: "2rem",
                margin: 0,
                marginRight: 4,
                fontWeight: "normal",
              }}
            >
              {author} –
            </SubTitle>
            <SubTitle
              style={{
                fontSize: 14,
                textAlign: "center",
                lineHeight: "2rem",
                margin: 0,
                fontWeight: "normal",
              }}
            >
              {date}
            </SubTitle>
          </FlexRow>
        </FlexColumn>
        <FlexColumn wrap="wrap" alignItems="center" justifyContent="center">
          <Body
            style={{
              overflow: "hidden",
              textOverflow: "ellipsis",
              wordWrap: "break-word",
              lineHeight: "2rem",
              marginBottom: "2rem",
              maxHeight: "6rem",
              height: "6rem",
            }}
          >
            {body}
          </Body>
          <InverseButton
            link={`.${path}`}
            secondary
            text="Read More"
            icon={<ArrowRight />}
          />
        </FlexColumn>
      </AnimatedCard>
    </Link>
  );
}
