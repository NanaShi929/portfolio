import * as React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import styled from "styled-components";
import About from "../Pages/About";
import Resume from "../Pages/Resume";
import Project from "../Pages/Project";
import Contact from "../Pages/Contact";

function Menu() {
  const StyledLink = styled(Link)`
    text-decoration: none;
    color: hsl(0deg 0% 74.9%);
    &:focus,
    &:hover,
    &:visited,
    &:link,
    &:active {
      text-decoration: none;
    }
  `;

  return (
    <>
      <Router>
        <div className="nav">
          <div className="theme">
            <img src="../icons/Moon.png" alt="About"></img>
          </div>
          <div className="menu">
            <StyledLink to={"../About"}>
              <div>
                <img src="../icons/Person.png" alt="About"></img>
                <span>About</span>
              </div>
            </StyledLink>
            <StyledLink to={"../Resume"}>
              <div>
                <img src="../icons/Resume.png" alt="Resume"></img>
                <span>Resume</span>
              </div>
            </StyledLink>
            <StyledLink to={"../Project"}>
              <div>
                <img src="../icons/Office.png" alt="Office"></img>
                <span>Projects</span>
              </div>
            </StyledLink>
            <StyledLink to={"../Contact"}>
              <div>
                <img src="../icons/Contact.png" alt="Contact"></img>
                <span>Contact</span>
              </div>
            </StyledLink>
          </div>
        </div>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/project" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
}
export default Menu;
