import React, { useState } from "react";
import SectionTitle from "../../components/SectionTitle";
import { useSelector } from "react-redux";

const Projects = () => {
  const [selectedItemIndex, setSelectedItemIndex] = useState(0);
  const { portfolioData } = useSelector((state) => state.root);
  const { project } = portfolioData;

  return (
    <div className="mt-20">
      <SectionTitle title="Projects" />
      <div className="flex py-10 gap-6 sm:flex-col">
        <div className="flex flex-col gap-6 w-4/12 sm:flex-row sm:overflow-x-scroll sm:w-full">
          {project.map((projects, index) => (
            <div
              onClick={() => {
                setSelectedItemIndex(index);
              }}
              className="cursor-pointer"
            >
              <h1
                className={`text-l px-4 ${
                  selectedItemIndex === index
                    ? "text-tertiary border-tertiary border-l-4 py-2 bg-[#1a7f5a31]"
                    : " text-white "
                }`}
              >
                {projects.title}
              </h1>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center gap-10 sm:justify-center">
          <img
            src={project[selectedItemIndex].image}
            alt="image"
            className="h-60 w-72"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
