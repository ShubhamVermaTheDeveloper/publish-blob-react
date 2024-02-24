import React from "react";
import Container from "../components/container/Container";
import Postfrom from "../components/post-form/PostForm";
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
