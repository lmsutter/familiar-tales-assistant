import React from "react";
import { componentMapType } from "./Views/componentMap";

export type ViewPropType = {
  setView: React.Dispatch<React.SetStateAction<componentMapType>>;
  changeView: (newView: componentMapType) => void;
};
