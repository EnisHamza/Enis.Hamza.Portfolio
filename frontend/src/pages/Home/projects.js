import React, { useState } from "react";
import SectionTitle from "../../components/SectionTitle";
import { projects } from "../../resources/projects";

const Projects = () => {
  const [selectedItemIndex, setSelectedItemIndex] = useState(0);

  return (
    <div className="mt-20">
      <SectionTitle title="Projects" />
      <div className="flex py-16 gap-20 sm:flex-col">
        <div className="flex flex-col gap-10 w-2/5 sm:flex-row sm:overflow-x-scroll sm:w-full">
          {projects.map((project, index) => (
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
                {project.title}
              </h1>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-10 sm:flex-row sm:overflow--x-scroll sm:w-full">
          <h1 className="text-secondary text-xl">
            {projects[selectedItemIndex].title}
          </h1>
          <p className="text-white">
            {projects[selectedItemIndex].description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
