import React from "react";
import { CookieNotice } from "gatsby-cookie-notice";
import { SubTitle } from "../atoms/SubTitle";
import { Body } from "../atoms/Body";
import styled from "styled-components";
import { COLORS, SHADOW } from "../../theme";
// import CookieConsent from "react-cookie-consent";

const EnclosingStyledComponent = styled.div`
  .accept-button {
    border: none;
    text-align: center;
    cursor: pointer;
    padding: 1rem 2.5rem;
    border-radius: 8px;
    box-shadow: ${SHADOW.normal};
    transition: all 200ms ease;
    display: flex;
    flex-direction: row;
    align-items: center;
    color: ${COLORS.primaryText};
    background: ${COLORS.success};

    &:hover {
      background: ${COLORS.successSoft};
      transform: scale(1.01);
    }
  }
  .decline-button {
    border: none;
    background: none;
    text-align: center;
    cursor: pointer;
    padding: 1rem 2.5rem;
    border-radius: 8px;
    box-shadow: ${SHADOW.normal};
    transition: all 200ms ease;
    display: flex;
    flex-direction: row;
    align-items: center;
    color: ${COLORS.primaryText};
    background: ${COLORS.error};

    &:hover {
      background: ${COLORS.errorSoft};
      transform: scale(1.01);
    }
    .background {
      background-color: ${COLORS.foreground};
    }
  }
`;

export default function CookieConsent() {
  return (
    <EnclosingStyledComponent>
      <CookieConsent
        // declineButtonClass="decline-button"
        // acceptButtonClass="accept-button float-end"
        // location="bottom"
        // style={{ background: "#2B373B" }}
        // buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
      >
        This website uses cookies to enhance the user experience.
        {/* <SubTitle>This websites uses cookies.</SubTitle>
        <Body>
          We use cookies to make the site work better, but also to see how you
          interact with it. how you interact with it. We will only use cookies
          if you allow us to do so by clicking by clicking on "Accept Cookies".
          You can also choose which cookie you want to allow.
        </Body> */}
      </CookieConsent>
    </EnclosingStyledComponent>
  );
}
