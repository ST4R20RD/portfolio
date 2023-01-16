import { MdOpenInNew } from "react-icons/md";
import { TbBrandGithub } from "react-icons/tb";

interface CardProps {
  image: string;
  name: string;
  subTitle: string;
  description: string;
  techs: Array<string>;
  github: string;
  live: string;
}

export function Card({ image, name, subTitle, description, techs, github, live }: CardProps) {
  return (
    <div className="bg-[#0C0F16] p-4 m-5 border-t border-cyan-400 flex justify-center w-[800px]">
      <img src={image} alt="projectImg" className="h-[300px]" />
      <div className="text-left px-4">
        <p className="text-3xl">{name}</p>
        <p className="text-xl py-2">{subTitle}</p>
        <p className="max-w-prose py-2">{description}</p>
        <p className="flex justify-between">
          {techs.map((tech) => {
            return <p className="text-zinc-600 pr-2">{tech}</p>;
          })}
        </p>
        <div className="flex justify-end text-3xl my-2">
          <a href={github} target="_blank" rel="noreferrer">
            <TbBrandGithub className="mx-4" />
          </a>
          <a href={live} target="_blank" rel="noreferrer">
            <MdOpenInNew className="mx-4" />
          </a>
        </div>
      </div>
    </div>
  );
}