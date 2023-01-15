import "./App.css";
import {
  Navbar,
  Footer,
  Projects,
  AboutMe,
  Presentation,
  Slide,
} from "./components";

function App() {
  return (
    <div className="bg-dark-blue bg-code-texture2 bg-no-repeat bg-[110%_center] bg-[length:800px] h-screen w-screen pt-8 overflow-x-hidden overflow-y-scroll scrollbar-hide">
      <img
        src="/images/code-numbers.png"
        className="absolute left-0 top-0 h-screen opacity-60"
        alt="code-numbers"
      />
      <Navbar />
      <Slide>
        <Presentation />
      </Slide>
      <Slide>
        <Projects />
      </Slide>
      <Slide>
        <AboutMe />
      </Slide>
      <Footer />
    </div>
  );
}

export default App;
