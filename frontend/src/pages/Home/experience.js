import React, { useState } from "react";
import SectionTitle from "../../components/SectionTitle";
import { useSelector } from "react-redux";

function Experience() {
  const [selectedItemIndex, setSelectedItemIndex] = useState(0);
  const { portfolioData } = useSelector((state) => state.root);
  const { experience } = portfolioData;

  return (
    <div className="my-16">
      <SectionTitle title="Experience" />

      <div className="flex py-16 gap-20 sm:flex-col">
        <div className="flex flex-col gap-10 w-3/5 sm:flex-row sm:overflow-x-scroll sm:w-full">
          {experience.map((experience, index) => (
            <div
              onClick={() => {
                setSelectedItemIndex(index);
              }}
              className="cursor-pointer"
            >
              <h1
                className={`text-l px-4 ${
                  selectedItemIndex === index
                    ? "text-secondary border-secondary border-l-4 py-2 bg-[#1a7f5a31]"
                    : " text-white "
                }`}
              >
                {experience.period}
              </h1>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-10">
          <h1 className="text-secondary text-xl">
            {experience[selectedItemIndex].title}
          </h1>
          <h1 className="text-tertiary text-xl">
            {experience[selectedItemIndex].company}
          </h1>
          <p className="text-white">
            {experience[selectedItemIndex].description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Experience;
