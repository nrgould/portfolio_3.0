import React from "react";
import { Title } from "../atoms/Title";
import Profile from "../../images/optimized/profile.jpg";
import styled from "styled-components";
import Testimonial from "../molecules/Testimonial";
import { breakpoint, COLORS } from "../../theme";
import TestimonialInverse from "../molecules/TestimonialInverse";

const Container = styled.div`
  margin-bottom: 5rem;
  padding-top: 4rem;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const TestimonialContainer = styled.div`
  background-color: ${COLORS.primary};
  padding: 5rem 0;
  transform: rotate(5deg);
  width: 120vw;

  @media (max-width: ${breakpoint + "px"}) {
    transform: rotate(0);
  }
`;

export default function Testimonials() {
  return (
    <React.Fragment>
      <Container>
        <Title
          style={{
            marginLeft: "2rem",
            overflow: "hidden",
            marginBottom: "5rem",
            fontSize: "3rem",
          }}
        >
          What our clients are saying
        </Title>
        <TestimonialContainer>
          <Testimonial
            img={Profile}
            name="Bob Jones"
            title="CEO"
            company="company"
            text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero deleniti quam cupiditate culpa similique autem obcaecati neque sunt. "
          />
        </TestimonialContainer>
        <TestimonialContainer style={{ backgroundColor: COLORS.primary2 }}>
          <TestimonialInverse
            img={Profile}
            name="Bob Jones"
            title="CEO"
            company="company"
            text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero deleniti quam cupiditate culpa similique autem obcaecati neque sunt. "
          />
        </TestimonialContainer>
        <TestimonialContainer
          style={{ backgroundColor: COLORS.primary3, marginBottom: "7rem" }}
        >
          <Testimonial
            img={Profile}
            name="Bob Jones"
            title="CEO"
            company="company"
            text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero deleniti quam cupiditate culpa similique autem obcaecati neque sunt. "
          />
        </TestimonialContainer>
      </Container>
    </React.Fragment>
  );
}
