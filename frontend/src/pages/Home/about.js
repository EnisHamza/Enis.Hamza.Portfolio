import React from "react";
import SectionTitle from "../../components/SectionTitle";
import Sampple from "../../images/Sampple.png";

const About = () => {
  const skills = [
    "Html",
    "Css",
    "Javascript",
    "React",
    "Node",
    "Express",
    "MongoDB",
    "MsSql",
    ".Net",
    "AWS",
  ];

  return (
    <div>
      <SectionTitle title="About Me" />
      <div className="flex sm:flex-col sm:gap-8">
        <div className="w-2/4 my-auto sm:mx-auto sm:w-5/6 sm:h-[auto] sm:mb-8">
          <img
            src={Sampple}
            alt="sample"
            className="w-full h-auto object-cover rounded"
          />
        </div>
        {/* Text Section */}
        <div className="flex items-center flex-col gap-8 my-24 w-1/2 sm:w-full sm:h-auto sm:mt-8">
          <p className="text-white">
            Hello! I’m Enis, a dedicated software developer with a passion for
            creating innovative and efficient solutions. My journey in the tech
            world began with a fascination for how things work live in the
            internet.
          </p>

          <p className="text-white">
            I graduated from University of Business and Technology, where I
            developed a solid foundation in Software Development. I strive to
            write clean, maintainable code while always seeking to learn and
            adapt to new challenges. I value transparency and open
            communication, which I find essential for successful teamwork and
            project outcomes.
          </p>
        </div>
      </div>
      <div className="py-2">
        <h1 className="text-white text-xl mt-10">
          Here are a few technologies I've been working with recently:
        </h1>
        <div className="flex flex-wrap gap-10 mt-5">
          {skills.map((skill, index) => (
            <div key={index} className="border border-tertiary py-3 px-12">
              <h1 className="text-tertiary">{skill}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
