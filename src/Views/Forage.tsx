import React from "react";
import styled from "styled-components";
import Button from "../General/Button";
import { ViewPropType } from "../types";
import * as S from "../General/CommonComponents";
import Tooltip from "../General/Tooltip";

const Forage = (props: ViewPropType) => {
  const { changeView } = props;
  return (
    <Container>
      <S.ViewTitle>Forage</S.ViewTitle>
      <S.OrderedList>
        <S.ListItem>
          To perform a forage action you must be on a location with an uncovered{" "}
          <Tooltip type="forageIcon">forage icon.</Tooltip>
        </S.ListItem>
        <S.ListItem>
          Make an insight (yellow eye looking skill icon) test with a required
          value indicated on the map booklet.
        </S.ListItem>
        <S.ListItem>
          Lay down any number of your skill cards to reach or exceed the skill
          test value from the previous step, activating any{" "}
          <Tooltip type="iconEffects">card effects.</Tooltip> or noting any{" "}
          <Tooltip type="itemPowersEffects">Item Powers Effects</Tooltip>
          <S.Note text="additionally, you can ask for help if your teammamte has any cards with a link icon in the upper left" />
        </S.ListItem>
        <S.ListItem>
          Roll the purple chance die and resolve the result.
          <S.Note
            title="Resolving the chance die"
            text="if the result is a number, subtract or add from your accumulated card value as indicated. If it is a danger (skull) symbol increaes danger by 1. If it is a lightning bolt, gain one power on your character wheel"
          />
        </S.ListItem>
        <S.ListItem>
          If the total value of the cards you and your teammates played, the
          dice value, any value added from equipped item cards, and any
          additional icons or effects is greater than the value from step one
          Reduce the enemy's health by the number on your equipped weapon next
        </S.ListItem>
        <S.ListItem>
          Cover the resource you foraged with a red cancel token.
        </S.ListItem>
      </S.OrderedList>
    </Container>
  );
};

const Container = styled.div``;
export default Forage;
