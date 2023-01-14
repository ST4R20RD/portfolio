function NavButton({ to, label, color, size }: any) {
  return (
    <a href={`#${to}`} className={`font-todays text-${size}xl block py-2 ${color}`}>
      {label}
    </a>
  );
}

function FunctionStyle({ label }: any) {
  return <span className="text-gray-500 font-consolas italic px-2">{label}</span>;
}

export function Navbar() {
  return (
    <nav className="sticky max-w-fit m-auto bg-slate-800 border-gray-200 px-2 py-2.5 rounded-full">
      <div className="flex flex-wrap justify-center items-center">
        <FunctionStyle label="const" />
        <a href="/">
          <span className="self-center text-5xl font-todays font-semibold whitespace-nowrap text-white">
            GonçaloEstrelado
          </span>
        </a>
        <FunctionStyle label="=" />
        <div className="">
          <div className="flex items-center">
            <FunctionStyle label="((" />
            <NavButton label="Projects" color="text-blue-400" size="4" />
            <FunctionStyle label="," />
            <NavButton label="About Me" color="text-blue-400" size="4" />
            <FunctionStyle label=") => {" />
            <NavButton label="HIRE ME" color="text-purple-400" size="5" />
            <FunctionStyle label="})" />
          </div>
        </div>
      </div>
    </nav>
  );
}
