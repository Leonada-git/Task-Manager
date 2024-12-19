import React from "react";
import "./App.css"
// import 'bootstrap/dist/css/bootstrap.min.css';
import StoreProvider from "./Redux/Store";
import ListTasks from "./components/ListTasks";
import AddTask from "./components/AddTask";
import CompletedTasksCount from "./components/CompletedTasksCount";
import ManageTasks from "./components/ManageTasks";
import { LuListTodo } from "react-icons/lu";

const App = () => {
  return (
    <StoreProvider>
      <div className="container">
        <h1>Todo List <LuListTodo /></h1>
        <AddTask />
        <ListTasks />
        <CompletedTasksCount />
        <ManageTasks />
      </div>
    </StoreProvider>
  );
};

export default App;
