import { Main } from "../atoms/Main";
import React from "react";
import { useWindowDimensions } from "../../hooks/useWindowDimensions";
import NavbarDesktop from "./NavbarDesktop";
import NavbarMobile from "./NavbarMobile";
import { breakpoint } from "../../theme";
import Footer from "./Footer";
import CookieConsent from "../molecules/CookieConsent";

interface Props {
  children: JSX.Element | JSX.Element[];
  fullWidth?: boolean;
  bottomMargin?: boolean;
}

export default function Layout({ children, bottomMargin, fullWidth }: Props) {
  const { width } = useWindowDimensions();
  return (
    <>
      {width > breakpoint ? <NavbarDesktop /> : <NavbarMobile />}
      <Main
        style={{
          width: fullWidth ? "100%" : "80%",
          marginBottom: bottomMargin ? "5rem" : 0,
          // overflowX: fullWidth ? "hidden" : "auto",
        }}
      >
        {children}
      </Main>
      <Footer />
      {/* <CookieConsent /> */}
    </>
  );
}
