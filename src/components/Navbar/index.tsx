function NavButton({ to, label, color, size }: any) {
  return (
    <a
      href={`#${to}`}
      className={`font-todays text-${size}xl block py-2 ${color}`}
    >
      {label}
    </a>
  );
}

function FunctionStyle({ children }: any) {
  return (
    <span className="text-gray-500 font-consolas italic px-2">{children}</span>
  );
}

export function Navbar() {
  return (
    <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 dark:bg-slate-800">
      <div className="container flex flex-wrap justify-center items-center mx-auto">
        <FunctionStyle>const</FunctionStyle>
        <a href="/">
          <span className="self-center text-5xl font-todays font-semibold whitespace-nowrap dark:text-white">
            GonçaloEstrelado
          </span>
        </a>
        <FunctionStyle>=</FunctionStyle>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <div className="flex items-center">
            <FunctionStyle>{"(("}</FunctionStyle>
            <NavButton label="Projects" color="text-blue-400" size="4" />
            <FunctionStyle>,</FunctionStyle>
            <NavButton label="About Me" color="text-blue-400" size="4" />
            <FunctionStyle>{") => {"}</FunctionStyle>
            <NavButton label="HIRE ME" color="text-purple-400" size="5" />
            <FunctionStyle>{"})"}</FunctionStyle>
          </div>
        </div>
      </div>
    </nav>
  );
}
