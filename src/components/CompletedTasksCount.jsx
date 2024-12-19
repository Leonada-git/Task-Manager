import React from "react";
import { useSelector } from "react-redux";

const CompletedTasksCount = () => {
  const completedCount = useSelector(
    (state) => state.tasks.filter((t) => t.completed).length
  );
  const total = useSelector((state) => state.tasks.length)
  return(
    <div className="progress" style={{width: total*30}}>
      <div className="progress-bar" role="progressbar"  style={{ width: completedCount*30}}>
        <span class="content">{completedCount}/{total}</span>
      </div>
    </div>)

};

export default CompletedTasksCount;
