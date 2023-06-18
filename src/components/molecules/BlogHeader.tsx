import React from "react";
import { SubTitle } from "../atoms/SubTitle";
import FlexColumn from "../atoms/FlexColumn";
import { COLORS } from "../../theme";
import styled from "styled-components";

const CustomTitle = styled.h1`
  font-size: 4rem;
  color: ${COLORS.foreground};
`;

const Line = styled.div`
  width: 100%;
  height: 3px;
  background-color: ${COLORS.foreground};
`;

interface Props {
  title: string;
  author: string;
  date: string;
}

export default function BlogHeader({ title, author, date }: Props) {
  return (
    <>
      <CustomTitle>{title}</CustomTitle>
      <FlexColumn
        style={{ width: "100%" }}
        alignItems="flex-start"
        justifyContent="space-evenly"
      >
        <Line />
        <SubTitle style={{ fontSize: 16, marginBottom: 4 }}>{date}</SubTitle>
        <SubTitle style={{ fontSize: 16, marginTop: 4 }}>{author}</SubTitle>
        <Line />
      </FlexColumn>
    </>
  );
}
