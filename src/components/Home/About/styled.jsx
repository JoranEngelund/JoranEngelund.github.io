import styled from "styled-components";
import { keyframes } from "styled-components";

const typewriter = keyframes`
  from {
    width: 0;
  }
  to {
    width: 280px;
  }
}
`;

const blinkTextCursor = keyframes`
  from {
    border-right-color: hsl(0, 0%, 80%);
  }
  to {
    border-right-color: transparent;
  }
}
`;

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

export const IntroContainer = styled.div`
  align-self: center;
  height: 30rem;
  margin-right: 10rem;
  width: 30rem;
`;

export const Heading = styled.h1`
  position: relative;
  color: hsl(0, 0%, 68%);
  font-weight: bold !important;
  font-family: "Anonymous Pro", monospace !important;
  letter-spacing: 7px !important;
  overflow: hidden;

  white-space: nowrap;
  animation: ${typewriter} 3s steps(44) 1 normal both,
    ${blinkTextCursor} 500ms linear;
`;

export const IntroParagraph = styled.p`
  color: hsl(0, 0%, 68%);
  font-family: "Anonymous Pro", monospace !important;
  max-width: 38rem;
  animation: ${FadeInAnimation} 0.6s ease-in-out;
  animation: ${IntroAnimation} 0.6s ease-in-out;
`;
