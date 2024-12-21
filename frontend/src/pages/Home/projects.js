import React, { useState } from "react";
import SectionTitle from "../../components/SectionTitle";
import { projects } from "../../resources/projects";

const Projects = () => {
  const [selectedItemIndex, setSelectedItemIndex] = useState(0);

  return (
    <div className="">
      <SectionTitle title="Projects" />
      <div className="py-10 sm:flex-col">
        <div className="flex flex-row border-t-4 overflow-x-scroll border-[#135e4c82] justify-around sm:flex-row sm:overflow-x-scroll sm:w-full">
          {projects.map((project, index) => (
            <div
              key={project.title}
              onClick={() => {
                setSelectedItemIndex(index);
              }}
              className="cursor-pointer"
            >
              <h1
                className={`text-lg px-24 py-2 ${
                  selectedItemIndex === index
                    ? "text-tertiary border-tertiary border-x-4 bg-[#1a7f5a31]"
                    : " text-white"
                }`}
              >
                {project.title}
              </h1>
            </div>
          ))}
        </div>
        <div className="flex flex-row py-20 justify-center gap-10 sm:justify-center">
          <img
            src={projects[selectedItemIndex].image}
            alt="projekt"
            className="h-full w-4/6 sm:w-full border rounded-xl"
          />
        </div>
        <p className="text-tertiary text-center">
          {projects[selectedItemIndex].description}
        </p>
        <p className="text-tertiary text-center">
          <a href={projects[selectedItemIndex].linkgit}>
            <i className="ri-github-line text-gray-500 text-4xl mr-5"></i>
          </a>
          <a href={projects[selectedItemIndex].link}>
            <i className="ri-global-fill text-gray-500 text-4xl"></i>
          </a>
        </p>
        <h1 className="text-secondary text-center">
          <span className="text-white">Technologies used : </span>
          {projects[selectedItemIndex].technologies.join(", ")}
        </h1>
      </div>
    </div>
  );
};

export default Projects;
