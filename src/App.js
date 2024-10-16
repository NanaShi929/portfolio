// import  './App.css'
// import Background from './Background/background';
// import Layout from './Components/Layout/Layout';
import About from "./Components/Pages/About"
// import Resume from "./Components/Pages/Resume"
// import Project from "./Components/Pages/Project"
// import Contact from "./Components/Pages/Contact"
function App() {
    return (
      <>
        <About></About>
        
        {/* <Background></Background> */}
        {/* <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Layout />} />
              <Route path="blogs" element={<Blogs />} />
              <Route path="contact" element={<Contact />} />
              <Route path="*" element={<NoPage />} />
            </Route>
          </Routes>
        </BrowserRouter> */}
      </>
    );
}

export default App;
