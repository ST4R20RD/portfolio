import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";

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
        <span className="flex flex-col items-center text-sm font-semibold text-gray-500 space-y-3">
          <div className="space-x-3">
            <a href="#projects">Projects</a>
            <a href="#aboutme">About me</a>
          </div>
          <div className="flex justify-around space-x-3">
            <a
              className="flex flex-col items-center"
              href="https://www.linkedin.com/in/goncalo-estrelado/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin size={30} />
              /goncalo-estrelado
            </a>
            <a
              className="flex flex-col items-center"
              href="https://github.com/ST4R20RD"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub size={30} />
              /ST4R20RD
            </a>
            <a
              className="flex flex-col items-center"
              href="mailto:goncalo.estrelado@hotmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <MdAlternateEmail size={30} />
              goncalo.estrelado@hotmail.com
            </a>
          </div>
        </span>
        <div className="flex m-3 text-sm text-gray-500">
          <p className="px-2">Send me an email:</p>
          <a href="mailto:goncalo.estrelado@hotmail.com" className="px-2 text-cyan-400 font-bold">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
