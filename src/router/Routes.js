import loadable from "@loadable/component";

export const LoadableHome = loadable(() =>
  import(/* webpackChunkName: "Home" */ "../pages/Home")
);
