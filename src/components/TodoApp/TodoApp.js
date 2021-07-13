import TodoForm from "./InputForm/InputTodo";

import TodoList from "./TodoList/TodoList";
import DispatchTodoContext from "./Hooks/context/DispatchTodoContext";
import StateTodoContext from "./Hooks/context/StateTodoContext";
import { useReducer } from "react";
import Reducer from "./Hooks/Reducer";
import initReduce from "./Hooks/initReduce";
import Layout from "./Layout/Layout";

////Initialisation Todo App

const TodoApp = () => {
  const [state, dispatch] = useReducer(Reducer, initReduce);
  return (
    <StateTodoContext.Provider value={state}>
      <DispatchTodoContext.Provider value={dispatch}>
        <Layout>
          <TodoForm />
          <TodoList />
        </Layout>
      </DispatchTodoContext.Provider>
    </StateTodoContext.Provider>
  );
};

export default TodoApp;
