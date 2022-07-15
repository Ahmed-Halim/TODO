import React from "react";
import axios from "axios";
import { Button } from "@mui/material";

function FetchFromServer({ setTodoList }) {
  const fetchFromServer = () => {
    axios
      .get(`../api/todo`)
      .then((res) => setTodoList(res.data))
      .catch((error) => {
        setTodoList([
          {
            id: "671876e7-0714-4217-a7ef-2d15f8be1aa9",
            title: "JS ES6 📚",
            completed: false,
          },
          {
            id: "448f412d-243b-464d-94da-d0134c958421",
            title: "React.JS Course ⚛️",
            completed: false,
          },
          {
            id: "c339ffc0-7bba-4297-b886-b38b49892230",
            title: "Redux Course 🔮",
            completed: false,
          },
          {
            id: "60239fbe-225b-4579-ab93-80a3ca1b8d00",
            title: "Git Version Control 🗄",
            completed: false,
          },
          {
            id: "728b9b73-aaab-44bb-ace6-398eed99d3c8",
            title: "Interview Questions 👨🏻‍💻 ",
            completed: false,
          },
          {
            id: "eae5fe2f-ab3f-4997-919d-90f2f1ff1992",
            title: "Apply 🎯",
            completed: false,
          },
        ]);
      });
  };
  return (
    <Button size="large" onClick={fetchFromServer} variant="contained">
      Fetch From Server
    </Button>
  );
}
export default FetchFromServer;
