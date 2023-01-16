import { FunctionStyle } from "../FunctionStyle";
import { IoMdSchool } from "react-icons/io";

export function AboutMe() {
  return (
    <section
      id="aboutme"
      className="text-primary-white w-full h-full flex justify-center items-end"
    >
      <div className="flex flex-col items-center bg-primary-gray bg-opacity-30 backdrop-blur-3xl max-w-screen-lg p-10 mb-5 rounded-lg">
        <div className="flex flex-col max-w-[350px] mb-8">
          <FunctionStyle label="<h1" />
          <h1>About me</h1>
          <FunctionStyle label="/>" classname="ml-auto mr-0" />
        </div>
        <div className="flex justify-center">
          <div className="flex min-w-fit mr-10">
            <FunctionStyle label="<img" />
            <img
              src="/images/GonçaloEstrelado.jpeg"
              alt="profile-pic"
              className="max-h-[500px] rounded-lg"
            />
            <FunctionStyle label="/>" classname="mt-auto mb-0" />
          </div>
          <div className="flex flex-col">
            <div className="border border-cyan-400 bg-gray-800 w-96 h-24 rounded-full">
              <div className="h-full p-5 flex justify-around items-center">
                <div className="text-3xl">
                  <span className="inline-block mx-2">
                    <IoMdSchool />
                  </span>
                  <p className="inline-block">Education</p>
                </div>
                <span>
                  400+ hours <br /> Ironhack Bootcamp
                </span>
              </div>
            </div>
            <div className="flex flex-col mt-5">
              <FunctionStyle label="<p" classname="-ml-5" />
              <p className="text-left">
                I am a highly skilled front-end developer with expertise in full stack development
                using the MERN stack (MongoDB, Express, React, NodeJS) and a passion for UX/UI
                design. I have completed a Full Stack Developer Bootcamp with Ironhack, which has
                given me a solid understanding of web development best practices and the ability to
                create dynamic and responsive user interfaces. My proficiency in HTML, CSS, and
                JavaScript allows me to write clean, efficient code that meets the latest web
                standards. I am well-versed in the latest web development technologies and have a
                solid understanding of the entire web development process, from design to
                deployment. I am a team player and have excellent problem-solving and communication
                skills, and I am always eager to learn and stay current with the latest industry
                trends and developments.
              </p>
              <FunctionStyle label="/>" classname="-mt-5 ml-auto mr-0" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
