import React from "react";
import styled from "styled-components";
import HeroImage from "../../images/optimized/hero_image.png";
import ButtonLink from "../atoms/ButtonLink";
import { useWindowDimensions } from "../../hooks/useWindowDimensions";
import { breakpoint } from "../../theme";
import TextSpan from "../atoms/TextSpan";

const StyledContainer = styled.section`
  width: 80%;
  margin: auto;

  @media (max-width: ${breakpoint + "px"}) {
    margin-top: 0;
    width: 90vw;
    max-width: 90vw;
  }
`;

const MainContentContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 2rem;

  @media (max-width: ${breakpoint + "px"}) {
    margin-top: 0;
  }
`;
const StyledHeroTitle = styled.h1`
  font-size: 2.8rem;
  margin: 0;
  max-width: 40rem;
  margin-bottom: 1rem;
  z-index: 10;
  line-height: 4rem;
  /* position: relative; */

  @media (max-width: ${breakpoint + "px"}) {
    max-width: 90vw;
    font-size: 2.5rem;
  }
`;

const StyledHeroSubTitle = styled.h2`
  font-size: 1.2rem;
  margin: 0;
  font-weight: 600;
  margin-bottom: 1rem;
  max-width: 30rem;
  line-height: 2rem;

  @media (max-width: ${breakpoint + "px"}) {
    max-width: 90vw;
  }
`;

const StyledTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  flex: 1 1 20rem;
  margin-bottom: 4rem;
`;

const StyledImageContainer = styled.div`
  flex: 1 1 20rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledHeroImage = styled.img`
  max-width: 30vw;

  @media (max-width: 1200px) {
    max-width: 60vw;
  }

  @media (max-width: ${breakpoint + "px"}) {
    max-width: 90vw;
    flex: 1;
  }
`;

export default function Hero() {
  const { width } = useWindowDimensions();
  return (
    <StyledContainer>
      <MainContentContainer>
        <StyledTextContainer
          style={{
            marginRight: width > breakpoint ? "5rem" : null,
          }}
        >
          <StyledHeroTitle>
            Achieve
            <TextSpan color="success">sustainable growth</TextSpan>
            without <br />
            <TextSpan>aimless spending</TextSpan>
          </StyledHeroTitle>
          <StyledHeroSubTitle>
            We accomplish this through our executive paid media strategies and
            by focusing on our 3 Core Values: Reputation, Performance, and
            Speed.
            {/* To help you grow your online store, you need an experienced team.
            While driving over $100 million in online sales, our team has scaled
            dozens of Direct-To-Consumer programs for some of the most
            recognizable brands in the world. Utilizing proven advertising
            strategies along with tested and proven tactics, we know what it
            takes to generate profitable sales. */}
          </StyledHeroSubTitle>
          <ButtonLink
            width={width < breakpoint ? "100%" : "25rem"}
            primary
            fontSize="1.3rem"
            link="/contact"
            text="Speak with us!"
          />
        </StyledTextContainer>
        <StyledImageContainer>
          <StyledHeroImage src={HeroImage} />
        </StyledImageContainer>
      </MainContentContainer>
      {/* <StatsContainer>
        <Statistic stat="$750,000" desc="Avg. Monthly Spend" />
        <Statistic stat="12,000,000" desc="Avg. Monthly Reach" />
        <Statistic stat="5.34%" desc="Avg. Conv. Rate" />
      </StatsContainer> */}
    </StyledContainer>
  );
}
