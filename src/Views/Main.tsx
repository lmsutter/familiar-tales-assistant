import React from "react";
import styled from "styled-components";
import { ViewPropType } from "../types";
import * as S from "../General/CommonComponents";

const Main = (props: ViewPropType) => {
  const { changeView } = props;
  return (
    <Container>
      <S.ViewTitle>
        Familiar Tales Assistant
        <br />
        What do you want to do?
      </S.ViewTitle>
      <OptionContainer>
        <Option onClick={() => changeView("Move")}>Move</Option>
        <Option onClick={() => changeView("Care")}>Care for Child</Option>
        <Option onClick={() => changeView("Attack")}>Attack</Option>
        <Option onClick={() => changeView("Forage")}>Forage</Option>
        <Option onClick={() => changeView("Unsure")}>I do not know</Option>
        <Option onClick={() => changeView("Other")}>Other</Option>
      </OptionContainer>
    </Container>
  );
};

const Container = styled.section`
  display: grid;
  grid-template-rows: auto 1fr;
  overflow-y: auto;
  padding-right: 5px;
`;

const OptionContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  padding: 2rem 0;
  gap: 1rem;
`;

const Option = styled.button`
  font-size: 2rem;
  border: 2px solid;
  border-radius: 2rem;
  padding: 1rem 0;
`;

export default Main;
