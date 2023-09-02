import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import AboutMe from "./components/AboutMe/AboutMe";
import Skills from "./components/Skills/Skills";
import Qualifications from "./components/Qualifications/Qualifications";
import Works from "./components/Works/Works";
import Hobbies from "./components/Hobbies/Hobbies";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import "./app.css";

function App() {
  return (
    <>
      <Header />
      <div className="app_main">
        <Hero />
        <AboutMe />
        <Skills />
        <Qualifications />
        <Works />
        <Hobbies />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
