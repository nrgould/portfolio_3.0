import React from "react";
import styled from "styled-components";
import { StyledNavLink } from "../atoms/nav/StyledNavLink";
import { StyledNavButton } from "../atoms/nav/StyledNavButton";
import { Link } from "gatsby";
import DropDownNav from "../atoms/nav/DropDownNav";
import { SERVICES } from "../../constants";
import { StaticImage } from "gatsby-plugin-image";

const StyledNavLinks = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  max-width: 30rem;
  flex: 2;
`;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
`;

const StyledLogo = styled(Link)`
  flex: 1;
  display: flex;
  align-items: center;
  text-decoration: none;
  margin-left: 2rem;
  color: inherit;
  cursor: pointer;
`;

export default function NavbarDesktop() {
  return (
    <StyledContainer>
      <StyledLogo to="/">
        <StaticImage
          src="../../images/BM_logo.png"
          alt="Bolstered Media Logo"
          width={200}
        />
      </StyledLogo>
      <StyledNavLinks>
        <StyledNavLink to="/">Home</StyledNavLink>
        <DropDownNav
          dropDownItems={SERVICES.map((service) => ({
            title: service.title,
            id: service.id,
            icon: service.icon,
          }))}
          linkTitle="Services"
        />
        <StyledNavLink to="/team/">Team</StyledNavLink>
        <StyledNavButton to="/contact">Contact</StyledNavButton>
      </StyledNavLinks>
    </StyledContainer>
  );
}
