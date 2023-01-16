import { FunctionStyle } from "../FunctionStyle";
const SKILLS = ["NODEJS", "REACTJS", "HTML", "CSS", "TYPESCRIPT", "NPM", "GIT", "JSON", "FIGMA"];

export default function LetSkills() {
  return (
    <div className="flex my-4 items-center">
      <FunctionStyle label="let skills = [" />
      <span className="flex">
        {SKILLS.map((skill, index) => {
          return (
            <span key={index} className="flex items-end">
              <p className="text-cyan-400 text-3xl">{skill}</p>
              {index + 1 !== SKILLS.length && <FunctionStyle label="," />}
            </span>
          );
        })}
      </span>
      <FunctionStyle label="]" />
    </div>
  );
}
