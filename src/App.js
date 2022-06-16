import About from "./components/about/about";
import Main from "./components/main/main";
import Skills from "./components/skills/Skills";
import NavBar from "./components/components/NavBar";
import Project from "./components/projects/Project";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from "./components/contact/Contact";
function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Main />}></Route>
          <Route exact path="/about" element={<About />}></Route>
          <Route exact path="/skills" element={<Skills />}></Route>
          <Route exact path="/projects" element={<Project />}></Route>
          <Route exact path="/contact" element={<Contact />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
