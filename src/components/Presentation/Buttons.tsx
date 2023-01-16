import React from "react";
import { FunctionStyle } from "../FunctionStyle";

export default function Buttons() {
  const onButtonClick = () => {
    fetch("CV-16012023.pdf").then((response) => {
      response.blob().then((blob) => {
        const fileURL = window.URL.createObjectURL(blob);
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "CV-16012023.pdf";
        alink.click();
      });
    });
  };
  return (
    <div className="flex justify-start mt-4 ml-4 space-x-10">
      <div className="flex flex-col">
        <FunctionStyle label="<button>" classname="mr-auto -ml-4" />
        <button
          onClick={onButtonClick}
          className="bg-none text-cyan-400 mx-4 p-4 border border-cyan-400 rounded-lg"
        >
          Download CV
        </button>
        <FunctionStyle label="</button>" classname="ml-auto mr-0" />
      </div>
      <div className="flex flex-col">
        <FunctionStyle label="<button>" classname="mr-auto -ml-4" />
        <a
          href="mailto:goncalo.estrelado@hotmail.com"
          className="bg-cyan-400 text-dark-blue mx-4 p-4 border border-cyan-400 rounded-lg"
        >
          Contact Me
        </a>
        <FunctionStyle label="</button>" classname="ml-auto mr-0" />
      </div>
    </div>
  );
}
