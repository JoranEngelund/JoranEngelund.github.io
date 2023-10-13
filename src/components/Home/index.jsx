import About from "./About";
import ProjectList from "./Projects/projectList";
import useShowProjects from "../../hooks/useShowProjects";
import * as s from "./styled";
import Termofrakt from "./Projects/engelundTermo";
import Holidaze from "./Projects/holidaze";
import Bidit from "./Projects/bidit";
import Evolve from "./Projects/evolve";
import Contact from "./Contact";

const Home = () => {
  const {
    handleShowAbout,
    handleShowBidit,
    handleShowEvolve,
    handleShowHolidaze,
    handleShowTermofrakt,
    handleShowContact,
    showAbout,
    showBidit,
    showEvolve,
    showHolidaze,
    showTermofrakt,
    showContact,
  } = useShowProjects();

  return (
    <s.MainContainer>
      <s.ContentContainer>
        <s.IntroContainer>
          {showAbout && <About />}
          {showTermofrakt && <Termofrakt />}
          {showHolidaze && <Holidaze />}
          {showBidit && <Bidit />}
          {showEvolve && <Evolve />}
          {showContact && <Contact />}
        </s.IntroContainer>
        <s.Line />
        <ProjectList
          handleShowBidit={handleShowBidit}
          handleShowEvolve={handleShowEvolve}
          handleShowHolidaze={handleShowHolidaze}
          handleShowTermofrakt={handleShowTermofrakt}
          handleShowAbout={handleShowAbout}
          handleShowContact={handleShowContact}
        />
      </s.ContentContainer>
    </s.MainContainer>
  );
};
export default Home;
