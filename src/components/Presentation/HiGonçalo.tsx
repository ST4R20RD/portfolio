import React from "react";
import { FunctionStyle } from "../FunctionStyle";

export default function HiGonçalo() {
  return (
    <div className="flex flex-col max-w-[430px]">
      <FunctionStyle label="<h1>" />
      <div className="flex flex-col text-left">
        <span className="text-primary-gray text-lg mx-5">Hi, i'm</span>
        <h1 className="text-primary-white uppercase">Gonçalo</h1>
      </div>
      <FunctionStyle label="</h1>" classname="ml-auto mr-0" />
    </div>
  );
}
