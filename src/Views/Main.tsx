import React from "react";
import { ViewPropType } from "../types";

const Main = (props: ViewPropType) => {
  const { changeView } = props;
  return (
    <div>
      Main
      <button onClick={() => changeView("Move")}>Move</button>
    </div>
  );
};

export default Main;
