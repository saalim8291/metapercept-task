import React, { useEffect, useState } from "react";
import "./dashboard.css";
import axios from "axios";
import ClassAddForm from "../classAddForm";
import ClassEditForm from "../classEditForm";

const Dashboard = () => {
  useEffect(() => {
    const getClasses = async () => {
      const { data } = await axios.get(
        "http://localhost:3000/class/classes.json"
      );
    //   console.log(data, "data");
      setClasses(data.classes)
    };

    getClasses()
  }, []);

  const [classes, setClasses] = useState([]);
  const [formVisible, setFormVisible] = useState(false)
  const [editFormVisible, setEditFormVisible] = useState(false)
  const [editClassId, setEditClassId] = useState();


  const editHandler = (index) =>  {
    setEditFormVisible(true)
    setEditClassId(index)
  }

  const deleteHandler = (school_id) => {
    const newData = classes.filter((data) => data.school_id !== school_id);
    console.log(newData, "newData");
    setClasses(newData);
  };

  console.log(classes, 'classes')

  return (
    <div className="dashboard-container">
      <h2>Dashboard</h2>
      <button className="add-class-btn" onClick={() => setFormVisible(true)}>
        + Add Class
      </button>
      <table className="clasess-table" border="1">
        <thead>
          <tr>
            <th>school id</th>
            <th>status</th>
            <th>students</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {classes.map((data, index) => (
            <tr key={index}>
              <td>{data.school_id}</td>
              <td>{data.status}</td>
              <td>
                {data?.students?.map((data, index) => (
                  <div key={index}>
                    student_id: <span>{data?.student_id}</span>
                    <br />
                    assignment: <span>{data?.assignment}</span>
                    <br />
                    <br />
                  </div>
                ))}
              </td>
              <td>
                <button onClick={() => editHandler(index)}>Edit</button>
              </td>
              <td>
                <button onClick={() => deleteHandler(data?.school_id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {formVisible && (
        <ClassAddForm
          setFormVisible={setFormVisible}
          classes={classes}
          setClasses={setClasses}
        />
      )}

      {editFormVisible && (
        <ClassEditForm
          setEditFormVisible={setEditFormVisible}
          classes={classes}
          editClassId={editClassId}
          // setClasses={setClasses}
        />
      )}
    </div>
  );
};

export default Dashboard;
