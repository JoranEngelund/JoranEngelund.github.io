import * as s from "../styled";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Image from "../../../../assets/holidaze-sc.png";

const Holidaze = () => {
  const [text, setText] = useState("");
  const originalText = `A booking application for customers to explore, book venues. Features fully functional booking system, calendar displays for availability, and venue manager settings for hosts. Guests can register as venue managers, list venues with details, and manage bookings. Venue managers can edit, delete venues, view reservations, and track upcoming trips. Developed with React.js, Styled-components, SCSS and React-Bootstrap`;
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
      <s.Heading>Holidaze</s.Heading>
      <s.ImageContainer>
        <s.Image src={Image} />
        <s.IconContainer>
          <s.LinkIcon target="_blank" href="https://holidazes.netlify.app/">
            <s.StyledIcon icon={faGlobe} />
          </s.LinkIcon>
          <s.LinkIcon
            target="_blank"
            href="https://github.com/JoranEngelund/holidaze_pe2"
          >
            <s.StyledIcon icon={faGithub} />
          </s.LinkIcon>
        </s.IconContainer>
      </s.ImageContainer>
      <s.IntroParagraph>{text}</s.IntroParagraph>
    </s.ProjectContainer>
  );
};
export default Holidaze;
