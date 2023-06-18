import React, { useRef } from "react";
import styled from "styled-components";
import PineapplesLogo from "../../images/logos/21pineapples_color.png";
import SuperXLogo from "../../images/logos/superX logo.png";
import OldSouthLogo from "../../images/logos/old_south.png";
import SouthernAttitudeLogo from "../../images/logos/SA.png";
import ASDLogo from "../../images/logos/ASD logo.png";
import DBNLogo from "../../images/logos/DBN_LOGO.webp";
import YALLLogo from "../../images/logos/yall_sweet_tea.png";
import { breakpoint, COLORS } from "../../theme";
import { useWindowDimensions } from "../../hooks/useWindowDimensions";
import { motion, useInView } from "framer-motion";

const Container = styled.section`
  margin: auto;
  margin-top: 10rem;
  background-color: ${COLORS.darkBrown};
  box-sizing: border-box;
  padding: 2.5rem 0;
  max-width: 100vw;
`;

const LogosContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  padding-bottom: 3rem;
  flex-wrap: wrap;
  /* overflow-x: scroll; */
`;

const ToolTip = styled.h5`
  color: ${COLORS.primaryText};
  font-size: 0.65rem;
  font-weight: 600;
  text-align: center;
  background-color: ${COLORS.lightGray};
  padding: 0.3rem;
  display: none;
  position: absolute;
  border-radius: 4px;
  bottom: -100;
  left: 0;
  right: 0;
  transition: all 200ms ease;
  z-index: 15;
`;

const Logo = styled.img`
  max-height: 3rem;
  max-width: 12rem;
  transition: all 200ms ease;

  @media (max-width: ${breakpoint + "px"}) {
    margin: 0 2rem 3rem 2rem;
  }

  &:hover {
    transform: scale(1.02);
  }
`;

const LogosText = styled.h3`
  color: ${COLORS.primary2};
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 2rem;
  text-align: center;
  /* padding-top: 2rem; */
`;

interface WrapperProps {
  width: number;
}

const LogoWrapper = styled.div<WrapperProps>`
  position: relative;
  &:hover ${ToolTip} {
    display: block;
  }
`;

const LOGOS = [
  { alt: "Old South Apparel", image: OldSouthLogo },
  { alt: "Southern Attitude", image: SouthernAttitudeLogo },
  { alt: "21Pineapples", image: PineapplesLogo },
  { alt: "Y'all Sweet Tea", image: YALLLogo },
  { alt: "American Steel Designs", image: ASDLogo },
  { alt: "SuperX Apparel", image: SuperXLogo },
  { alt: "Dude. Be Nice", image: DBNLogo },
  // { alt: "Bald Head Blues", image: BHBLogo },
];

export default function BrandLogos() {
  const { width } = useWindowDimensions();

  const ref = useRef(null);

  const inView = useInView(ref, { once: true });

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.3,
        when: "beforeChildren",
      },
    },
  };

  const logo = {
    hidden: { y: 50, opacity: 0 },
    show: (index: number) => ({
      y: 0,
      opacity: 1,
      transition: { delay: index * 0.12, stiffness: 50, damping: 20 },
    }),
  };

  return (
    <Container style={{ width: width }} ref={ref}>
      <LogosText>Trusted By Popular Brands</LogosText>
      <LogosContainer
        as={motion.div}
        variants={container}
        initial="hidden"
        animate="show"
      >
        {LOGOS.map(({ alt, image }, i) => (
          <LogoWrapper
            width={width}
            as={motion.div}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            variants={logo}
            custom={i}
            whileHover={{ scale: 1.05 }}
            key={i}
          >
            <Logo alt={alt} src={image} />
            <ToolTip>{alt}</ToolTip>
          </LogoWrapper>
        ))}
      </LogosContainer>
    </Container>
  );
}
