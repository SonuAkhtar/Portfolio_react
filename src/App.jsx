// Imported components
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import AboutMe from "./components/AboutMe/AboutMe";
import Skills from "./components/Skills/Skills";
import Qualifications from "./components/Qualifications/Qualifications";
import Works from "./components/Works/Works";
import Hobbies from "./components/Hobbies/Hobbies";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

// Imported CSS
import "./app.css";
import Projects from "./components/Projects/Projects";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <AboutMe />
      <Qualifications />
      <Works />
      <Skills />
      <Projects />
      <Hobbies />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
