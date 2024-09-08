import React from "react";

const Loader = () => {
  return (
    <div className="h-screen flex items-center justify-center fixed inset-0 bg-primary z-[100]">
      <div className="flex gap-1 text-4xl font-semibold">
        <p className="text-secondary s">SIN</p>
        <p className="text-tertiary text-5xl q">Q</p>
        <p className="text-secondary e">E</p>
      </div>
    </div>
  );
};

export default Loader;
