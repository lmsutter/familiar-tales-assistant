import React from "react";
import styled from "styled-components";
import Button from "../General/Button";
import { ViewPropType } from "../types";

const Forage = (props: ViewPropType) => {
  const { changeView } = props;
  return (
    <Container>
      Forage
      <Button onClick={() => changeView("Move")}>Move</Button>
    </Container>
  );
};

const Container = styled.div``;
export default Forage;
