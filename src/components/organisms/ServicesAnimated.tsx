import {
  motion,
  MotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import React, { useRef } from "react";
import { useInView } from "react-intersection-observer";
import styled from "styled-components";
import { SERVICES } from "../../constants";
import { COLORS } from "../../theme";
import InverseButton from "../atoms/InverseButton";
import ArrowRight from "../Icons/ArrowRight";
import Icon from "../molecules/Icon";

const MainContainer = styled.div`
  margin-bottom: 10rem;
  position: relative;
  max-width: 100vw;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
`;

interface ServiceCardPropTypes {
  scrollType: "center" | "none";
}

const ServiceContainer = styled.section<ServiceCardPropTypes>`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  scroll-snap-align: ${(p) => p.scrollType};
  perspective: 500px;
  transform-origin: center center;
`;

const ServiceDiv = styled.div`
  width: 100vw;
  height: 350px;
  position: relative;
  max-height: 90vh;
  background: #fff;
`;

const ServiceTitle = styled(motion.h2)`
  margin: 0;
  color: ${COLORS.primaryText};
  font-size: 3rem;
  font-weight: 700;
  line-height: 1.3;
  max-width: 30vw;
  margin-bottom: 1rem;
`;

const ServiceText = styled(motion.p)`
  margin: 0;
  color: ${COLORS.primaryText};
  font-size: 1.2rem;
  font-weight: 500;
  line-height: 1.5;
  max-width: 30vw;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 4; /* number of lines to show */
  -webkit-box-orient: vertical;
  line-clamp: 4;
  /* margin-bottom: 1rem; */
`;

const SideContainer = styled.div`
  position: absolute;
  left: calc(50% + 200px);
  top: 0;
  bottom: 0;
  padding: 2rem 0;
`;

const StyledCard = styled.div`
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 0;
  transform: translateX(-200px);
  height: 100%;
  max-width: 35vw;
`;

const SectionTitle = styled(motion.h1)`
  position: fixed;
  top: 45%;
  left: calc(10% - 100px);
  font-size: 3rem;
  z-index: 10;
`;

const ProgressBar = styled(motion.div)`
  position: fixed;
  left: 0;
  right: 0;
  height: 5px;
  background: ${COLORS.primary};
  bottom: 100px;
`;

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

function ServiceCard({
  title,
  buttonText,
  content,
  id,
  icon,
  scrollType,
}: {
  title: string;
  buttonText: string;
  content: string;
  id: string;
  icon: any;
  scrollType: "none" | "center";
}) {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 350);

  return (
    <ServiceContainer scrollType={scrollType}>
      <ServiceDiv ref={ref}>
        <StyledCard>
          <Icon
            name={icon.name}
            color={icon.color}
            bgColor={icon.bgColor}
            size={144}
          />
        </StyledCard>
        <SideContainer as={motion.div} style={{ y }}>
          <ServiceTitle>{title}</ServiceTitle>
          <ServiceText>{content}</ServiceText>
          <InverseButton
            link={`/services#${id}`}
            secondary
            text={buttonText ? `More About ${buttonText}` : "Learn More"}
            icon={<ArrowRight />}
            style={{ position: "absolute", left: 0 }}
          />
        </SideContainer>
      </ServiceDiv>
    </ServiceContainer>
  );
}

export default function ServicesAnimated() {
  const ref2 = useRef(null);

  const { ref, inView } = useInView({
    threshold: 0.15,
  });

  const { scrollYProgress } = useScroll({ target: ref2 });

  const textColor = useTransform(
    scrollYProgress,
    [0, 0.2, 0.4, 0.6, 0.8, 1],
    [
      COLORS.success,
      COLORS.warning,
      COLORS.purple,
      COLORS.error,
      COLORS.blue,
      COLORS.turqoise,
    ]
  );

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div ref={ref2}>
      <MainContainer ref={ref}>
        {inView && (
          <SectionTitle
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            style={{ color: textColor }}
            transition={{ duration: 0.45, damping: 70, stiffness: 100 }}
          >
            Our Services
          </SectionTitle>
        )}
        {SERVICES.map(({ title, buttonText, content, id, icon }, index) => {
          return (
            <ServiceCard
              key={index}
              icon={icon}
              title={title}
              content={content}
              buttonText={buttonText}
              scrollType={inView ? "center" : "none"}
              id={id}
            />
          );
        })}
        {inView && (
          <ProgressBar
            exit={{ opacity: 0 }}
            style={{ scaleX, backgroundColor: textColor }}
          />
        )}
      </MainContainer>
    </div>
  );
}
