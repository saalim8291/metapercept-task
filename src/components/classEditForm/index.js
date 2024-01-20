import React, { useEffect, useState } from "react";
import "./classEditForm.css"

const ClassEditForm = ({
  setFormVisible,
  classes,
  setClasses,
  editClassId,
}) => {
  const [schoolId, setSchoolId] = useState("");
  const [status, setStatus] = useState("");

  useEffect(() => {
    setSchoolId(classes[editClassId]["school_id"]);
    setStatus(classes[editClassId]["status"]);

  }, [editClassId]);

  const editClassHandler = (e) => {
    e.preventDefault();

    const editObj = classes[editClassId];
    const payload = {
      ...editObj,
      school_id: schoolId,
      status: status,
    };

    const newData = [...classes]
    newData[editClassId] = payload
    setClasses(newData);
  };

  return (
    <form className="class-edit-form">
      <button className="close-btn" onClick={() => setFormVisible(false)}>
        X
      </button>
      <h2>Edit Class Form</h2>
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

      <button type="submit" onClick={(e) => editClassHandler(e)}>
        Submit
      </button>
    </form>
  );
};

export default ClassEditForm;
