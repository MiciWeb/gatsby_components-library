import React from "react";
import Navbar from "../components/Navbar/Navbar";

const index = () => {
  return (
    <>
      <Navbar />
      <h1 style={{ textAlign: "center" }}>
        Welcome to the <br />
        <span style={{ color: "rgb(102, 51, 153)" }}>
          Gatsby Components Library 📚⚙️ !
        </span>
      </h1>
    </>
  );
};

export default index;
