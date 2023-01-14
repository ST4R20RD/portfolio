import { FunctionStyle } from "../FunctionStyle";

export function AboutMe() {
  return (
    <div className="about-me">
      <h1>About me</h1>

      <div className="flex">
        <FunctionStyle label="<img" />
        <img
          src="/images/GonçaloEstrelado.jpeg"
          alt="profile-pic"
          className="max-h-[500px] rounded-lg"
        />
        <FunctionStyle label="/>" classname="mt-auto mb-0" />
      </div>
      <p>
        I'm a software developer with a passion for learning and creating. I'm
        currently working as a full-stack developer at{" "}
        <a href="https://www.linkedin.com/in/goncaloestrelado/">
          Gonçalo Estrelado
        </a>
        . I graduated at Ironhack{" "}
        <a href="https://www.linkedin.com/in/goncaloestrelado/">
          Gonçalo Estrelado
        </a>
      </p>
    </div>
  );
}
