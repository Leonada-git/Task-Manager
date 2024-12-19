import { createStore } from "redux";
import { Provider } from "react-redux";
import reducerTodo from "./ReducerTodo";

const store = createStore(reducerTodo);

const StoreProvider = ({ children }) => (
  <Provider store={store}>{children}</Provider>
);

export default StoreProvider;
