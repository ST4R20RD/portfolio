import { FunctionStyle } from "../FunctionStyle";
import { Contact } from "./../Contact/index";

const SKILLS = [
  "NODEJS",
  "REACTJS",
  "HTML",
  "CSS",
  "TYPESCRIPT",
  "NPM",
  "GIT",
  "JSON",
  "FIGMA",
];

export function Presentation() {
  return (
    <div className="flex max-w-fit m-auto mt-5">
      <div className="flex flex-col items-center">
        <div className="flex flex-col max-w-[430px]">
          <FunctionStyle label="<h1" />
          <div className="flex flex-col text-center font-todays text-7xl">
            <span className="text-primary-gray text-lg mx-5">Hi, i'm</span>
            <p className="text-primary-white">Gonçalo</p>
          </div>
          <FunctionStyle label="/>" classname="ml-auto mr-0" />
        </div>
        <div className="my-4">
          <FunctionStyle label="<p" />
          <span className="text-cyan-700 font-todays text-2xl">
            Junior Web Developer
          </span>
          <FunctionStyle label="/>" />
        </div>
        <div className="flex flex-col">
          <div className="flex my-4 items-end">
            <FunctionStyle label="let skills = [" />
            <span className="flex">
              {SKILLS.map((skill, index) => {
                return (
                  <span className="flex items-end">
                    <p className="font-todays text-cyan-400 text-3xl">
                      {skill}
                    </p>
                    {index + 1 !== SKILLS.length && <FunctionStyle label="," />}
                  </span>
                );
              })}
            </span>
            <FunctionStyle label="]" />
          </div>
          <div className="flex justify-center">
            <button className="bg-none text-cyan-400 mx-4 p-4 border border-cyan-400 rounded-lg">
              Download CV
            </button>
            <a
              href="#"
              className="bg-cyan-400 text-dark-blue mx-4 p-4 border border-cyan-400 rounded-lg"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
