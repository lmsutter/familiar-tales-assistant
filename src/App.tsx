import { useCallback, useState } from "react";
import styled from "styled-components";
import Header from "./Header/Header";
import componentMap from "./Views/componentMap";
import { componentMapType } from "./Views/componentMap";

function App() {
  const [view, setView] = useState<componentMapType>("Main");
  const [appHistory, setHistory] = useState<componentMapType[]>([]);

  const changeView = useCallback(
    (newView: componentMapType) => {
      setView(newView);
      setHistory((p) => {
        const temp = [...p];
        temp.unshift(newView);
        return temp;
      });
    },
    [view, history]
  );

  const Component = componentMap[view];

  return (
    <Container>
      <HeaderContainer>
        <Header
          setHistory={setHistory}
          changeView={changeView}
          setView={setView}
          appHistory={appHistory}
        />
      </HeaderContainer>
      <ComponentContainer>
        <Component changeView={changeView} setView={setView} />
      </ComponentContainer>
    </Container>
  );
}

const Container = styled.main`
  display: flex;
  flex-direction: column;

  height: -webkit-fill-available;
  max-height: 95vh;
  grid-template-rows: 80px 1fr;
`;

const HeaderContainer = styled.div``;

const ComponentContainer = styled.div`
  overflow-y: scroll;
`;
export default App;
