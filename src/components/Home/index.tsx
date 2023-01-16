import { AboutMe } from "../AboutMe";
import { Footer } from "../Footer";
import { Presentation } from "../Presentation";
import { Projects } from "../Projects";
import { Slide } from "../Slide";

export function Home() {
  return (
    <div className="snap-y snap-mandatory h-screen overflow-x-hidden overflow-y-scroll scrollbar-hide">
      <Slide>
        <Presentation />
      </Slide>
      <Slide>
        <Projects />
      </Slide>
      <Slide>
        <AboutMe />
        <Footer />
      </Slide>
    </div>
  );
}
