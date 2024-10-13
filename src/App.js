// import  './App.css'
import Background from './Background/background';
// import Layout from './Components/Layout/Layout';
function App() {
    return (
      <>
        <Background></Background>
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
