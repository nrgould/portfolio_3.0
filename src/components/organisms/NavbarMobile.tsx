import React, { useState } from "react";
import styled from "styled-components";
import Burger from "../atoms/nav/Burger";
import { COLORS, SHADOW } from "../../theme";
import { motion } from "framer-motion";
import { useWindowDimensions } from "../../hooks/useWindowDimensions";
import { StyledNavLink } from "../atoms/nav/StyledNavLink";
import { StyledNavButton } from "../atoms/nav/StyledNavButton";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import FlexColumn from "../atoms/FlexColumn";

interface Props {
  isOpen?: boolean;
}

const StyledNavLinks = styled.ul`
  padding-top: 2rem;
  display: flex;
  min-height: 95vh;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  flex: 1;
  &:last-child {
    margin-top: 2rem;
  }
`;

const MobileNavLink = styled(StyledNavLink)`
  font-size: 1.25rem;
  font-weight: 600;
  padding: 0.75rem 1rem;
  margin-bottom: 8px;
  border-radius: 6px;
  min-width: 90%;

  &:hover {
    background-color: ${COLORS.primarySoft};
    color: ${COLORS.primaryText};
  }

  &:last-of-type {
    margin-bottom: 2rem;
  }
`;

const MobileNavButton = styled(StyledNavButton)`
  font-weight: 600;
  padding: 1rem 0;
  margin-top: 1rem;
  text-align: center;
  background-color: ${COLORS.secondary};
  color: white;
  min-width: 90%;
  &:hover {
    background-color: ${COLORS.secondarySoft};
  }
`;

const StyledContainer = styled.div<Props>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
  max-width: 100vw;
`;

const StyledLogo = styled(Link)`
  flex: 1;
  text-decoration: none;
  color: inherit;
  cursor: pointer;
`;

const Drawer = styled(motion.div)<{ isOpen: boolean }>`
  background-color: ${COLORS.white};
  width: 66.6vw;
  height: 100vh;
  position: fixed;
  top: 0;
  z-index: 20;
  box-shadow: ${SHADOW.normal};
  display: ${(p) => (p.isOpen ? "block" : "none")};
`;

const Backdrop = styled(motion.div)`
  background-color: #000;
  opacity: 0.4;
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  z-index: 1;
  cursor: pointer;
`;

export default function NavbarMobile() {
  const { width } = useWindowDimensions();

  const NAV_LINK_WIDTH = "10rem";

  const [isOpen, setOpen] = useState(false);

  function handleOpen() {
    setOpen(isOpen ? false : true);
    document.body.style.overflow = isOpen ? "unset" : "hidden";
  }

  return (
    <React.Fragment>
      <StyledContainer style={{ width: width }} isOpen={isOpen}>
        <StyledLogo to="/">
          <StaticImage
            src="../../images/optimized/BM_logo.png"
            alt="Bolstered Media Logo"
            width={200}
          />
        </StyledLogo>
        <Burger
          isOpen={isOpen}
          onClick={handleOpen}
          strokeWidth="6"
          color={COLORS.primaryText}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
        />
      </StyledContainer>
      <Drawer
        isOpen={isOpen}
        initial={{ x: width }}
        animate={isOpen ? { x: width / 3 } : { x: width }}
        transition={{ type: "tween", ease: "easeInOut" }}
      >
        <StyledNavLinks>
          <FlexColumn
            alignItems="flex-start"
            justifyContent="center"
            style={{ width: "100%" }}
          >
            <MobileNavLink
              onClick={handleOpen}
              to="/"
              style={{ width: NAV_LINK_WIDTH }}
            >
              Home
            </MobileNavLink>
            <MobileNavLink
              onClick={handleOpen}
              to="/services"
              style={{ width: NAV_LINK_WIDTH }}
            >
              Services
            </MobileNavLink>
            <MobileNavLink
              onClick={handleOpen}
              to="/team/"
              style={{ width: NAV_LINK_WIDTH }}
            >
              Team
            </MobileNavLink>
          </FlexColumn>
          <MobileNavButton
            onClick={handleOpen}
            style={{ width: NAV_LINK_WIDTH }}
            to="/contact/"
          >
            Contact
          </MobileNavButton>
        </StyledNavLinks>
      </Drawer>
      {isOpen ? (
        <Backdrop
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          onClick={handleOpen}
        />
      ) : null}
    </React.Fragment>
  );
}
