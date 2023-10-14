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

export const MainContainer = styled.section`
  animation: ${IntroAnimation} 0.6s ease-in-out;
  margin: 2rem 1rem;
  max-height: 100vh;
`;

export const ContentContainer = styled.div`
  display: flex;
  justify-content: space-around;

  @media (max-width: 940px) {
    flex-direction: column;
    flex-wrap: wrap;
    gap: 15rem;
  }
`;

export const IntroContainer = styled.div`
  max-height: 20rem;
  margin-right: 10rem;
  width: 25rem;

  @media (max-width: 400px) {
    width: 17rem;
  }
`;

export const Line = styled.hr`
  animation: ${IntroAnimation} 0.6s ease-in-out;
  animation: ${FadeInAnimation} 0.6s ease-in-out;
  background-color: rgb(2, 0, 36);
  background: linear-gradient(
    0deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(9, 9, 121, 1) 54%,
    rgba(255, 0, 0, 1) 92%
  );

  @media (max-width: 940px) {
    width: 25%;
  }
`;
