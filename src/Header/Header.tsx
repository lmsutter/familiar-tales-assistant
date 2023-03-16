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
    history: componentMapType[];
  }
) => {
  const { history } = props;
  return (
    <Container>
      <Back {...props} history={history} />
      <Home {...props} />
      <History {...props} />
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
