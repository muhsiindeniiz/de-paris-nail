import React from "react";

const Loading = () => {
  return (
    <div
      style={{
        position: "fixed",
        display: "flex",
        width: "100%",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
        background: "rgba(255,255,255,.8)",
        zIndex: 9999
      }}
    >
      <div className="spinner-border" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};

export default Loading;
