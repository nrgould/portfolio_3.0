import React from "react";
import FlexRow from "../atoms/FlexRow";
import {
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoLinkedin,
} from "react-icons/io5";
import { ExternalLink } from "../organisms/Footer";
import { COLORS } from "../../theme";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

interface Props {
  primary?: boolean;
}

const SOCIAL_LINKS_SIZE = 36;

export default function SocialLinks({ primary }: Props) {
  let color = COLORS.white;

  if (primary) {
    color = COLORS.primaryText;
  }
  return (
    <Container>
      <FlexRow
        style={{ maxWidth: "20rem" }}
        justifyContent="space-around"
        alignItems="center"
      >
        <ExternalLink
          href="https://www.instagram.com/bolsteredmedia/"
          target="_blank"
        >
          <IoLogoInstagram size={SOCIAL_LINKS_SIZE} color={color} />
        </ExternalLink>
        <ExternalLink
          href="https://www.facebook.com/BolsteredMedia"
          target="_blank"
        >
          <IoLogoFacebook size={SOCIAL_LINKS_SIZE} color={color} />
        </ExternalLink>
        <ExternalLink
          href="https://www.linkedin.com/company/bolstered-media"
          target="_blank"
        >
          <IoLogoLinkedin size={SOCIAL_LINKS_SIZE} color={color} />
        </ExternalLink>
      </FlexRow>
    </Container>
  );
}
