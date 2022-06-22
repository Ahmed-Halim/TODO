//Move Delete Task To Task Compounent
import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import Task from "./Task";

function Home() {
  const [TodoList, setTodoList] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef();

  const fetchFromServer = () => {
    axios.get(`../api/todo`).then((res) => setTodoList(res.data));
  };

  const addTask = () => {
    let newTask = {
      id: Math.max(...TodoList.map((i) => i.id)) + 1,
      title: inputRef.current.value,
      completed: false,
    };
    newTask.title !== "" && setTodoList((prevList) => [...prevList, newTask]);
  };

  const removeTask = (idx) => {
    setTodoList(TodoList.filter((task) => task.id !== idx));
  };

  useEffect(() => {
    setTodoList(JSON.parse(localStorage.getItem("TodoList")));
  }, []);

  useEffect(() => {
    localStorage.setItem("TodoList", JSON.stringify(TodoList));
  }, [TodoList]);

  return (
    <>
      <button onClick={fetchFromServer}>Fetch</button>

      <input
        ref={inputRef}
        onChange={(e) => setInputValue(e.target.value)}
        value={inputValue}
        placeholder="Write new task .."
      />
      <button onClick={addTask}>Add</button>

      {TodoList.map((item) => (
        <div key={item.id}>
          <Task {...item} />
          <button onClick={() => removeTask(item.id)}>Remove</button>
        </div>
      ))}
    </>
  );
}

export default Home;
