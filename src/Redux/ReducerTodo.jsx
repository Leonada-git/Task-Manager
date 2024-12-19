const initial_state = {
    lastid: 5,
    tasks: [
      { id: 1, task: "Réaliser le TP React", completed: true },
      { id: 2, task: "Préparer la présentation finale du React", completed: false },
      { id: 3, task: "Réaliser Figma Projet de synthèse", completed: false },
      { id: 4, task: "Préparer le CC1 React", completed: true },
      { id: 5, task: "Réaliser de la conception du Projet de synthèse", completed: false },
    ],
  };
  
  const reducerTodo = (state = initial_state, action) => {
    switch (action.type) {
      case "ADD_TASK":
        return {
          ...state,
          lastid: state.lastid + 1,
          tasks: [
            ...state.tasks,
            { id: state.lastid + 1, task: action.payload, completed: false },
          ],
        };
      case "TOGGLE_TASK":
        return {
          ...state,
          tasks: state.tasks.map((t) =>
            t.id === action.payload ? { ...t, completed: !t.completed } : t
          ),
        };
      case "UPDATE_TASK":
        return {
          ...state,
          tasks: state.tasks.map((t) =>
            t.id === action.payload.id
              ? { ...t, task: action.payload.newTask }
              : t
          ),
        };
      case "DELETE_TASK":
        return {
          ...state,
          tasks: state.tasks.filter((t) => t.id !== action.payload),
        };
      case "DELETE_COMPLETED_TASKS":
        return { ...state, tasks: state.tasks.filter((t) => !t.completed) };
      case "DELETE_ALL_TASKS":
        return { ...state, tasks: [] };
      default:
        return state;
    }
  };
  
  export default reducerTodo;
  