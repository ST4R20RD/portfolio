import "./App.css";
import { Navbar } from "./components";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { Home } from "./components/Home";

function App() {
  return (
    <div className="bg-dark-blue bg-code-texture2 bg-no-repeat bg-[110%_center] bg-[length:800px] h-screen w-screen ">
      <img
        src="/images/code-numbers.png"
        className="z-10 absolute left-0 top-0 h-screen"
        alt="code-numbers"
      />
      <div className="absolute right-0 top-0 text-white flex space-x-5 m-10">
        <a href="https://www.linkedin.com/in/goncalo-estrelado/" target="_blank" rel="noreferrer">
          <FaLinkedin size={30} />
        </a>
        <a href="https://github.com/ST4R20RD" target="_blank" rel="noreferrer">
          <FaGithub size={30} />
        </a>
      </div>
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
