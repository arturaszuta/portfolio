import React from 'react';
import Textbox from "./components/textbox";
import Navbar from "./components/navbar";
import Stack from "./components/stack";
import ProjectPanel from "./components/projectpanel";
import Project from "./components/project";
import "./App.scss";
import tech from "./localdata/tech"

const  { libraries, languages, dbAndOther } = tech;

function App() {
  return (
    <div className="main_wrapper">
      <div className="main_navBar">
        <Navbar />  
      </div>
      <div className="main_content--wrapper">
        <div className="landing_page">
          <Textbox /> 
        </div>
        <div className="about_page">
        <div className="about_page__content">
          <div className="about_page__content-summary">
            <h1>About me</h1>
            <p>Some text about me which sounds super interesting and exciting, i hope this catches your attention.</p>
          </div>
          <div className="about_page__content-stack">
            <Stack 
              group="languages" icon='devicon-devicon-plain'
              data={languages}
            />
            <Stack 
              group="libraries, frameworks, environments" icon="devicon-react-original"
              data={libraries}
              layout={'2-columns'}
            />
            <Stack 
              group="database, version control, testing" icon="devicon-git-plain"
              data={dbAndOther}
            />
          </div>
        </div>
        </div>
        <div className="projects_page">
          <h1>My Projects</h1>
          <ProjectPanel />
          <div className="projects_container">
            <Project />
            <Project />
            <Project />
            <Project />
            <Project />
            <Project />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
