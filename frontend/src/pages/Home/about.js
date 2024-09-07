import React from "react";
import SectionTitle from "../../components/SectionTitle";
import Sampple from "../../images/Sampple.png";
import { useSelector } from "react-redux";

const About = () => {
  const { portfolioData } = useSelector((state) => state.root);
  const { about } = portfolioData;
  const { skills, description1, description2 } = about;

  return (
    <div>
      <SectionTitle title="About Me" />
      <div className="flex sm:flex-col">
        <div className="h-[60vh] w-2/4 sm:w-full">
          <img src={Sampple} alt="sample" />
        </div>
        <div className="flex items-center flex-col gap-8 my-8 w-1/2 sm:w-full">
          <p className="text-white">{description1 || ""}</p>

          <p className="text-white">{description2 || ""}</p>
        </div>
      </div>
      <div className="py-2">
        <h1 className="text-white text-xl">
          Here are a few technologies I've been working with recently:
        </h1>
        <div className="flex flex-wrap gap-10 mt-5">
          {skills.map((skill, index) => (
            <div className="border border-tertiary py-3 px-10">
              <h1 className="text-tertiary">{skill}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
