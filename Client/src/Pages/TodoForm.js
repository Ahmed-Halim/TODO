import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import { Button, TextField } from "@mui/material";
import { Grid } from "@mui/material";

function TodoForm({ TodoList, setTodoList }) {
  const [inputValue, setInputValue] = useState("");

  const addTask = (task) => {
    let newTask = {
      id: uuid(),
      title: task,
      completed: false,
    };
    newTask.title !== "" && setTodoList((prevList) => [...prevList, newTask]);
  };

  return (
    <>
      <Grid item xs={12}>
        <TextField
          id="outlined-basic"
          label="Create new task"
          variant="outlined"
          type="text"
          fullWidth={true}
          size="medium"
          onChange={(e) => setInputValue(e.target.value)}
          value={inputValue}
          placeholder="What do you want to do .."
        />
      </Grid>

      <Grid item xs={12}>
        <Button
          variant="contained"
          size="large"
          onClick={() => addTask(inputValue)}
        >
          Add Task
        </Button>
      </Grid>
    </>
  );
}
export default TodoForm;
