import React from "react";
import styled from "styled-components";
import Button from "../General/Button";
import { ViewPropType } from "../types";
import * as S from "../General/CommonComponents";
import Tooltip from "../General/Tooltip";

const Attack = (props: ViewPropType) => {
  const { changeView } = props;
  return (
    <Container>
      <S.ViewTitle>Attack</S.ViewTitle>
      <S.GeneralText>
        Attacking involves a skill test to check if you <i>can</i> successfully
        attack, then using your equipped weapon to attack.
      </S.GeneralText>
      <S.OrderedList>
        <S.ListItem>
          Determine if you currently have a{" "}
          <Tooltip type="rangedExample">ranged</Tooltip> or{" "}
          <Tooltip type="meleeExample">melee</Tooltip>
          weapon equipped. (you can only have one weapon at a time equipped).
          <S.Note text="A ranged weapon has a green banner with an arrow icon, Melee weapons have a red banner with a sword icon" />
        </S.ListItem>
        <S.ListItem>
          Determine if you are in range.
          <S.Note
            title="Ranged Weapon range:"
            text="
            If you are using a
          ranged weapon, you are in range with a ranged weapon if you can draw a
          straight line from the semi-opaque circle near the center of your
          location to the semi-opaque circle in your enemy's location without
          crossing any single or double solid lines.
            "
          />
          <S.Note
            title="Melee Weapon Range:"
            text="
              If using a melee weapon you are in range if you are sharing a spot with the enemy
            "
          />
        </S.ListItem>
        <S.ListItem>
          Determine the value needed to pass the skill test. This value is the
          number next to the resilience (shield) Icon on the enemy's info on the
          encounter pages (map).
        </S.ListItem>
        <S.ListItem>
          Lay Down any number of your skill cards to reach or exceed the skill
          test value from the previous step.
        </S.ListItem>
      </S.OrderedList>
    </Container>
  );
};

const Container = styled.div``;

export default Attack;
