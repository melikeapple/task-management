import React, { forwardRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { StyledTitle } from "./styles";

export const Title = forwardRef(({ value, ...props }, ref) => {
  return (
    <div className="d-flex align-items-center" {...props} ref={ref}>
      <div className="pr-2">
        <FontAwesomeIcon icon={faCircle} color="#FFCC01" />
      </div>
      <StyledTitle>{value}</StyledTitle>
    </div>
  );
});
