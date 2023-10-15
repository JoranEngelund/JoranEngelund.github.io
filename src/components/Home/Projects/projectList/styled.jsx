import styled from "styled-components";
import { keyframes } from "styled-components";

export const FadeInAnimation = keyframes`
0% {
    opacity: 0;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const IntroAnimation = keyframes`
0% {
    opacity: 0;
    -webkit-transform: translate3d(0,10px,0);
    -moz-transform: translate3d(0,10px,0);
    -ms-transform: translate3d(0,10px,0);
    -o-transform: translate3d(0,10px,0);
    transform: translate3d(0,10px,0);
75% {
    opacity: 0;
    -webkit-transform: translate3d(0,10px,0);
    -moz-transform: translate3d(0,10px,0);
    -ms-transform: translate3d(0,10px,0);
    -o-transform: translate3d(0,10px,0);
    transform: translate3d(0,10px,0);
}
100% {
    opacity: 1;
    -webkit-transform: translate3d(0,0,0);
    -moz-transform: translate3d(0,0,0);
    -ms-transform: translate3d(0,0,0);
    -o-transform: translate3d(0,0,0);
    transform: translate3d(0,0,0);
}
`;

export const ProjectContainer = styled.div`
  width: calc(28% - 10px);
  height: 28rem;
  margin-right: 2rem;

  @media (max-width: 940px) {
    width: 100%;
    margin-top: 15rem;
  }
`;

export const ProjectHeading = styled.h2`
  font-family: "Anonymous Pro", monospace !important;
  letter-spacing: 2px !important;
  font-size: 2rem;
  animation: ${FadeInAnimation} 0.6s ease-in-out;
  animation: ${IntroAnimation} 0.6s ease-in-out;
`;

export const ProjectList = styled.ul`
  list-style: none;
  animation: ${FadeInAnimation} 0.6s ease-in-out;
  animation: ${IntroAnimation} 0.6s ease-in-out;
`;

export const ProjectItems = styled.li`
  transition: 0.5s ease-in-out;
  opacity: 0.8;
  animation: ${FadeInAnimation} 0.6s ease-in-out;
  animation: ${IntroAnimation} 0.6s ease-in-out;

  &:hover {
    opacity: 1;
    cursor: pointer;
    transform: scale(1.12);
  }

  @media (max-width: 940px) {
    &:hover {
      opacity: 1;
      cursor: pointer;
      transform: scale(1.1);
    }
  }
`;
