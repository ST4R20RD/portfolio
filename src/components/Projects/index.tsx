import { Card } from "../Card";
import { PROJECTS } from "./data";
import "../../App.css";

export function Projects() {
  return (
    <section
      id="projects"
      className="text-primary-white text-center h-full flex justify-center items-center"
    >
      <div>
        <h1>Projects</h1>
        <h3>Here are some of my projects.</h3>
        <div className="flex justify-center flex-wrap max-h-[70vh] overflow-y-scroll overflow-x-hidden scrollbar-hide">
          {PROJECTS.map((project: any) => {
            return <Card {...project} />;
          })}
        </div>
      </div>
    </section>
  );
}
