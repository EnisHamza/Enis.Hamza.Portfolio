import React from "react";

const Header = () => {
  return (
    <div className="p-5 bg-primary flex header">
      <a className="flex flex-row" href="/">
        <p
          className="text-tertiary text-2xl font-semibold font-serif"
          style={{ fontFamily: "Lucida Handwriting" }}
        >
          SIN
        </p>
        <p
          className="text-secondary text-3xl font-black font-serif"
          style={{ fontFamily: "Lucida Handwriting" }}
        >
          Q
        </p>
        <p
          className="text-tertiary text-2xl font-semibold font-serif"
          style={{ fontFamily: "Lucida Handwriting" }}
        >
          E
        </p>
      </a>
    </div>
  );
};

export default Header;
