import { Card } from "../Card";

const PROJECTS: any = [
  {
    image: "/images/24grind-frontPic.png",
    name: "24Grind",
    subTitle: "Every activity's more fun now with friends",
    description:
      "24Grind is a social self-care app that allows users to create, share, and discover self-care activities such as physical, reading, mental lab, and domestic tasks. Users can create an account, log in, create activities, share them with others, rate, and provide feedback. They can also join or create groups, set reminders, track progress, and connect with others. The app has a simple interface, clean design, easy navigation and includes gamification aspects. Note: The app is still in development so not every functionality is currently available in the app.",
    techs: ["ReactJS", "Typescript", "Tailwind", "Axios", "React-router-dom", "Formik"],
    github: "https://github.com/ST4R20RD/24Grind-frontend",
    live: "https://24grind.netlify.app/",
  },
  {
    image: "",
    name: "Nani",
    subTitle: "All of animes in one place",
    description: "",
    techs: [],
  },
];

export function Projects() {
  return (
    <section
      id="projects"
      className="text-primary-white text-center h-full flex justify-center items-center"
    >
      <div>
        <h1>Projects</h1>
        <h3>Here are some of my projects.</h3>
        <div className="flex justify-center">
          {PROJECTS.map((project: any) => {
            return <Card {...project} />;
          })}
        </div>
      </div>
    </section>
  );
}
