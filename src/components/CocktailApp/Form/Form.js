import "./TodoForm.css";
import { useEffect, useRef } from "react";
const Form = props => {
  const search = useRef(null);
  useEffect(() => {
    search.current.focus();
  }, []);
  return (
    <div className="container_form">
      <form
        onSubmit={e => {
          e.preventDefault();
        }}
      >
        <div className="formControl">
          <div className="icon">
            <i className="fas fa-plus"></i>
          </div>
          <input
            type="text"
            ref={search}
            onChange={e => {
              props.setSearch(search.current.value);
            }}
          />
        </div>
      </form>
    </div>
  );
};

export default Form;
