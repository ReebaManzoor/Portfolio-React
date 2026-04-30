import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import About from "./Components/About";
import Services from "./Components/Services";
import Blog from "./Components/Blog";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Services />
      <Blog />
      <Projects />
      <Contact />
    </>
  );
}

export default App;