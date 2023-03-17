import React, { useState } from "react";
import styled, { css } from "styled-components";
import Button from "../General/Button";
import IconExitOutline from "../Icons/Exit";
import { ViewPropType } from "../types";
import { componentMapType } from "../Views/componentMap";

const History = (
  props: React.SVGProps<SVGSVGElement> &
    ViewPropType & {
      setHistory: React.Dispatch<React.SetStateAction<componentMapType[]>>;
      appHistory: componentMapType[];
    }
) => {
  const { appHistory, changeView } = props;
  const [open, setOpen] = useState(false);

  return (
    <Wrapper>
      <HistoryElementsContainer display={open}>
        <ExitWrapper
          onClick={() => {
            setOpen(false);
          }}
        >
          <IconExitOutline />
        </ExitWrapper>
        {appHistory.map((item, index) => (
          <HistoryElement key={item + index}>
            <Button onClick={() => changeView(item)}>{item}</Button>
          </HistoryElement>
        ))}
      </HistoryElementsContainer>
      <HistoryIconWrapper onClick={() => setOpen(true)}>
        <svg viewBox="0 0 20 20" fill="currentColor" {...props}>
          <path
            fillRule="evenodd"
            d="M1.643 3.143L.427 1.927A.25.25 0 000 2.104V5.75c0 .138.112.25.25.25h3.646a.25.25 0 00.177-.427L2.715 4.215a6.5 6.5 0 11-1.18 4.458.75.75 0 10-1.493.154 8.001 8.001 0 101.6-5.684zM7.75 4a.75.75 0 01.75.75v2.992l2.028.812a.75.75 0 01-.557 1.392l-2.5-1A.75.75 0 017 8.25v-3.5A.75.75 0 017.75 4z"
          />
        </svg>
      </HistoryIconWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 50px;
  height: 100%;
  position: relative;
`;

const ExitWrapper = styled.div`
  height: 30px;
  width: 30px;
  padding: 5px;
`;

const HistoryIconWrapper = styled.div``;

const HistoryElementsContainer = styled.div<{ display: boolean }>`
  transform: scale(0.01, 0.01);
  transform-origin: 100% 0;
  position: absolute;
  top: 0;
  right: 0;
  transition: transform 0.3s ease-in, opacity 0.3s;
  background-color: black;
  padding: 1rem;
  opacity: 0;
  width: 100px;
  z-index: 5;

  ${({ display }) => {
    if (display) {
      return css`
        opacity: 1;
        display: flex;
        transform: scale(1, 1);
        flex-direction: column;
        align-items: center;
      `;
    }
  }}
`;

const HistoryElement = styled.div`
  margin-bottom: 1rem;

  &:last-of-type {
    margin-bottom: 0;
  }
`;

export default History;
