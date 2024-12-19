import React from "react";
import { useSelector } from "react-redux";
import Task from "./Task";

const ListTasks = () => {
  const tasks = useSelector((state) => state.tasks);
  return (
    <div>
      {tasks.map((t) => (
        <Task key={t.id} task={t} />
      ))}
    </div>
  );
};

export default ListTasks;
