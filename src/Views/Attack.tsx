import React from "react";
import styled from "styled-components";
import Button from "../General/Button";
import { ViewPropType } from "../types";

const Attack = (props: ViewPropType) => {
  const { changeView } = props;
  return (
    <Container>
      Attack
      <Button onClick={() => changeView("Forage")}>Forage</Button>
    </Container>
  );
};

const Container = styled.div``;

export default Attack;
