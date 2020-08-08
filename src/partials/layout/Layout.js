import React from "react";
import { Aside } from "./Aside/Aside";

export const Layout = ({ children }) => {
  return (
    <div className="d-flex" style={{ height: "100vh" }}>
      <Aside />
      <div className="flex-grow-1">{children}</div>
    </div>
  );
};
