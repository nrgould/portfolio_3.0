import React from "react";
import styled from "styled-components";
import { SERVICES } from "../../constants";
import { Title } from "../atoms/Title";
import Icon from "../molecules/Icon";
import MobileServiceCard from "../molecules/MobileServiceCard";

const Container = styled.section`
  /* width: 80%; */
  margin-top: 3rem;
  position: relative;
`;

const MobileCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default function ServicesMobile() {
  return (
    <Container>
      <Title style={{ textAlign: "center", marginBottom: "0.5rem" }}>
        How we get it done
      </Title>
      <MobileCardContainer>
        {SERVICES.map(({ title, content, id, icon }, index) => {
          return (
            <MobileServiceCard
              key={index}
              icon={
                <Icon
                  name={icon.name}
                  color={icon.color}
                  bgColor={icon.bgColor}
                  size={42}
                />
              }
              title={title}
              text={content}
              link={`/services#${id}`}
            />
          );
        })}
      </MobileCardContainer>
    </Container>
  );
}
