import "./TodoForm.css";

import { useState, useRef, useEffect } from "react";

function SearchForm({ onAdd, todos, setTodos, newTodos, onFilter }) {
  const [text, setText] = useState("");

  const ref = useRef(null);

  let searchText = "";
  let filteredTodos = "";
  useEffect(() => {
    ref.current.addEventListener("keyup", (e) => {
      let id = setTimeout(() => {
        // debugger;
        searchText = e.target.value.toLowerCase();
        console.log("searchText", searchText);
        if (!searchText) {
          filteredTodos = "";
        } else {
          filteredTodos = todos.filter((todo) => {
            return todo.text.toLowerCase().indexOf(searchText) !== -1;
          });
        }
        console.log("filteredTodos", filteredTodos);
        onFilter(filteredTodos);
      }, 1000);

      return () => clearInterval(id);
    });
  }, [text]);

  return (
    <div className="searchTodo">
      <input
        ref={ref}
        type="text"
        className="todoInput"
        placeholder="search text"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
    </div>
  );
}
export default SearchForm;
