import React from "react";

import MessageLayout from "../layouts/MessageLayout";

const LoadingPage = () => {
  return (
    <MessageLayout>
      <p style={{ fontSize: 32, fontWeight: "bold" }}>Cargando...</p>
    </MessageLayout>
  );
};

export default LoadingPage;
