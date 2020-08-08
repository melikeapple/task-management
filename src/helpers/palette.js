import objectPath from "object-path";

export const palette = (...args) => (props) => {
  const path = objectPath.get(props.theme, args[0]);
  if (typeof path !== "undefined" && !Array.isArray(path)) {
    return path;
  }
  return objectPath.get(props.theme, `${args[0]}.${args[1]}`);
};
