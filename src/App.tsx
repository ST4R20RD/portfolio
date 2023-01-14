import "./App.css";
import { Navbar, Footer, Projects, AboutMe, Presentation } from "./components";

function App() {
  return (
    <div className="bg-gray-900 h-screen w-screen pt-8">
      <Navbar />
      <Presentation />
      <Projects />
      <AboutMe />
      <Footer />
    </div>
  );
}

export default App;
