import * as s from "../Projects/styled";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import {
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  const [text, setText] = useState("");
  const originalText = `Are you interested in hiring me or maybe you want to have an unconditional talk about a new website you want? Feel free to reach out to me.`;
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
      <s.Heading>Contact.</s.Heading>
      <s.ContactIconsContainer>
        <s.LinkIcon target="_blank" href="mailto:joranengelund@hotmail.com">
          <s.StyledIcon icon={faEnvelope} />
        </s.LinkIcon>
        <s.LinkIcon target="_blank" href="https://github.com/JoranEngelund">
          <s.StyledIcon icon={faGithub} />
        </s.LinkIcon>
        <s.LinkIcon
          target="_blank"
          href="https://www.linkedin.com/in/j%C3%B8ran-engelund-937649252/"
        >
          <s.StyledIcon icon={faLinkedin} />
        </s.LinkIcon>
        <s.LinkIcon
          target="_blank"
          href="https://www.facebook.com/joranengelund/"
        >
          <s.StyledIcon icon={faFacebook} />
        </s.LinkIcon>
        <s.LinkIcon
          target="_blank"
          href="https://www.instagram.com/joranengelund/"
        >
          <s.StyledIcon icon={faInstagram} />
        </s.LinkIcon>
        <s.LinkIcon target="_blank" href="/src/assets/CV_Jøran-Engelund.pdf">
          CV
        </s.LinkIcon>
      </s.ContactIconsContainer>
      <s.IntroParagraph>{text}</s.IntroParagraph>
    </s.ProjectContainer>
  );
};
export default Contact;
