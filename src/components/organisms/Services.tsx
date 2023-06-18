import React from "react";
import styled from "styled-components";
import { Title } from "../atoms/Title";
import ServiceCard from "../molecules/ServiceCard";
import { SERVICES } from "../../constants";
import Icon from "../molecules/Icon";

const Container = styled.section`
  /* width: 80%; */
  margin-top: 10rem;
  position: relative;
`;

const CardContainer = styled.div`
  padding: 0 2rem;
  align-items: stretch;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  overflow-x: auto;
  overflow-y: hidden;
  white-space: nowrap;
`;

export default function Services() {
  return (
    <Container>
      <Title style={{ marginLeft: "2rem", fontSize: "3rem" }}>
        How we get it done
      </Title>
      <CardContainer>
        {SERVICES.map(({ title, buttonText, content, id, icon }, index) => {
          return (
            <ServiceCard
              key={index}
              index={index}
              icon={
                <Icon
                  name={icon.name}
                  color={icon.color}
                  bgColor={icon.bgColor}
                  size={36}
                />
              }
              title={title}
              text={content}
              buttonText={buttonText}
              link={`/services#${id}`}
            />
          );
        })}
      </CardContainer>
    </Container>
  );
}
