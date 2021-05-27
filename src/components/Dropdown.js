import React from "react";
import { Link } from "react-router-dom";

const Dropdown = ({ isMenuOpen, toggle }) => {
  return (
    <div
      className={
        isMenuOpen
          ? "grid grid-rows-3 text-center items-center bg-red-500 text-white transition-all"
          : "hidden"
      }
      onClick={toggle}
    >
      <Link className="p-4">End Class</Link>
      <Link className="p-4" to="/students">
        Students
      </Link>
    </div>
  );
};

export default Dropdown;
