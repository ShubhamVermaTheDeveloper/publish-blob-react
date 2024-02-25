import React from "react";
import Postfrom from "../components/post-form/PostForm";
import Container from "../components/container/Container";
function AddPost() {
  return (
    <div className="py-6">
      <Container>
        <Postfrom />
      </Container>
    </div>
  );
}

export default AddPost;
