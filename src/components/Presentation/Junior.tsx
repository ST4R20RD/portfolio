import React from "react";
import { FunctionStyle } from "../FunctionStyle";

export default function Junior() {
  return (
    <div className="my-4">
      <FunctionStyle label="<p>" />
      <span className="text-cyan-700 text-2xl">Junior Web Developer</span>
      <FunctionStyle label="</p>" />
    </div>
  );
}
