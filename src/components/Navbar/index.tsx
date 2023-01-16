import { FunctionStyle } from "../FunctionStyle";

function NavButton({ to, label, color, size }: any) {
  return (
    <a href={to} className={`${size} block py-2 ${color} font-semibold`}>
      {label}
    </a>
  );
}

export function Navbar() {
  return (
    <nav className="z-10 absolute top-0 w-full">
      <FunctionStyle label="<html>" classname="absolute ml-16 " />
      <div className="bg-primary-gray bg-opacity-30 backdrop-blur-sm border-gray-200 px-8 py-2.5 rounded-b-full m-auto max-w-fit">
        <div className="flex flex-wrap justify-center items-center">
          <FunctionStyle label="const" />
          <a href="/">
            <span className="self-center text-5xl uppercase font-bold whitespace-nowrap text-primary-white">
              <a
                href="
              #presentation"
              >
                Gonçalo_Estrelado
              </a>
            </span>
          </a>
          <FunctionStyle label="=" />
          <div className="">
            <div className="flex items-center">
              <FunctionStyle label="((" />
              <NavButton
                to="#projects"
                label="Projects"
                color="text-secondary-white"
                size="text-4xl"
              />
              <FunctionStyle label="," />
              <NavButton
                to="#aboutme"
                label="About Me"
                color="text-secondary-white"
                size="text-4xl"
              />
              <FunctionStyle label=") => {" />
              <NavButton
                to={"mailto:goncalo.estrelado@hotmail.com"}
                label="HIRE ME"
                color="text-cyan-400"
                size="text-5xl"
              />
              <FunctionStyle label="})" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
