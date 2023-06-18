import React from "react";
import styled from "styled-components";
import { COLORS } from "../../theme";
import Icon from "./Icon";

const Container = styled.div`
  position: relative;
  flex: 1 1 20rem;
  margin-bottom: 8rem;
  margin-right: 10rem;

  @media (max-width: 1500px) {
    display: none;
  }
`;

export default function ServicesSplash() {
  return (
    <Container>
      <Icon
        name="paid"
        size={36}
        color={COLORS.success}
        bgColor={COLORS.successSoft}
        style={{
          position: "absolute",
          top: 0,
          right: 300,
          transform: "rotate(-30deg)",
        }}
      />
      <Icon
        name="sms"
        size={32}
        color={COLORS.warning}
        bgColor={COLORS.warningSoft}
        style={{
          position: "absolute",
          top: 10,
          right: 0,
          transform: "rotate(10deg)",
        }}
      />
      <Icon
        name="email"
        size={42}
        color={COLORS.purple}
        bgColor={COLORS.purpleSoft}
        style={{
          position: "absolute",
          top: -100,
          right: 130,
          transform: "rotate(-10deg)",
        }}
      />
      <Icon
        name="cro"
        size={50}
        color={COLORS.error}
        bgColor={COLORS.errorSoft}
        style={{
          position: "absolute",
          top: 60,
          right: 120,
          transform: "rotate(5deg)",
        }}
      />
      <Icon
        name="web"
        size={24}
        color={COLORS.blue}
        bgColor={COLORS.blueSoft}
        style={{
          position: "absolute",
          top: 150,
          right: 300,
          transform: "rotate(10deg)",
        }}
      />
      <Icon
        name="content"
        size={28}
        color={COLORS.turqoise}
        bgColor={COLORS.turqoiseSoft}
        style={{
          position: "absolute",
          top: 130,
          right: 0,
          transform: "rotate(-20deg)",
        }}
      />
    </Container>
  );
}
