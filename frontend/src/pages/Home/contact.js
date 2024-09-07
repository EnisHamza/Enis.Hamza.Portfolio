import React from "react";
import SectionTitle from "../../components/SectionTitle";
import example from "../../images/example.png";
import { useSelector } from "react-redux";

const Contact = () => {
  const { portfolioData } = useSelector((state) => state.root);
  const { contact } = portfolioData;

  return (
    <div className="mt-20">
      <SectionTitle title="Meet Me" />
      <div className="flex sm:flex-col">
        <div className="flex flex-col sm:items-center sm:ml-0 mt-10 gap-4 ml-32">
          <h1 className="text-secondary text-xl text-bold">{`{`}</h1>
          {Object.keys(contact).map((key) => (
            <h1 className="ml-8">
              <span className="text-white">{key} : </span>
              <span className="text-tertiary">{contact[key]},</span>
            </h1>
          ))}
          <h1 className="text-secondary text-xl text-bold">{`}`}</h1>
        </div>
        <div className="flex-1 mt-24 ml-28 flex justify-center items-center sm:ml-0 sm-items-center">
          <img src={example} alt="example" className="w-full h-auto max-w-md" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
