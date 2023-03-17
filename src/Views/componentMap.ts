import Attack from "./Attack";
import Care from "./Care";
import Forage from "./Forage";
import Main from "./Main";
import Move from "./Move";
import Other from "./Other";
import Unsure from "./Unsure";

const componentMap = {
  Main: Main,
  Move: Move,
  Attack: Attack,
  Forage: Forage,
  Care: Care,
  Unsure: Unsure,
  Other: Other,
};

export type componentMapType = keyof typeof componentMap;

export default componentMap;
