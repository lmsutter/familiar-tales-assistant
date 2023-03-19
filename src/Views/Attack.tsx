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
          <Tooltip type="meleeExample">melee</Tooltip> weapon equipped. (you can
          only have one weapon at a time equipped).
          <S.Note text="A ranged weapon has a green banner with an arrow icon, Melee weapons have a red banner with a sword icon" />
        </S.ListItem>
        <S.ListItem>
          Melee attacks require the red skill value, Ranged require green.
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
          additional icons or effects is greater than the enemy's resilience
          (shield) value on the map instructions, your attack was successful!
          Reduce the enemy's health by the number on your equipped weapon next
          to the{" "}
          <Tooltip type="meleeExample"> square with a wiggly border</Tooltip>{" "}
          plus any additional weapon effects.
        </S.ListItem>
      </S.OrderedList>
      <S.Note
        title="Is the enemy's health 0?"
        text="1. Remove it's life marker from the track, 2. Remove the figure from the map, and 3. gain any loot indicated on the map info page"
      />
    </Container>
  );
};

const Container = styled.div``;

export default Attack;
