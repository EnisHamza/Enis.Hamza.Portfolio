import React from "react";
import SectionTitle from "../../components/SectionTitle";
import example from "../../images/example.png";

const Contact = () => {
  const user = {
    name: "Enis Hamza",
    age: 22,
    gender: "Male",
    email: "Eniss.hamza@gmail.com",
    mobile: "+383 (49)-607-665",
    country: "Kosova",
  };

  return (
    <div className="mt-20">
      <SectionTitle title="Meet Me" />
      <div className="flex flex-row items-center mx-4 px-4 sm:items-center sm:flex-col">
        {/* User Info Section */}
        <div className="flex flex-col items-center lg:text-center lg:w-full h-auto gap-4 sm:items-center sm:ml-0 mt-10">
          <h1 className="text-secondary text-xl font-bold">{`{`}</h1>
          {Object.keys(user).map(
            (key) =>
              key !== "_id" && (
                <h1 key={key} className="ml-8">
                  <span className="text-white">{key} : </span>
                  <span className="text-tertiary">{user[key]},</span>
                </h1>
              )
          )}
          <h1 className="text-secondary text-xl font-bold">{`}`}</h1>
        </div>

        {/* Image Section */}
        <div className=" mt-10 ml-28 flex justify-center items-center w-full sm:ml-0 sm:items-center">
          <img
            src={example}
            alt="example"
            className="w-full h-auto max-w-md object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
