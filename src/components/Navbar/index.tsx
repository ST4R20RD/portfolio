import { FunctionStyle } from "../FunctionStyle";

function NavButton({ to, label, color, size }: any) {
  return (
    <a href={`#${to}`} className={`${size} block py-2 ${color}`}>
      {label}
    </a>
  );
}

export function Navbar() {
  return (
    <nav className="sticky top-0 max-w-fit m-auto bg-secondary-white bg-opacity-5 border-gray-200 px-2 py-2.5 rounded-full">
      <div className="flex flex-wrap justify-center items-center">
        <FunctionStyle label="const" />
        <a href="/">
          <span className="self-center text-5xl uppercase font-semibold whitespace-nowrap text-primary-white">
            Gonçalo_Estrelado
          </span>
        </a>
        <FunctionStyle label="=" />
        <div className="">
          <div className="flex items-center">
            <FunctionStyle label="((" />
            <NavButton
              label="Projects"
              color="text-secondary-white"
              size="text-4xl"
            />
            <FunctionStyle label="," />
            <NavButton
              label="About Me"
              color="text-secondary-white"
              size="text-4xl"
            />
            <FunctionStyle label=") => {" />
            <NavButton label="HIRE ME" color="text-cyan-400" size="text-5xl" />
            <FunctionStyle label="})" />
          </div>
        </div>
      </div>
    </nav>
  );
}
