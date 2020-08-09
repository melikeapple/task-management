import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThLarge, faFolder } from "@fortawesome/free-solid-svg-icons";
import {
  NavItem,
  NavLink,
  TabContainer,
  TabContent,
  TabNav,
  TabPane,
} from "../../content/Tabs";
import { Brand } from "../Brand";
import { AsideCollapseWrapper, AsideWrapper } from "./styles";
import { Title } from "./Title";
import { ListGroupContainer, ListGroupItem } from "../../content/ListGroup";

export const Aside = () => {
  return (
    <TabContainer id="left-tabs-example" defaultActiveKey="dashboard">
      <div className="d-flex">
        <AsideWrapper>
          <Brand />
          <TabNav variant="pills" className="flex-column">
            <NavItem>
              <NavLink eventKey="dashboard" color="unset">
                <FontAwesomeIcon icon={faThLarge} />
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink eventKey="projects">
                <FontAwesomeIcon icon={faFolder} />
              </NavLink>
            </NavItem>
          </TabNav>
        </AsideWrapper>
        <AsideCollapseWrapper>
          <TabContent>
            <TabPane eventKey="dashboard">
              <Title value="Dashboard" />
              <ListGroupContainer defaultActiveKey="#analytics">
                <ListGroupItem href="#analytics">Project Details</ListGroupItem>
              </ListGroupContainer>
            </TabPane>
            <TabPane eventKey="projects">
              <Title value="Projects" />
              <ListGroupContainer>
                <ListGroupItem href="Link3">Add Project</ListGroupItem>
              </ListGroupContainer>
            </TabPane>
          </TabContent>
        </AsideCollapseWrapper>
      </div>
    </TabContainer>
  );
};
