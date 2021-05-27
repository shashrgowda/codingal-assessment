import React, { useState } from "react";

const Modal = ({ modalOpen }) => {
  const [checkedValue, setCheckedValue] = useState("");
  const [endClassReason, setEndClassReason] = useState("");

  const pendingForm = (
    <form className="flex flex-col justify-between ml-4 text-xl">
      <label className="p-2">
        <input
          type="radio"
          value={endClassReason}
          onChange={() => setEndClassReason("absent")}
          checked={endClassReason === "absent"}
        />{" "}
        Student didn't show up for the class
      </label>
      <label className="p-2">
        <input
          type="radio"
          value={endClassReason}
          onChange={() => setEndClassReason("no-interest")}
          checked={endClassReason === "no-interest"}
        />{" "}
        Student didn't show any interest
      </label>
      <label className="p-2">
        <input
          type="radio"
          value={endClassReason}
          onChange={() => setEndClassReason("student")}
          checked={endClassReason === "student"}
        />{" "}
        Student got disconnected
      </label>
      <label className="p-2">
        <input
          type="radio"
          value={endClassReason}
          onChange={() => setEndClassReason("me")}
          checked={endClassReason === "me"}
        />{" "}
        I got disconnected
      </label>
      <label className="p-2">
        <input
          type="radio"
          value={endClassReason}
          onChange={() => setEndClassReason("other")}
          checked={endClassReason === "other"}
        />{" "}
        Other Reason
      </label>
    </form>
  );

  const comments = (
    <form className="flex flex-col justify-between ml-8 p-4">
      <textarea
        width="50px"
        cols="2"
        rows="3"
        style={{ border: "1px solid gray" }}
      ></textarea>
    </form>
  );

  return (
    <div>
      <h1 className="flex font-bold text-center pl-8 text-3xl">
        Select a reason to end class
      </h1>
      <br />
      <form className="flex flex-col justify-between ml-8 text-xl">
        <label className="p-2">
          <input
            type="radio"
            value={checkedValue}
            onChange={() => setCheckedValue("complete")}
            checked={checkedValue === "complete"}
          />{" "}
          Class completed
        </label>
        <label className="p-2">
          <input
            type="radio"
            value={checkedValue}
            onChange={() => setCheckedValue("pending")}
            checked={checkedValue === "pending"}
          />{" "}
          Class interrupted/aborted
        </label>
        {checkedValue === "pending" ? pendingForm : null}
        {endClassReason === "other" ? comments : null}
        <div className="flex flex-row">
          <button
            className="bg-red-500 text-white rounded ml-12"
            style={{ width: "175px", padding: "15px 32px" }}
          >
            End Class
          </button>
          <button
            className="ml-4"
            style={{ width: "175px", padding: "15px 32px" }}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default Modal;
