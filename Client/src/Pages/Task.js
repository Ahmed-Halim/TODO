import React, { useState, useEffect } from "react";

function Task(props) {
  const [Task, setTask] = useState(props);

  const handleCompletedChange = () => {
    setTask((PrevTask) => ({ ...PrevTask, completed: !PrevTask.completed }));
  };

  useEffect(() => {
    localStorage.setItem(
      "TodoList",
      JSON.stringify(
        JSON.parse(localStorage.getItem("TodoList")).map((item) =>
          item.id === Task.id ? Task : item
        )
      )
    );
  }, [Task]);

  return (
    <div
      style={{
        textDecoration: Task.completed ? "line-through" : "none",
      }}
    >
      <input
        type="checkbox"
        checked={Task.completed ? "checked" : ""}
        onChange={handleCompletedChange}
      />
      {Task.title}
    </div>
  );
}
export default Task;
