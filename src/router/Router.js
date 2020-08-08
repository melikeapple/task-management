import React from "react";
import { Route, Switch } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { history } from "../store/store";
import { LoadableHome } from "./Routes";
import { Layout } from "../partials/layout/Layout";

export const Router = () => {
  return (
    <ConnectedRouter history={history}>
      <Layout>
        <Switch>
          <Route path="/" component={LoadableHome} />
        </Switch>
      </Layout>
    </ConnectedRouter>
  );
};
