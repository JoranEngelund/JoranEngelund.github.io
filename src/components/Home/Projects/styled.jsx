import styled from "styled-components";
import { keyframes } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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

const typewriter = keyframes`
  from {
    width: 0;
  }
  to {
    width: 640px;
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

export const ProjectContainer = styled.div`
  animation: ${FadeInAnimation} 0.6s ease-in-out;
  animation: ${IntroAnimation} 0.6s ease-in-out;
`;

export const StyledIcon = styled(FontAwesomeIcon)`
  animation: ${FadeInAnimation} 0.6s ease-in-out;
  animation: ${IntroAnimation} 0.6s ease-in-out;
`;

export const Heading = styled.h1`
  color: hsl(0, 0%, 68%);
  font-weight: bold !important;
  font-family: "Anonymous Pro", monospace !important;
  letter-spacing: 1px !important;
  overflow: hidden;

  white-space: nowrap;
  animation: ${typewriter} 3s steps(44) 1 normal both,
    ${blinkTextCursor} 500ms linear;
`;

export const IntroParagraph = styled.p`
  color: hsl(0, 0%, 68%);
  font-family: "Anonymous Pro", monospace !important;
  width: 40rem;
  transition: 0.5s ease-in-out;
  animation: ${FadeInAnimation} 0.6s ease-in-out;
  animation: ${IntroAnimation} 0.6s ease-in-out;
`;

export const ImageContainer = styled.div`
  display: flex;
  gap: 3rem;
  margin: 0 1rem 0 0;
`;
export const Image = styled.img`
  width: 100%;
  transition: 0.5s ease-in-out;
  animation: ${FadeInAnimation} 0.6s ease-in-out;
  animation: ${IntroAnimation} 0.6s ease-in-out;
`;

export const IconContainer = styled.div`
  align-self: center;
  flex-direction: column;
  display: flex;
  gap: 2rem;
`;

export const ContactIconsContainer = styled.div`
  display: flex;
  gap: 3rem;
  margin: 3rem 1rem;
`;

export const LinkIcon = styled.a`
  font-size: 2rem;
  text-decoration: none;
  color: white;

  cursor: pointer;
  position: relative;
  padding: 10px 20px;

  font-size: 28px;
  border-top-right-radius: 10px;
  border-bottom-left-radius: 10px;
  transition: all 1s;

  &:after,
  &:before {
    content: " ";
    width: 10px;
    height: 10px;
    position: absolute;
    border: 0px solid #fff;
    transition: all 0.7s;
  }
  &:after {
    top: -1px;
    left: -1px;
    border-top: 5px solid white;
    border-left: 5px solid white;
  }
  &:before {
    bottom: -1px;
    right: -1px;
    border-bottom: 5px solid white;
    border-right: 5px solid white;
  }
  &:hover {
    border-top-right-radius: 0px;
    border-bottom-left-radius: 0px;
    color: white;
    &:before,
    &:after {
      width: 100%;
      height: 100%;
      // border-color:white;
    }
  }
`;
