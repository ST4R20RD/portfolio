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
    <div className="bg-gray-900 h-screen w-screen pt-8 overflow-x-hidden overflow-y-scroll scrollbar-hide">
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
