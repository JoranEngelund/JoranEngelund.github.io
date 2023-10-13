import * as s from "../styled";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Image from "../../../../assets/bidit.png";

const Bidit = () => {
  const [text, setText] = useState("");
  const originalText = `BIDIT is an IT auction house, for tech-savvy individuals and businesses in the IT industry who are looking for cost-effective solutions for their technology needs. It features fully functional login and registration system, search and browse listings, create and sell auction listings. Developed with HTML5, SCSS, JavaScript and Bootstrap `;
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
      <s.Heading>BIDIT</s.Heading>
      <s.ImageContainer>
        <s.Image src={Image} alt="Screenshot of the BIDIT website" />
        <s.IconContainer>
          <s.LinkIcon
            target="_blank"
            href="https://bid-it.netlify.app/index.html"
          >
            <s.StyledIcon icon={faGlobe} />
          </s.LinkIcon>
          <s.LinkIcon
            target="_blank"
            href="https://github.com/JoranEngelund/semester-project-2"
          >
            <s.StyledIcon icon={faGithub} />
          </s.LinkIcon>
        </s.IconContainer>
      </s.ImageContainer>
      <s.IntroParagraph>{text}</s.IntroParagraph>
    </s.ProjectContainer>
  );
};
export default Bidit;
