import React from "react";
import styled from "styled-components";
import Button from "../General/Button";
import { ViewPropType } from "../types";
import * as S from "../General/CommonComponents";
import Tooltip from "../General/Tooltip";

const Care = (props: ViewPropType) => {
  return (
    <Container>
      <S.ViewTitle>Care for the child</S.ViewTitle>
      <S.GeneralText>
        If the child's <Tooltip type="discontent">discontent</Tooltip> is above
        0, refer to the directions on the disontent card to move discontent down
        by 1. You must be in the same space as the child.
      </S.GeneralText>
    </Container>
  );
};

const Container = styled.div``;

export default Care;
