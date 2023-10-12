import * as s from "../styled";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Image from "../../../../assets/evolve.png";

const Evolve = () => {
  const [text, setText] = useState("");
  const originalText = `Evolve is an E-Commerce store project, showcasing look-ahead searchbar, fully functional cart-system, various pages like specific product page, checkout page, checkout-success page, contact page with form etc. The E-Commerce store utilizes an external API for data. Developed with React & Styled-Components`;
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
    <s.ProjectContainer>
      <s.Heading>Evolve E-Commerce</s.Heading>
      <s.ImageContainer>
        <s.Image src={Image} />
        <s.IconContainer>
          <s.LinkIcon
            target="_blank"
            href="https://evolve-ecommerce.netlify.app/"
          >
            <s.StyledIcon icon={faGlobe} />
          </s.LinkIcon>
          <s.LinkIcon
            target="_blank"
            href="https://github.com/JoranEngelund/js-frameworks-ca"
          >
            <s.StyledIcon icon={faGithub} />
          </s.LinkIcon>
        </s.IconContainer>
      </s.ImageContainer>
      <s.IntroParagraph>{text}</s.IntroParagraph>
    </s.ProjectContainer>
  );
};
export default Evolve;
