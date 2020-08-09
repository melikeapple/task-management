import React from "react";
import { Aside } from "./Aside/Aside";
import { Content } from "./Content";

export const Layout = ({ children }) => {
  return (
    <div className="d-flex" style={{ height: "100vh" }}>
      <Aside />
      <Content>{children}</Content>
    </div>
  );
};
