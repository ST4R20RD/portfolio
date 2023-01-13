export function Footer() {
  return (
    <footer className="left-0 bottom-0 right-0 p-4 bg-white rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
      <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
        © {new Date().getFullYear()} -{" "}
        <a
          href="
                https://www.linkedin.com/in/goncaloestrelado/
                "
        >
          Gonçalo Estrelado
        </a>
      </span>
      <div className="flex m-3 text-sm text-gray-500">
        <a href="#" className="px-2">
          About me
        </a>
        <a href="#" className="px-2">
          HIRE ME
        </a>
      </div>
    </footer>
  );
}
