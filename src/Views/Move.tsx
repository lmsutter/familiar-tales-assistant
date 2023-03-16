import React from "react";
import styled from "styled-components";
import Button from "../General/Button";
import { ViewPropType } from "../types";

const Move = (props: ViewPropType) => {
  const { changeView } = props;
  return (
    <Container>
      Move
      <Button onClick={() => changeView("Attack")}>Attack</Button>
    </Container>
  );
};

const Container = styled.div``;

export default Move;
