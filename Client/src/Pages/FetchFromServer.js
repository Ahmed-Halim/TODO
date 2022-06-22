import React from "react";
import axios from "axios";
import { Button } from "@mui/material";

function FetchFromServer({ setTodoList }) {
  const fetchFromServer = () => {
    axios.get(`../api/todo`).then((res) => setTodoList(res.data));
  };
  return (
    <Button size="large" onClick={fetchFromServer} variant="contained">
      Fetch From Server
    </Button>
  );
}
export default FetchFromServer;
