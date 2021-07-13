function Reducer(state, action) {
  switch (action.type) {
    case "ADD":
      return {
        ...state,
        todos: [...state.todos, { todo: state.todo, id: state.id }],
        status: "ADD",
        todo: "",
        id: new Date().getTime().toString()
      };
    case "DELETE_ONE":
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.id)
      };
    case "CLEAR_ALL":
      console.log(state);
      return {
        ...state,
        todos: [],
        todo: ""
      };
    case "EDIT":
      const todo = state.todos.find(todo => action.id === todo.id);
      return {
        ...state,
        todo: todo.todo,
        todos: state.todos.filter(todo => todo.id !== action.id),
        id: todo.id,
        status: "EDIT"
      };
    case "CHANGE_ITEM":
      return {
        ...state,
        todo: action.value
      };
    default:
      return state;
  }
}
export default Reducer;
