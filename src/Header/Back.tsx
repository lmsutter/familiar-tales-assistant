// icon:history-16 | Octicons https://primer.style/octicons/ | Github Primer
import * as React from "react";
import styled from "styled-components";
import { ViewPropType } from "../types";
import { componentMapType } from "../Views/componentMap";

function Back(
  props: React.SVGProps<SVGSVGElement> &
    ViewPropType & {
      setHistory: React.Dispatch<React.SetStateAction<componentMapType[]>>;
      appHistory: componentMapType[];
    }
) {
  const { setHistory, setView, appHistory } = props;
  console.log(appHistory);
  const handleBack = () => {
    setView((p) => {
      if (appHistory.length > 1) {
        return appHistory.at(2) || "Main";
      } else return "Main";
    });
    setHistory((p) => {
      const temp = [...p];
      temp.shift();
      return temp;
    });
  };
  return (
    <Wrapper onClick={handleBack}>
      <svg viewBox="0 0 512 512" fill="currentColor" {...props}>
        <path
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={48}
          d="M244 400L100 256l144-144M120 256h292"
        />
      </svg>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  cursor: pointer;
  width: 50px;
  height: 100%;
`;

export default Back;
