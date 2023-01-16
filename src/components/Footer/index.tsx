export function Footer() {
  return (
    <footer className="ml-14">
      <div className="flex items-center justify-between p-4 bg-primary-gray bg-opacity-30 backdrop-blur-sm">
        <span className="text-sm text-gray-500 sm:text-center">
          © {new Date().getFullYear()} -{" "}
          <a
            href="
          https://www.linkedin.com/in/goncaloestrelado/
          "
          >
            Gonçalo Estrelado
          </a>
        </span>
        <span className="w-1/5 flex justify-around text-sm font-semibold text-gray-500">
          <a href="#projects">Projects</a>
          <a href="#aboutme">About me</a>
        </span>
        <div className="flex m-3 text-sm text-gray-500">
          <p className="px-2">Send me an email:</p>
          <button className="px-2 text-cyan-400 font-bold">Contact</button>
        </div>
      </div>
    </footer>
  );
}
