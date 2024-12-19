import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toggleTask, deleteTask, updateTask } from "../Redux/ActionsCreators";
import { FaPen } from "react-icons/fa";
import { FaRegTrashAlt } from "react-icons/fa";

const Task = (props) => {
  const task = props.task; // Initialize task first
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [newTask, setNewTask] = useState(task.task); // Now this works

  const handleUpdate = () => {
    dispatch(updateTask(task.id, newTask));
    setIsEditing(false);
  };

  return (
    <div className="task">
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => dispatch(toggleTask(task.id))}
      />
      {isEditing ? (
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          onBlur={handleUpdate}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleUpdate();
            if (e.key === "Escape") setIsEditing(false);
          }}
        />
      ) : (
        <span
          className="decoration"
          style={{textDecoration: task.completed ? "line-through" : "none"}}
        >
          {task.task}
        </span>
      )}
      <div className="moddel">
        {!task.completed && (
          <span className="mod" onClick={() => setIsEditing(true)}>
            <FaPen />
          </span>
        )}
        <span className="del" onClick={() => dispatch(deleteTask(task.id))}>
          <FaRegTrashAlt />
        </span>
      </div>
    </div>
  );
};

export default Task;
