import "./TodoForm.css";
import { useContext } from "react";
import DispatchTodoContext from "../Hooks/context/DispatchTodoContext";
import StateTodoContext from "../Hooks/context/StateTodoContext";
const InputTodo = () => {
  const disptach = useContext(DispatchTodoContext);
  const state = useContext(StateTodoContext);
  const Handel_Submit = e => {
    e.preventDefault();
    if (state.todo.length > 6) {
      disptach({ type: "ADD" });
    }
  };
  return (
    <div className="container_form">
      <form onSubmit={Handel_Submit}>
        <div className="formControl">
          <div className="icon">
            <i className="fas fa-plus"></i>
          </div>
          <input
            type="text"
            value={state.todo}
            onChange={e => {
              disptach({ type: "CHANGE_ITEM", value: e.target.value });
            }}
          />
        </div>
        <div className="btn-c">
          <button
            className="btn"
            type="submit"
            disabled={state.todo.length < 6 && true}
          >
            Add ToDo
            <i className="fas fa-plus"></i>
          </button>
        </div>
      </form>
    </div>
  );
};

export default InputTodo;
