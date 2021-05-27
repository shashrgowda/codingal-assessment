import React, { useState } from "react";
import ReactModal from "react-modal";
import { Link } from "react-router-dom";
import Modal from "./Modal";

const Navbar = ({ toggle }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleClick = () => {
    setModalOpen((prev) => {
      return !prev;
    });
  };

  return (
    <div>
      <nav
        className="flex justify-between items-center h-16 bg-white text-black relative shadow-sm font-sans"
        role="navigation"
      >
        <Link to="/" className="pl-8">
          <img
            className="float-left"
            src="/images/logo.jpeg"
            alt="Logo"
            width="50px"
          />
          <div
            className="flex flex-row items-center"
            style={{ padding: "10px 20px" }}
          >
            <p>Codingal</p>
          </div>
        </Link>

        <div className="px-4 cursor-pointer md:hidden" onClick={toggle}>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </div>
        {/* <div id="timer">10:00</div> */}
        <div className="pr-8 md:block hidden">
          <Link
            className="py-4 px-6 bg-red-500 text-white rounded"
            onClick={handleClick}
          >
            End Class
          </Link>
          <Link className="p-4" to="/students">
            Students
          </Link>
          {modalOpen ? (
            <ReactModal
              isOpen={modalOpen}
              onRequestClose={() => setModalOpen(false)}
            >
              <Modal modalOpen={modalOpen} />
            </ReactModal>
          ) : null}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
