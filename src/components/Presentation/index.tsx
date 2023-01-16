import Buttons from "./Buttons";
import HiGonçalo from "./HiGonçalo";
import Junior from "./Junior";
import LetSkills from "./LetSkills";

export function Presentation() {
  return (
    <section id="presentation" className="flex items-center max-w-fit h-full">
      <div className="flex flex-col items-start ml-28">
        <div className="flex flex-col items-start">
          <HiGonçalo />
          <Junior />
          <LetSkills />
          <Buttons />
        </div>
      </div>
    </section>
  );
}
