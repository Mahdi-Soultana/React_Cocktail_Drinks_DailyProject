import TodoItem from "../TodoItem/TodoItem";
import "../InputForm/InputTodo.js";
import { useContext } from "react";
import StateTodoContext from "../Hooks/context/StateTodoContext";
import DispatchTodoContext from "../Hooks/context/DispatchTodoContext";
const TodoList = () => {
  const state = useContext(StateTodoContext);
  const disptach = useContext(DispatchTodoContext);
  return (
    <div>
      {state.todos.map((todo, i) => {
        return <TodoItem {...todo} index={i} key={todo.id} />;
      })}

      <div
        className="btn-c"
        onClick={() => {
          disptach({ type: "CLEAR_ALL" });
        }}
      >
        <button className="btn btn-w100">Clear All</button>
      </div>
    </div>
  );
};

export default TodoList;
