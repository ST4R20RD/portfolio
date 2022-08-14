import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="absolute left-0 bottom-0 right-0 p-4 bg-white rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
      <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
        © 2020 - {new Date().getFullYear()} -{" "}
        <a
          href="
                https://www.linkedin.com/in/goncaloestrelado/
                "
        >
          Gonçalo Estrelado
        </a>
      </span>
      <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
          <Link to="/aboutme" className="mr-3">About me</Link>
        </li>
        <li>
          <Link to="/Contact">HIRE ME</Link>
        </li>
      </ul>
    </footer>
  );
}
