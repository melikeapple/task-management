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

export const Aside = () => {
  return (
    <TabContainer id="left-tabs-example" defaultActiveKey="first">
      <div className="d-flex">
        <AsideWrapper>
          <Brand />
          <TabNav variant="pills" className="flex-column">
            <NavItem>
              <NavLink eventKey="first" color="unset">
                <FontAwesomeIcon icon={faThLarge} />
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink eventKey="second">
                <FontAwesomeIcon icon={faFolder} />
              </NavLink>
            </NavItem>
          </TabNav>
        </AsideWrapper>
        <AsideCollapseWrapper>
          <TabContent>
            <TabPane eventKey="first">
              <Title value="Dashboard" />
            </TabPane>
            <TabPane eventKey="second">
              <Title value="Projects" />
            </TabPane>
          </TabContent>
        </AsideCollapseWrapper>
      </div>
    </TabContainer>
  );
};
