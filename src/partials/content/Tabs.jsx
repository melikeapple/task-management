import React, { createContext, forwardRef, useContext } from "react";
import { Tab, Nav } from "react-bootstrap";
import styled from "styled-components";
import { palette } from "../../helpers";

export const TabContext = createContext(null);
export const useTabContext = () => {
  const context = useContext(TabContext);

  if (!context) {
    throw new Error(
      "Tab compound components cannot be rendered outside the Tab component"
    );
  }
  return context;
};

export const TabContainer = forwardRef(({ border, ...props }, ref) => {
  return (
    <TabContext.Provider value={{ border }}>
      <Tab.Container ref={ref} {...props} />
    </TabContext.Provider>
  );
});

export const TabContent = forwardRef(({ ...props }, ref) => {
  return <Tab.Content ref={ref} {...props} />;
});

export const TabPane = forwardRef(({ ...props }, ref) => {
  return <Tab.Pane ref={ref} {...props} />;
});

export const TabNav = forwardRef(({ ...props }, ref) => {
  return <Nav ref={ref} {...props} />;
});

const StyledNavItem = styled(Nav.Item)``;
export const NavItem = forwardRef(({ ...props }, ref) => {
  return <Nav.Item ref={ref} {...props} />;
});

const StyledNavLink = styled(Nav.Link)`
  position: relative;
  color: ${palette("colors.primary", 1)};
  border: 0 !important;
  text-decoration: none;
  border-radius: 0 !important;
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 4px;
    height: 100%;
    background-color: transparent;
    border-radius: 3px;
  }
  &.active {
    color: ${palette("colors.primary", 0)} !important;
    background-color: transparent !important;
    &:before {
      background-color: ${palette("colors.primary", 0)};
    }
  }
  &:hover {
    color: unset;
  }
  &:focus {
    outline-style: none;
  }
`;
export const NavLink = forwardRef(({ ...props }, ref) => {
  return <StyledNavLink ref={ref} {...props} />;
});
