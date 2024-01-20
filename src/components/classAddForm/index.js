import React, { useState } from "react";
import "./classAddForm.css"

const ClassAddForm = ({ setFormVisible,classes,  setClasses }) => {
  const [schoolId, setSchoolId] = useState("");
  const [status, setStatus] = useState("");

  const addClassHandler = (e) => {
    e.preventDefault()
    const payload = {
      school_id: schoolId,
      status: status,
    };

    setClasses([
        ...classes,
        payload
    ]);

    setFormVisible(false)
  }

  return (
    <form className="class-add-form">
      <button className="close-btn" onClick={() => setFormVisible(false)}>
        X
      </button>
      <h2>Add Class Form</h2>
      <br />
      <br />
      <lable for="school_id">school id: </lable>
      <input
        type="text"
        value={schoolId}
        onChange={(e) => setSchoolId(e.target.value)}
      />
      <br />

      <lable for="school_id">status: </lable>
      <input
        type="text"
        value={status}
        onChange={(e) => setStatus(e.target.value)}
      />
      <br />
      <br />

      <button type="submit" onClick={(e) => addClassHandler(e)}>Submit</button>
    </form>
  );
};

export default ClassAddForm;
