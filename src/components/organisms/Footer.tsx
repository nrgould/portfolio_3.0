import { StyledNavLink } from "../atoms/nav/StyledNavLink";
import React from "react";
import styled from "styled-components";
import { COLORS } from "../../theme";
import {
  IoLogoInstagram,
  IoLogoFacebook,
  IoLogoLinkedin,
} from "react-icons/io5";
import FlexRow from "../atoms/FlexRow";
import { SERVICES } from "../../constants";

const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: space-evenly;
  justify-content: center;
  background-color: ${COLORS.foreground};
  padding: 2rem 5rem;
  flex-wrap: wrap;

  @media (max-width: 767px) {
    align-items: center;
  }
`;

const FooterRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;

const FooterLink = styled(StyledNavLink)`
  color: ${COLORS.white};
  margin-bottom: 1rem;
  font-weight: 500;
  &:hover {
    color: ${COLORS.primary3};
  }
`;

export const ExternalLink = styled.a`
  margin-right: 1rem;
  text-decoration: none;
  color: ${COLORS.white};

  &:hover {
    color: ${COLORS.primary};
  }
`;

const WatermarkContainer = styled.div`
  margin-top: 3rem;
  /* width: 100vw; */
  text-align: center;
`;

const WatermarkText = styled.p`
  color: white;
  font-size: 0.75rem;
`;

const ColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  flex: 1 0 10rem;
  min-width: 20rem;

  @media (max-width: 767px) {
    align-items: flex-start;
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  flex: 1 0 10rem;
`;

const ColumnTitle = styled.h3`
  font-size: 1.25rem;
  color: ${COLORS.white};
  font-weight: bold;
  margin: 1rem 0;
`;

const SOCIAL_ICON_SIZE = 36;

export default function Footer() {
  return (
    <FooterContainer>
      <FooterRow>
        <ColumnWrapper>
          <Column>
            <ColumnTitle>Our Services</ColumnTitle>
            {SERVICES.map(({ title, id }, index) => (
              <FooterLink key={index} to={`/services#${id}`}>
                {title}
              </FooterLink>
            ))}
          </Column>
        </ColumnWrapper>
        <ColumnWrapper>
          <Column>
            <ColumnTitle>Helpful Links</ColumnTitle>
            <FooterLink to="/">Home</FooterLink>
            <FooterLink to="/team/">Team</FooterLink>
            <FooterLink to="/services/">Services</FooterLink>
          </Column>
        </ColumnWrapper>
        <ColumnWrapper>
          <Column>
            <ColumnTitle>Action</ColumnTitle>
            <FooterLink to="/contact">Contact Us</FooterLink>
            <FooterLink to="/team#jobs">Jobs</FooterLink>
          </Column>
        </ColumnWrapper>
        <ColumnWrapper>
          <Column>
            <ColumnTitle>Follow Us</ColumnTitle>
            <FlexRow justifyContent="space-around" alignItems="center">
              <ExternalLink
                href="https://www.instagram.com/bolsteredmedia/"
                target="_blank"
              >
                <IoLogoInstagram size={SOCIAL_ICON_SIZE} color={COLORS.white} />
              </ExternalLink>
              <ExternalLink
                href="https://www.facebook.com/BolsteredMedia"
                target="_blank"
              >
                <IoLogoFacebook size={SOCIAL_ICON_SIZE} color={COLORS.white} />
              </ExternalLink>
              <ExternalLink
                href="https://www.linkedin.com/company/bolstered-media"
                target="_blank"
              >
                <IoLogoLinkedin size={SOCIAL_ICON_SIZE} color={COLORS.white} />
              </ExternalLink>
            </FlexRow>
          </Column>
        </ColumnWrapper>
      </FooterRow>
      <WatermarkContainer>
        <WatermarkText>
          © {new Date().getFullYear()} Bolstered Media, All Rights Reserved
        </WatermarkText>
        <WatermarkText>www.bolsteredmedia.com</WatermarkText>
      </WatermarkContainer>
    </FooterContainer>
  );
}
