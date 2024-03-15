import React from "react";

import MessageLayout from "../layouts/MessageLayout";

const ErrorPage = ({ messageError }) => {
  return (
    <MessageLayout>
      <h2 style={{ fontSize: 52, fontWeight: "bold" }}>Ocurrió un error: </h2>
      <p style={{ fontSize: 24 }}>{messageError}</p>
    </MessageLayout>
  );
};

export default ErrorPage;
