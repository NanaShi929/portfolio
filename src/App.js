// // import  './App.css'
// // import Background from './Background/background';

// // function App() {
// //     return (
// //       <>
        
// //         <Background></Background>
        
// //       </>
// //     );
// // }

// // export default App;
// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Background from "./Background/background";
// import About from "./Components/Pages/About"
// import Resume from "./Components/Pages/Resume"
// import Project from "./Components/Pages/Project"
// import Contact from "./Components/Pages/Contact"

// function App() {
//   return (
//     <>
//       <Router>
//         <Background />
//         <Routes>
//           <Route path="/" element={<About />} />
//           <Route path="/resume" element={<Resume />} />
//           <Route path="/project" element={<Project />} />
//           <Route path="/contact" element={<Contact />} />
//         </Routes>
//       </Router>
//     </>
//   );
// }

// export default App;

// // import About from "./Components/Pages/About"
// // import Resume from "./Components/Pages/Resume"
// // import Project from "./Components/Pages/Project"
// // import Contact from "./Components/Pages/Contact"
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Background from "./Background/background";
// import About from "./Components/Pages/About"
// import Resume from "./Components/Pages/Resume"
// import Project from "./Components/Pages/Project"
// import Contact from "./Components/Pages/Contact"

function App() {
  return (
    <>
     
        <Router>
          {/* <Routes> */}
          <Background />

          {/* <Route path="/" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/project" element={<Project />} />
        <Route path="/contact" element={<Contact />} /> */}
          {/* </Routes> */}
        </Router>
      
    </>
  );
}

export default App;
