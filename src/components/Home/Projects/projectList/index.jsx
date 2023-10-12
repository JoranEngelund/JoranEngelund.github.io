import * as s from "./styled";

const ProjectList = ({
  handleShowBidit,
  handleShowEvolve,
  handleShowHolidaze,
  handleShowTermofrakt,
  handleShowAbout,
  handleShowContact,
}) => {
  return (
    <s.ProjectContainer>
      <s.ProjectList>
        <s.ProjectHeading>Projects</s.ProjectHeading>
        <s.ProjectItems onClick={handleShowTermofrakt}>
          Engelund Termofrakt AS
        </s.ProjectItems>
        <hr />
        <s.ProjectItems onClick={handleShowHolidaze}>Holidaze</s.ProjectItems>
        <hr />
        <s.ProjectItems onClick={handleShowBidit}>BIDIT</s.ProjectItems>
        <hr />
        <s.ProjectItems onClick={handleShowEvolve}>
          Evolve E-Commerce
        </s.ProjectItems>
        <hr />
      </s.ProjectList>
      <s.ProjectList>
        <s.ProjectHeading>General</s.ProjectHeading>
        <s.ProjectItems onClick={handleShowAbout}>About</s.ProjectItems>
        <hr />
        <s.ProjectItems onClick={handleShowContact}>Contact</s.ProjectItems>
        <hr />
      </s.ProjectList>
    </s.ProjectContainer>
  );
};

export default ProjectList;
