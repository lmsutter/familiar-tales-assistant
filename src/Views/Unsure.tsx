import React from "react";
import styled from "styled-components";
import Button from "../General/Button";
import { ViewPropType } from "../types";
import * as S from "../General/CommonComponents";
import ToolTip from "../General/Tooltip";

const Unsure = (props: ViewPropType) => {
  const { changeView } = props;
  return (
    <Container>
      <S.ViewTitle>Unsure what to do? Here are some ideas!</S.ViewTitle>
      <S.OrderedList>
        <S.ListItem>
          <Button onClick={() => changeView("Care")}>Taking Care</Button> of the
          child is usually a good idea. As an unhappy child can alert enemmies
          and bring other Misfortune. Misfortune does not help a child grow up
          to be healthy and well!
        </S.ListItem>
        <S.ListItem>
          If the child is well, check the mission objective. This can be found
          in the map booklet usually near the right side under An A/B icon in a
          blue circle or in a section titled "victory conditions".
          <p>How can you help accomplish this objective?</p>
        </S.ListItem>
        <S.ListItem>
          <Button onClick={() => changeView("Attack")}>Finishing off</Button>
          weak enemies is helpful because then they can't damage you on their
          turn!
        </S.ListItem>
        <S.ListItem>
          If it doesn't seem like there is anything else to do you can
          <Button onClick={() => changeView("Forage")}>Forage</Button>, check if
          you have <ToolTip type="power">power</ToolTip> to buy new cards, or
          resources to buy new equipment or gear.
        </S.ListItem>
      </S.OrderedList>
    </Container>
  );
};

const Container = styled.div``;

export default Unsure;
