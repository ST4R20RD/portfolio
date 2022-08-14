import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
export function Contact() {
  return (
    <div>
      <div className="form-group flex flex-col m-5 p-2.5 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
        <h1>Contact</h1>
        <div className="flex justify-between">
          <a className="flex flex-col items-center" href="https://www.linkedin.com/in/goncalo-estrelado/">
            <FaLinkedin size={30} />
            /goncalo-estrelado
          </a>
          <a className="flex flex-col items-center" href="https://github.com/ST4R20RD">
            <FaGithub size={30} />
            /ST4R20RD
          </a>
          <a className="flex flex-col items-center" href="mailto:goncalo.estrelado@hotmail.com">
            <MdAlternateEmail size={30}/>
            goncalo.estrelado@hotmail.com
          </a>
        </div>
      </div>
    </div>
  );
}
