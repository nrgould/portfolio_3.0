import React from "react";
import styled from "styled-components";

const ArrowTop = styled.div`
  background-color: #666;
  height: 4px;
  left: -5px;
  position: absolute;
  top: 50%;
  width: 100%;

  &:after {
    background-color: #fff;
    content: "";
    height: 100%;
    position: absolute;
    top: 0;
    transition: all $transition-time;
  }

  transform: rotate(45deg);
  transform-origin: bottom right;

  &:after {
    left: 100%;
    right: 0;
    transition-delay: 0s;
  }
`;

const ArrowBottom = styled.div`
  background-color: #666;
  height: 4px;
  left: -5px;
  position: absolute;
  top: 50%;
  width: 100%;

  &:after {
    background-color: #fff;
    content: "";
    height: 100%;
    position: absolute;
    top: 0;
    transition: all $transition-time;
  }

  transform: rotate(-45deg);
  transform-origin: top right;

  &:after {
    left: 0;
    right: 100%;
    transition-delay: $transition-time;
  }
`;

const ArrowComponent = styled.div`
  cursor: pointer;
  height: 80px;
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
  transition: transform 0.1s;
  width: 60px;

  $transition-time: 0.15s;

  &-top,
  &-bottom {
    background-color: #666;
    height: 4px;
    left: -5px;
    position: absolute;
    top: 50%;
    width: 100%;

    &:after {
      background-color: #fff;
      content: "";
      height: 100%;
      position: absolute;
      top: 0;
      transition: all $transition-time;
    }
  }

  &-top {
    transform: rotate(45deg);
    transform-origin: bottom right;

    &:after {
      left: 100%;
      right: 0;
      transition-delay: 0s;
    }
  }

  &-bottom {
    transform: rotate(-45deg);
    transform-origin: top right;

    &:after {
      left: 0;
      right: 100%;
      transition-delay: $transition-time;
    }
  }

  &:hover & {
    ${ArrowTop}:after {
      left: 0;
      transition-delay: $transition-time;
    }

    ${ArrowBottom}:after {
      right: 0;
      transition-delay: 0s;
    }
  }

  &:active {
    transform: translateX(-50%) translateY(-50%) scale(0.9);
  }
`;

export default function Arrow() {
  return (
    <ArrowComponent>
      <ArrowTop />
      <ArrowBottom />
    </ArrowComponent>
  );
}
