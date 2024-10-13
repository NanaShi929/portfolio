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
        <div>
          <Link to={"../Pages/About.js"}>
            <img src="../icons/Person.png" alt="About"></img>
          </Link>

          <Link to={"../Pages/Resume"}>
            <img src="../icons/Resume.png" alt="Resume"></img>
          </Link>
          <Link to={"../Pages/Project"}>
            <img src="../icons/Office.png" alt="Office"></img>
          </Link>
          <Link to={"../Pages/Contact"}>
            <img src="../icons/Contact.png" alt="Contact"></img>
          </Link>
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
