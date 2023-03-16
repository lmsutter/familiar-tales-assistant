import Attack from "./Attack";
import Forage from "./Forage";
import Main from "./Main";
import Move from "./Move";

const componentMap = {
  Main: Main,
  Move: Move,
  Attack: Attack,
  Forage: Forage,
};

export type componentMapType = keyof typeof componentMap;

export default componentMap;
