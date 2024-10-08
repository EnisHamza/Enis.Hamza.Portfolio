import React from "react";

function SectionTitle({ title }) {
  return (
    <div className="flex gap-10 items-center py-10">
      <h1 className="text-2xl text-tertiary font-black">{title}</h1>
      <div className="w-80 h-[1px] bg-tertiary"></div>
    </div>
  );
}

export default SectionTitle;
