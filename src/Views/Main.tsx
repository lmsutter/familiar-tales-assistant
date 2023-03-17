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

const Container = styled.section``;

const OptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  margin-top: 3rem;
`;

const Option = styled.button`
  font-size: 2rem;
  padding: 1.5rem 2rem;
  border: 2px solid;
  border-radius: 2rem;
`;

export default Main;
