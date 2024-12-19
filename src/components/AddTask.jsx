import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../Redux/ActionsCreators";
import { FaPlus } from "react-icons/fa";

const AddTask = () => {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (task.trim()) {
      dispatch(addTask(task));
      setTask("");
    }
  };

  return (
    <div className="add">
      <input className="inpt-add"
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="New Task"
      />
      <div className="btn-add">
        <span onClick={handleAdd}><FaPlus style={{ fontSize: '1.5rem' }}/></span>
      </div>
    </div>
  );
};

export default AddTask;
