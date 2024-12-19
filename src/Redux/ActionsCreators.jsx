import * as Action from "./ActionsTypes";
  
  export const addTask = (task) => ({ type: Action.ADD_TASK, payload: task });
  export const toggleTask = (id) => ({ type: Action.TOGGLE_TASK, payload: id });
  export const deleteTask = (id) => ({ type: Action.DELETE_TASK, payload: id });
  export const deleteCompletedTasks = () => ({ type: Action.DELETE_COMPLETED_TASKS });
  export const deleteAllTasks = () => ({ type: Action.DELETE_ALL_TASKS });
  export const updateTask = (id, newTask) => ({type: Action.UPDATE_TASK,payload: { id, newTask },});
  