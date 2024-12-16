import React from "react";
import me from "../../images/me.png";

const Intro = () => {
  return (
    <div className="h-[80vh] bg-primary flex flex-row sm:flex-col items-center justify-between px-3 sm:mb-32">
      {/* Content Section */}
      <div className="flex flex-col items-start gap-8 w-full sm:w-2/3 sm:mt-2">
        <h1 className="text-white">Hi, I am</h1>
        <h1 className="text-7xl sm:text-3xl text-secondary font-semibold">
          Enis Hamza
        </h1>
        <h1 className="text-5xl sm:text-3xl text-tertiary font-semibold">
          Welcome to My Portfolio
        </h1>
        <p className="text-white">
          Freshly graduate of Computer Science and Engineering with passion
          working across the full stack of Software Development.
        </p>
        <div className="flex items-center space-x-12 py-4 sm:mx-auto">
          <a
            href="/EnisHamza.pdf"
            download="EnisHamza_CV.pdf"
            className="border-2 border-tertiary text-tertiary px-10 py-3 rounded inline-block"
          >
            Download CV
          </a>
        </div>
      </div>

      {/* Image Section */}
      <div className="w-2/3 sm:w-3/6">
        <img
          src={me}
          alt="Your description"
          className="w-full h-auto object-cover rounded"
        />
      </div>
    </div>
  );
};

export default Intro;
