import * as s from "./styled";
import { useState, useEffect } from "react";

const About = () => {
  const [text, setText] = useState("");
  const originalText = ` My name is Jøran Engelund, I'm a front-end developer based in Oslo,
          Norway. I have developed different types of front-ends like an
          informational website for Engelund Termofrakt AS, Online Auction
          House, E-commerce platform and an Online Booking accommodation.`;
  const typingSpeed = 20;

  useEffect(() => {
    let currentIndex = 0;

    const interval = setInterval(() => {
      if (currentIndex <= originalText.length) {
        setText(originalText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, typingSpeed);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <s.Heading>Welcome.</s.Heading>
      <s.IntroParagraph>{text}</s.IntroParagraph>
    </>
  );
};

export default About;
