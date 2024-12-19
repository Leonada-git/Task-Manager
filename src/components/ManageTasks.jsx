import React from "react";
import { useDispatch } from "react-redux";
import {
  deleteAllTasks,
  deleteCompletedTasks,
} from "../Redux/ActionsCreators";

const ManageTasks = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <button className="dlt-all" onClick={() => dispatch(deleteAllTasks())}>Delete All</button>
      <button className="dlt-comp" onClick={() => dispatch(deleteCompletedTasks())}>
        Delete Completed
      </button>
    </div>
  );
};

export default ManageTasks;
