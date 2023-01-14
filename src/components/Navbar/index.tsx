import { FunctionStyle } from "../FunctionStyle";

function NavButton({ to, label, color, size }: any) {
  return (
    <a href={`#${to}`} className={`font-todays ${size} block py-2 ${color}`}>
      {label}
    </a>
  );
}

export function Navbar() {
  return (
    <nav className="sticky top-0 max-w-fit m-auto bg-slate-800 border-gray-200 px-2 py-2.5 rounded-full">
      <div className="flex flex-wrap justify-center items-center">
        <FunctionStyle label="const" />
        <a href="/">
          <span className="self-center text-5xl font-todays font-semibold whitespace-nowrap text-amber-100">
            GonçaloEstrelado
          </span>
        </a>
        <FunctionStyle label="=" />
        <div className="">
          <div className="flex items-center">
            <FunctionStyle label="((" />
            <NavButton label="Projects" color="text-blue-400" size="text-4xl" />
            <FunctionStyle label="," />
            <NavButton label="About Me" color="text-blue-400" size="text-4xl" />
            <FunctionStyle label=") => {" />
            <NavButton
              label="HIRE ME"
              color="text-purple-400"
              size="text-5xl"
            />
            <FunctionStyle label="})" />
          </div>
        </div>
      </div>
    </nav>
  );
}
