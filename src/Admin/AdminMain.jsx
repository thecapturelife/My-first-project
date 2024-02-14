import React from "react";
import SideBar from "./SideBar";

const AdminMain = () => {
  return (
    <div style={{ display: "flex" }}>
      <SideBar />
      <div
        style={{
          flex: 1,
          textAlign: "center",
          padding: "20px",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h1 style={{ fontSize: "2rem" }}>Hey Admin...</h1>
          <br />
          <p style={{ fontSize: "1.5rem", color: "red" }}>Welcome..............................................!</p>
        </div>
      </div>
    </div>
  );
};

export default AdminMain;
