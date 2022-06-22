import React, { useEffect, useState } from "react";
const axios = require("axios").default;

const Post = (props) => {
  const [Content, setContent] = useState();

  useEffect(() => {
    props.id &&
      axios.get(`../api/${props.id}`).then((res) => {
        setContent(res.data.message);
      });
  });

  return (
    <div>
      <h1>{Content}</h1>
    </div>
  );
};

export default Post;
