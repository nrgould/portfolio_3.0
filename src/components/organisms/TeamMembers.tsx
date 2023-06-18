import React from "react";
import styled from "styled-components";
import TeamMemberCard from "../molecules/TeamMemberCard";
import { TEAM } from "../../constants";
import { useWindowDimensions } from "../../hooks/useWindowDimensions";
import { breakpoint } from "../../theme";

const Container = styled.div`
  display: grid;
  /* grid-template-columns: repeat(auto-fit, minmax(500px, 1fr)); */
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1rem;
  width: 80%;
  max-width: 80rem;
  justify-items: center;
  margin: auto;
  margin-top: 5rem;
  margin-bottom: 5rem;

  @media (max-width: ${breakpoint + "px"}) {
    grid-template-columns: repeat(1, 1fr);
    width: 90%;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  @media (max-width: 1300px) {
    width: 95%;
    margin: auto;
    grid-template-columns: repeat(1, 1fr);
  }
`;

export default function TeamMembers() {
  const { width } = useWindowDimensions();
  return (
    <Container>
      {TEAM.map(({ name, title, description, email }, index) => {
        const hasMargin = index % 2 === 1;

        return (
          <TeamMemberCard
            key={index}
            name={name}
            title={title}
            description={description}
            email={email}
            style={{
              marginTop: hasMargin && width > breakpoint ? "10rem" : 0,
              marginBottom: width < breakpoint ? "2rem" : 0,
            }}
          />
        );
      })}
    </Container>
  );
}
