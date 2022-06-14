import About from "./components/about/about";
import Main from "./components/main/main";
import Navbar from "./components/navbar.js/navbar";
import Skills from "./components/skills/Skills";
import { scroller } from "react-scroll";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
function App() {
  const scrollToHome = () => {
    scroller.scrollTo("home", {
      duration: 1000,
      smooth: true,
    });
  };
  const scrollToAbout = () => {
    scroller.scrollTo("about", {
      duration: 1000,
      smooth: true,
    });
  };
  const scrollToSkills = () => {
    scroller.scrollTo("skills", {
      duration: 1000,
      smooth: true,
    });
  };
  const scrollToProjects = () => {
    scroller.scrollTo("projects", {
      duration: 1000,
      smooth: true,
    });
  };
  return (
    <>
      <Skills />
    </>
  );
}

export default App;
