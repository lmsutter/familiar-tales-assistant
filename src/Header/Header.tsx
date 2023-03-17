import React from "react";
import styled from "styled-components";
import { ViewPropType } from "../types";
import Back from "./Back";
import History from "./History";
import Home from "./Home";
import { componentMapType } from "../Views/componentMap";

const Header = (
  props: ViewPropType & {
    setHistory: React.Dispatch<React.SetStateAction<componentMapType[]>>;
    appHistory: componentMapType[];
  }
) => {
  const { appHistory } = props;
  return (
    <Container>
      <Back {...props} appHistory={appHistory} />
      <Home {...props} />
      <History {...props} appHistory={appHistory} />
    </Container>
  );
};

const Container = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 1rem;
  height: 80px;
`;

export default Header;
