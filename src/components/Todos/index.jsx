import { useState, useEffect } from "react";
import "./Todo.css";
import Item from "./Item";
const apiURL = "http://localhost:3000/api";
const fetcher = (url) => fetch(apiURL + url).then((res) => res.json());

const Todos = () => {
  const [todos, setTodos] = useState([]);
  // const result = await fetcher("/todos");
  useEffect(() => {
    const data = async () => {
      const result = await fetcher("/todos");
      setTodos(result);
    };
    data();
  }, []); //

  return (
    <div>
      <div className="todos-wrapper">
        <h4 className="mb-3"> Todo List </h4>
        <div className="todos maxW">
          <ul className="list-group">
            {todos.map((todo) => {
              return <Item key={todo.id} todo={todo} id={todo.id} />;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Todos;
