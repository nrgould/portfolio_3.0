import { navigate } from "gatsby";
import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import styled from "styled-components";
import { COLORS, SHADOW } from "../../../theme";
import NavIcon from "../../molecules/NavIcon";
import { StyledNavLink } from "./StyledNavLink";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: relative;
  z-index: 100;
  margin-right: 1rem;
`;

const OpenContainer = styled.div`
  position: absolute;
  top: 40px;
  left: -50%;
  background-color: ${COLORS.white};
  box-shadow: ${SHADOW.normal};
  display: flex;
  flex-direction: column;
  width: 22rem;
  padding: 1rem;
  border-radius: 8px;
`;

const LinkContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const LinkText = styled.p`
  color: ${COLORS.primaryText};
  text-decoration: none;
  font-weight: 600;
  cursor: pointer;
  margin-right: 0.5rem;

  transition: all 200ms ease;
`;

const InivisibleBackdrop = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
`;

interface Props {
  dropDownItems: any;
  linkTitle: string;
}

export default function DropDownNav({ dropDownItems, linkTitle }: Props) {
  const [open, setOpen] = useState(false);
  const [hoverItem, setHoverItem] = useState("");
  return (
    <React.Fragment>
      <Container
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => {
          setOpen(false);
          setHoverItem("");
        }}
      >
        <LinkText
          style={{ color: open ? COLORS.primary3 : COLORS.primaryText }}
          onClick={() => navigate("/services/")}
        >
          {linkTitle}
        </LinkText>
        {open ? <FaChevronUp color={COLORS.primary3} /> : <FaChevronDown />}
        {open && (
          <OpenContainer>
            {dropDownItems.map(({ title, id, icon }, i) => (
              <StyledNavLink
                key={i}
                style={{
                  marginBottom: "0.5rem",
                  color: hoverItem === id ? icon.color : COLORS.primaryText,
                  backgroundColor: hoverItem === id ? icon.bgColor : null,
                  padding: "0.5rem",
                  minHeight: "2rem",
                  borderRadius: "8px",
                  transition: "all 200ms ease",
                }}
                onMouseOver={() => setHoverItem(id)}
                to={`/services#${id}`}
              >
                <LinkContainer>
                  <NavIcon
                    size={16}
                    color={icon.color}
                    bgColor={icon.bgColor}
                    name={icon.name}
                    style={{ marginRight: "1rem" }}
                  />
                  {title}
                </LinkContainer>
              </StyledNavLink>
            ))}
          </OpenContainer>
        )}
      </Container>
      {open && (
        <InivisibleBackdrop
          onClick={() => {
            setOpen(false);
            setHoverItem("");
          }}
        />
      )}
    </React.Fragment>
  );
}
