import "./TodoItem.css";
import { useContext } from "react";
import DispatchTodoContext from "../Hooks/context/DispatchTodoContext";

const TodoItem = props => {
  const disptach = useContext(DispatchTodoContext);
  const { todo, id, index } = props;

  return (
    <div className="ItemContainer">
      <div className="info">
        <h3>{todo}</h3>
      </div>
      <div className="controls">
        <button
          className="icon btn edit item"
          onClick={() => {
            disptach({ type: "EDIT", id });
          }}
        >
          <i className="fas fa-pencil-alt"></i>
        </button>
        <button
          className="icon btn delete item"
          onClick={() => {
            disptach({ type: "DELETE_ONE", id });
          }}
        >
          <i className="fas fa-trash-alt"></i>
        </button>
      </div>
      <span className="Number">{index + 1}</span>
    </div>
  );
};

export default TodoItem;
