import React, { forwardRef } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import styled from "styled-components";
import { palette } from "../../helpers";

export const StyledListGroup = styled(ListGroup)`
  margin-top: 20px;
`;
export const ListGroupContainer = forwardRef(({ ...props }, ref) => {
  return <StyledListGroup ref={ref} {...props} />;
});

export const StyledListGroupItem = styled(ListGroup.Item)`
  border: 0 !important;
  display: flex;
  flex-direction: space-around !important;
  font-size: 12px;
  margin-bottom: 10px;
  padding: 7px 15px;
  cursor: pointer;
  &:last-child {
    margin-bottom: 0px;
  }
  &.active {
    background-color: ${palette("colors.primary", 0)} !important;
    border-radius: 45px 45px 45px 45px;
  }
`;

export const ListGroupItem = forwardRef(({ ...props }, ref) => {
  return <StyledListGroupItem ref={ref} {...props} />;
});
