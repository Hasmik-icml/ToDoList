import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
import TodoFooter from "./TodoFooter";
import SearchForm from "./SearchForm";

function App() {
  const [todos, setTodos] = useState([
    {
      id: Math.random(),
      text: "Learn JS",
      isCompleted: false,
      editable: false,
    },
    {
      id: Math.random(),
      text: "Learn CSS",
      isCompleted: false,
      editable: false,
    },
    {
      id: Math.random(),
      text: "Learn React",
      isCompleted: false,
      editable: false,
    },
  ]);
  const [newTodos, setNewTodos] = useState("");
  console.log("todos", todos)
  console.log("newTodos", newTodos)


  return (
    <div className="App">
      <TodoForm
        onAdd={(text) => {
          setTodos([
            ...todos,
            {
              id: Math.random(),
              text: text,
              isCompleted: false,
              editable: false,
            },
          ]);
        }}
      />
      <SearchForm
        todos={todos}
        onFilter={(filteredTodos) => {
          setNewTodos(filteredTodos);
        }}
      />
      <TodoList
        todos={newTodos ? newTodos : todos}
        setTodos={setTodos}
        onChange={(newTodo) => {
          setTodos(todos.map(todo=>{
            if(todo.id === newTodo.id){
              return newTodo;
            }
            return todo;
          }));
        }}
        onDelete={(todo)=>{
          setTodos(todos.filter(t=> todo.id != t.id));
        }}
      />
      <TodoFooter
        todos={todos}
        onClearCompleted={() => {
          setTodos([...todos].filter((todo) => !todo.isCompleted));
        }}
      />
    </div>
  );
}

export default App;
