import React from "react";
import styled from "styled-components";
import { breakpoint, COLORS } from "../../theme";
import { Body } from "../atoms/Body";
import FlexRow from "../atoms/FlexRow";
import TextBox from "../atoms/TextBox";
import { Title } from "../atoms/Title";
import { useWindowDimensions } from "../../hooks/useWindowDimensions";
import ButtonLink from "../atoms/ButtonLink";
import { SubTitle } from "../atoms/SubTitle";
import { StaticImage } from "gatsby-plugin-image";
import { motion } from "framer-motion";

const Container = styled.section`
  width: 80%;
  margin: auto;
  margin-top: 5rem;
  display: flex;
  position: relative;
  flex-wrap: wrap-reverse;

  @media (max-width: ${breakpoint + "px"}) {
    margin-top: 2rem;
  }
`;

const ImageContainer = styled.div`
  flex: 1 0 20rem;
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: space-around;
  margin-bottom: 2rem;
  flex: 1 1 20rem;
  margin-right: 4rem;

  @media (max-width: ${breakpoint + "px"}) {
    margin-right: 0;
    align-items: center;
  }
`;

export default function CaseStudy() {
  const { width } = useWindowDimensions();
  return (
    <Container>
      <MainContainer>
        <SubTitle style={{ marginBottom: "-1rem", color: COLORS.secondary }}>
          Case Study
        </SubTitle>
        <Title size="3rem" style={{ maxWidth: "40rem", marginBottom: "1rem" }}>
          0-$1M in 6 Months!
        </Title>
        <Body>
          Using a refined organic and paid strategy, Bolstered Media grew a new
          apparel brand to $1,000,000 in sales in less than 6 Months! By
          focusing on Marketing/Media Efficiency Ratio (MER) and customer
          acquisition, this evergreen brand hit a milestone of $1M in sales
          while holding a 5.75% Conversion Rate and a Profit Margin of 35%.
        </Body>
        <FlexRow
          alignItems="flex-start"
          justifyContent="flex-start"
          wrap="wrap"
          style={{ marginTop: "2rem" }}
        >
          <TextBox
            style={{ marginRight: "2rem" }}
            title="5.75%"
            label="Conv. Rate"
          />
          <TextBox
            style={{ marginRight: "2rem" }}
            title="34.7%"
            label="Profit Margin"
          />
          <TextBox title="18%" label="Ad Spend Percentage" />
        </FlexRow>
        <ButtonLink
          primary
          text="Grab a call with us!"
          link="/contact"
          style={{
            marginTop: "1rem",
            width: width < breakpoint ? "100%" : "25rem",
          }}
        />
      </MainContainer>
      <ImageContainer
        as={motion.div}
        initial={{ y: 100 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <StaticImage
          src="../../images/Bolstered Media - Case Study.png"
          alt="Case Study - $800,000 in sales."
          layout="fullWidth"
        />
      </ImageContainer>
    </Container>
  );
}
