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
      <Header
        setHistory={setHistory}
        changeView={changeView}
        setView={setView}
        appHistory={appHistory}
      />
      <Component changeView={changeView} setView={setView} />
    </Container>
  );
}

const Container = styled.main``;

export default App;
