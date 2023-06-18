import React, { useRef } from "react";
import styled from "styled-components";
import PineapplesLogo from "../../images/logos/21pineapples_color.png";
import SuperXLogo from "../../images/logos/superX logo.png";
import OldSouthLogo from "../../images/logos/old_south.png";
import SouthernAttitudeLogo from "../../images/logos/SA.png";
import ASDLogo from "../../images/logos/ASD logo.png";
import DBNLogo from "../../images/logos/DBN_LOGO.webp";
import SewSouthern from "../../images/logos/SewSouthern.png";
import NewMoonMinerals from "../../images/logos/NMM_Logo.png";
import ChristianPlanner from "../../images/logos/ChristianPlannerLogo.png";
import CoastlandLogo from "../../images/logos/coastland.png";
import BHBLogo from "../../images/logos/BHB.png";
import YALLLogo from "../../images/logos/yall_sweet_tea.png";
import { breakpoint, COLORS } from "../../theme";
import { useWindowDimensions } from "../../hooks/useWindowDimensions";
import { motion } from "framer-motion";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../../styles.css";

import { IoChevronBack, IoChevronForward } from "react-icons/io5";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 6,
    slidesToSlide: 2,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 2,
  },
  tablet: {
    breakpoint: { max: 1024, min: 600 },
    items: 3,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 700, min: 0 },
    items: 2,
    slidesToSlide: 1,
  },
};

const LOGOS = [
  { alt: "Old South Apparel", image: OldSouthLogo },
  { alt: "Southern Attitude", image: SouthernAttitudeLogo },
  { alt: "Bald Head Blues", image: BHBLogo },
  { alt: "Christian Planner", image: ChristianPlanner },
  { alt: "Coastland", image: CoastlandLogo },
  { alt: "21Pineapples", image: PineapplesLogo },
  { alt: "Y'all Sweet Tea", image: YALLLogo },
  { alt: "New Moon Minerals", image: NewMoonMinerals },
  { alt: "American Steel Designs", image: ASDLogo },
  { alt: "SuperX Apparel", image: SuperXLogo },
  { alt: "Dude. Be Nice", image: DBNLogo },
  { alt: "Sew Southern", image: SewSouthern },
];

const Container = styled.section`
  margin: auto;
  background-color: ${COLORS.foreground};
  box-sizing: border-box;
  padding: 2rem 0;
  padding-bottom: 4rem;
  max-width: 100vw;
`;

const Wrapper = styled.div`
  margin-top: 4rem;

  @media (max-width: ${breakpoint + "px"}) {
    margin-top: 2rem;
  }
`;

const LogoContainer = styled.img`
  display: inline-block;
  max-height: 4rem;
  max-width: 12rem;
  transition: all 200ms ease;

  @media (max-width: ${breakpoint + "px"}) {
    margin: 0 2rem;
  }
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

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 8rem;
  width: 12rem;
  margin: 2rem 0;

  @media (max-width: ${breakpoint + "px"}) {
    height: auto;
    width: 60vw;
  }

  &:hover ${ToolTip} {
    display: block;
  }
`;

const LogosText = styled.h3`
  color: ${COLORS.primary2};
  font-size: 1.4rem;
  font-weight: 600;
  margin: 0 1rem;
  text-align: center;
`;

function Logo({ src, alt }: { src: string; alt: string }) {
  const logo = {
    out: {
      x: -200,
      opacity: 0,
      transition: { duration: 0.35, easing: "easeIn" },
    },
    in: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.35, easing: "easeIn" },
    },
    initial: {
      opacity: 0,
      x: 150,
    },
  };

  return (
    <motion.div
      initial="initial"
      animate={"in"}
      exit={"out"}
      variants={logo}
      whileHover={{ scale: 1.02 }}
    >
      <LogoContainer alt={alt} src={src}></LogoContainer>
    </motion.div>
  );
}

interface CustomArrowProps {
  onClick?: () => void;
  position: "left" | "right";
}

const CustomArrow = ({ position, onClick }: CustomArrowProps) => {
  return (
    <button onClick={onClick} className={`arrow ${position}`}>
      {position === "right" ? (
        <IoChevronForward size={52} color={COLORS.white} />
      ) : (
        <IoChevronBack size={52} color={COLORS.white} />
      )}
    </button>
  );
};

export default function BrandLogos() {
  const { width } = useWindowDimensions();

  const ref = useRef(null);

  return (
    <Wrapper>
      <Container style={{ width: width }} ref={ref}>
        <LogosText>Trusted By Popular Brands & Organizations</LogosText>
        <Carousel
          responsive={responsive}
          swipeable={true}
          draggable={true}
          ssr={true}
          infinite={true}
          autoPlay={true}
          containerClass="carousel-container"
          autoPlaySpeed={2000}
          customRightArrow={<CustomArrow position="right" />}
          customLeftArrow={<CustomArrow position="left" />}
        >
          {LOGOS.map(({ alt, image }, i) => (
            <LogoWrapper>
              <Logo key={i} alt={alt} src={image} />
            </LogoWrapper>
          ))}
        </Carousel>
      </Container>
    </Wrapper>
  );
}
