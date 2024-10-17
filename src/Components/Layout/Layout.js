// import Menu from "./Menu";
// import "./Layout.css";
// function Layout() {
//   return (
//     <>
//       <div className="page">
//         <div className="container">
//           <Menu></Menu>

//           <div className="profileCard"></div>
//           <div className="detailsCard"></div>
//         </div>
//       </div>
//     </>
//   );
// }
// export default Layout;
// Layout.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Menu from './Menu';
import About from '../Pages/About';
import Resume from '../Pages/Resume';
import Project from '../Pages/Project';
import Contact from '../Pages/Contact';
import './Layout.css';

function Layout() {
  return (
    <div className="page">
      <div className="container">
        {/* Menu remains static */}
        <Menu />
        
        {/* This is where the dynamic content will appear */}
        <div className="profileCard"></div>
        
        <div className="detailsCard">
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/project" element={<Project />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default Layout;
