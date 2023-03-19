import React from "react";
import styled from "styled-components";
import Button from "../General/Button";
import { ViewPropType } from "../types";
import * as S from "../General/CommonComponents";
import Tooltip from "../General/Tooltip";

const Move = (props: ViewPropType) => {
  const { changeView } = props;
  return (
    <Container>
      <S.ViewTitle>Moving</S.ViewTitle>
      <S.GeneralText>
        Moving allows you to get within range of enemies to{" "}
        <Button onClick={() => changeView("Attack")}>attack</Button> or reach
        objectives. It requires you to play and discard cards but is NOT a{" "}
        <Tooltip type="skillTest">skill test</Tooltip>. To move:
      </S.GeneralText>
      <S.OrderedList>
        <S.ListItem>
          Determine how many movement points are required. Every dashed line you
          wish to cross costs one movement point. Characters cannot cross solid
          lines.
        </S.ListItem>
        <S.ListItem>
          Play cards whose movement points{" "}
          <Tooltip type="movementExample">(see here)</Tooltip> values total at
          least the number of required movement points. Note that some game
          circumstances limit movement. (e.g. when you are carrying the child
          each movement point on a card is worth only 1)
        </S.ListItem>
        <S.ListItem>Move your familiar to the desired location</S.ListItem>
      </S.OrderedList>
      <S.Note text="Certain character abilities (found on the large character cards) can affect movement. Also, since you don't get any benefits from a skill test, try and save your good cards (cards with high skill values or icon effects) for another time" />
    </Container>
  );
};

const Container = styled.div``;

export default Move;
