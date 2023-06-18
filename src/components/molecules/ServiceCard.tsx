import React from "react";
import styled from "styled-components";
import { Body } from "../atoms/Body";
import Card from "../atoms/CardSlider";
import InverseButton from "../atoms/InverseButton";
import ArrowRight from "../Icons/ArrowRight";

const Container = styled.div`
  padding: 3rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: relative;
  height: "100%";
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
`;

const CardTitle = styled.h2`
  font-size: 1.5rem;
  white-space: initial;
  line-height: 2rem;
  margin: 0;
`;

const TitleContainer = styled.div`
  min-height: 3rem;
  width: 100%;
  margin: 1.25rem 0;
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
`;

const CardText = styled(Body)`
  margin-bottom: 2rem;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 4; /* number of lines to show */
  -webkit-box-orient: vertical;
  line-clamp: 4;
`;

interface Props {
  title: string;
  text: string;
  icon?: any;
  link: string;
  index?: number;
  buttonText: string;
}

export default function ServiceCard({
  title,
  buttonText,
  text,
  icon,
  link,
  index,
}: Props) {
  return (
    <Card
      height="32rem"
      flexDir="row"
      alignItems="center"
      justifyContent="center"
      style={{ minWidth: "22rem", padding: "0.75rem 0.5rem" }}
    >
      <Container style={{ zIndex: index * 10 }}>
        <IconContainer>{icon}</IconContainer>
        <TitleContainer>
          <CardTitle>{title}</CardTitle>
        </TitleContainer>
        <CardText>{text}</CardText>
        <InverseButton
          link={link}
          secondary
          text={buttonText ? `More About ${buttonText}` : "Learn More"}
          style={{ position: "absolute", bottom: 0 }}
          icon={<ArrowRight />}
        />
      </Container>
    </Card>
  );
}
