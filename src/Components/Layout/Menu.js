import * as React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import About from "../Pages/About";
import Resume from "../Pages/Resume";
import Project from "../Pages/Project";
import Contact from "../Pages/Contact";

function Menu() {
  return (
    <>
      <Router>
        <div className="theme"></div>
        <div className="menu">
          <div>
            <Link to={"../About"}>
              <img src="../icons/Person.png" alt="About"></img>
            </Link>
            <span>About</span>
          </div>
          <div>
            <Link to={"../Resume"}>
              <img src="../icons/Resume.png" alt="Resume"></img>
            </Link>
            <span>Resume</span>
          </div>
          <div>
            <Link to={"../Project"}>
              <img src="../icons/Office.png" alt="Office"></img>
            </Link>
            <span>Projects</span>
          </div>
          <div>
            <Link to={"../Contact"}>
              <img src="../icons/Contact.png" alt="Contact"></img>
            </Link>
            <span>Contact</span>
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
