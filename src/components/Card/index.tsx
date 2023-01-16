import { useState } from "react";
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
  const [showMoreDesc, setShowMoreDesc] = useState<boolean>(false);
  return (
    <div className="bg-[#0C0F16] p-4 m-5 border-t border-cyan-400 flex items-center justify-center w-[800px] max-h-[345px]">
      <img
        src={image}
        alt="projectImg"
        className="h-[300px] max-w-[200px] object-cover w-fit mb-3 rounded-lg"
      />
      <div className="text-left px-4">
        <p className="text-3xl">{name}</p>
        <p className="text-xl py-2">{subTitle}</p>
        <p className="max-h-[150px] overflow-y-auto py-2">
          {description.length > 250 ? (
            <div className="flex flex-col">
              {!showMoreDesc ? description.slice(0, 249) + "..." : description}
            </div>
          ) : (
            description
          )}
        </p>
        <button
          className="m-auto w-full px-2 text-cyan-400"
          onClick={() => setShowMoreDesc(!showMoreDesc)}
        >
          {!showMoreDesc ? "more" : "less"}
        </button>
        <p className="flex justify-around flex-wrap">
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
