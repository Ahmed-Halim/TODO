import React from "react";
import { useParams } from "react-router-dom";
import Post from "./Post";
export default function Posts(props) {
  const params = useParams();
  if (params.id) {
    return <Post id={params.id}>Posts</Post>;
  }

  let ids = [9, 3, 4, 6, 7];
  return ids.map((id) => (
    <Post id={id} key={id}>
      Posts
    </Post>
  ));
}
