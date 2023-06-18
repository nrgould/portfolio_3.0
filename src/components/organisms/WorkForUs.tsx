import { Body } from "../atoms/Body";
import React from "react";
import { Title } from "../atoms/Title";
import styled from "styled-components";
import { SubTitle } from "../atoms/SubTitle";
import ResumeSVG from "../../images/ResumeSVG";
import FlexColumn from "../atoms/FlexColumn";
import { useWindowDimensions } from "../../hooks/useWindowDimensions";
import { breakpoint, COLORS } from "../../theme";

const Container = styled.div<{ width: number | string }>`
  margin: 8rem auto;
  display: flex;
  flex-direction: row;
  justify-content: ${(props) =>
    props.width < breakpoint ? "center" : "space-between"};
  width: ${(props) => (props.width < breakpoint ? "90%" : "70%")};
  align-items: center;
  flex-wrap: wrap-reverse;

  @media (max-width: ${breakpoint + "px"}) {
    margin: auto;
    margin-top: 4rem;
  }
`;

const Span = styled.a`
  color: ${COLORS.secondary};
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

export default function WorkForUs() {
  const { width } = useWindowDimensions();
  return (
    <Container
      width={width}
      style={{ width: width < breakpoint ? "90%" : "80%" }}
      id="jobs"
    >
      <FlexColumn
        justifyContent="center"
        alignItems={"flex-start"}
        style={{ maxWidth: "30rem" }}
      >
        <Title>Want to work for us?</Title>
        <Body>
          Interested in joining the Bolstered Media team? Email us saying why
          you would be a great addition to the company and include a copy of
          your most up-to-date resume!
        </Body>
        <SubTitle>
          Email{" "}
          <Span href="mailto:grow@bolsteredmedia.com">
            grow@bolsteredmedia.com
          </Span>
        </SubTitle>
      </FlexColumn>
      <ResumeSVG />
    </Container>
  );
}
