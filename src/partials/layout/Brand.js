import React, { forwardRef } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngry } from "@fortawesome/free-solid-svg-icons";

export const Brand = forwardRef(({ ...props }, ref) => {
  return (
    <Link
      to="/"
      className="d-block pb-3 text-center"
      style={{ textDecoration: "none", color: "unset" }}
    >
      <FontAwesomeIcon icon={faAngry} size="2x" {...props} />
    </Link>
  );
});
