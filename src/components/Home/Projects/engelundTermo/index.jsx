import * as s from "../styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import Image from "../../../../assets/termofrakt.png";

const Termofrakt = () => {
  const [text, setText] = useState("");
  const originalText = ` An informational website created for
        Engelund Termofrakt AS to showcase their expertise
        within logistics and broaden their informational reach on the web. The
        website is minimalistic yet beautiful in its own way. It was designed using Adobe Xd, and developed using React.js, SCSS, React-Bootstrap &
        Styled-Components.`;
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
      <s.Heading>Engelund Termofrakt AS</s.Heading>
      <s.ImageContainer>
        <s.Image
          src={Image}
          alt="Screenshot of the Engelund Termofrakt AS website"
        />
        <s.IconContainer>
          <s.LinkIcon target="_blank" href="https://termofrakt.no">
            <s.StyledIcon icon={faGlobe} />
          </s.LinkIcon>
        </s.IconContainer>
      </s.ImageContainer>
      <s.IntroParagraph>{text}</s.IntroParagraph>
    </s.ProjectContainer>
  );
};
export default Termofrakt;
