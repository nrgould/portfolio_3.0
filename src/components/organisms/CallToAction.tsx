import ButtonLink from "../atoms/ButtonLink";
import { Main } from "../atoms/Main";
import { Title } from "../atoms/Title";
import React from "react";
import FlexColumn from "../atoms/FlexColumn";
import { useWindowDimensions } from "../../hooks/useWindowDimensions";
import { breakpoint, COLORS } from "../../theme";

interface Props {
  text?: string;
  background?: boolean;
}

export default function CallToAction({
  text = "Ready to bolster your brand?",
  background,
}: Props) {
  const { width } = useWindowDimensions();
  return (
    <Main
      style={{
        padding: 0,
        margin: 0,
        backgroundColor: background ? COLORS.primary2 : "none",
      }}
    >
      <FlexColumn
        alignItems="center"
        justifyContent="center"
        style={{ padding: "4rem" }}
      >
        <Title style={{ fontSize: "3.5rem", lineHeight: "4.5rem", margin: 0 }}>
          {text}
        </Title>
        <ButtonLink
          style={{ width: width < breakpoint ? "90%" : "15rem" }}
          secondary
          text="GET STARTED"
          link="/contact"
        />
      </FlexColumn>
    </Main>
  );
}
