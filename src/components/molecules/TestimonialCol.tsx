import React from "react";
import { SubTitle } from "../atoms/SubTitle";
import FlexColumn from "../atoms/FlexColumn";
import { Body } from "../atoms/Body";
import Avatar from "../atoms/Avatar";
import { COLORS } from "../../theme";

export default function TestimonialCol({ img, name, title, company, text }) {
  return (
    <FlexColumn
      style={{ minHeight: "30rem" }}
      alignItems="center"
      justifyContent="space-evenly"
    >
      <FlexColumn
        wrap="wrap"
        alignItems="center"
        justifyContent="center"
        style={{ marginBottom: "2rem" }}
      >
        <Avatar alt="Testimonial" background={COLORS.primary} img={img} />
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
      </FlexColumn>
      <FlexColumn wrap="wrap" alignItems="flex-start" justifyContent="center">
        <Body>{text}</Body>
      </FlexColumn>
    </FlexColumn>
  );
}
