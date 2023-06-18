import ContactForm from "./ContactForm";
import React from "react";
import styled from "styled-components";
import { breakpoint, COLORS } from "../../theme";
import { useWindowDimensions } from "../../hooks/useWindowDimensions";
import { SubTitle } from "../atoms/SubTitle";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap-reverse;
  width: 90%;
  margin: auto;
`;

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  border: 1px solid ${COLORS.border};
  padding: 2rem 4rem;
  border-radius: 8px;
`;

// const RightContainer = styled.div`
//   background-color: ${COLORS.gray};
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   flex: 1 1;
//   padding: 2rem 4rem;
//   border-radius: 8px;
//   margin-bottom: 2rem;
//   min-width: 25rem;
//   max-width: 40rem;
// `;

export default function ContactSection() {
  const { width } = useWindowDimensions();
  return (
    <Container
      style={
        width < breakpoint
          ? {
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "5rem",
            }
          : { marginBottom: "5rem" }
      }
    >
      <ContactContainer
      // style={width > breakpoint ? { marginRight: "5rem" } : null}
      >
        <FormContainer>
          <SubTitle
            style={{
              marginBottom: "3rem",
              maxWidth: "25rem",
            }}
          >
            Fill out this simple form and we'll get back to you within 48 hours!
          </SubTitle>
          <ContactForm style={{ marginBottom: "5rem" }} />
        </FormContainer>
      </ContactContainer>
    </Container>
  );
}
