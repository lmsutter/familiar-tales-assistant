import React, { PropsWithChildren, useState } from "react";
import styled from "styled-components";
import ToolTip from "../Icons/ToolTip";
import FlickerMovement from "../assets/FlickerMovement.jpg";
import ReactDom from "react-dom";

type ContentType = "skillTest" | "movementExample";

interface TooltipPropsType {
  type: ContentType;
}

const toolTipContentMap: Record<ContentType, any> = {
  skillTest:
    "A skill test is a certain set of steps that determines whether or not you are able to successfully do an action. A Skill test will always have a skill type. The steps include 1. Playing cards to reach a certain value, 2. Resolving card effects (in upper left, optional), 3. asking for help (optional), and 4. Rolling the purple dice and resolving",
  movementExample: <img src={FlickerMovement} />,
};

const modalLocation = document.getElementById("__modal");

const Tooltip = (props: PropsWithChildren<TooltipPropsType>) => {
  const { children, type } = props;
  const [open, setOpen] = useState(false);

  return (
    <Container onClick={() => setOpen((p) => !p)}>
      <ToolTipIconWrapper>
        <ToolTip />
      </ToolTipIconWrapper>
      <WrappedChildren>{children}</WrappedChildren>
      {modalLocation &&
        open &&
        ReactDom.createPortal(
          <ToolTipContainer>
            <ToolTipContent open={open}>
              {toolTipContentMap[type]}
            </ToolTipContent>
          </ToolTipContainer>,
          modalLocation
        )}
    </Container>
  );
};

const Container = styled.span`
  position: relative;
`;

const WrappedChildren = styled.span`
  text-decoration: underline;
`;

const ToolTipContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  padding: 1.6rem;
`;

const ToolTipContent = styled.div<{ open: boolean }>`
  background-color: grey;
  padding: 1rem;
  color: white;
`;

const ToolTipIconWrapper = styled.div`
  position: absolute;
  height: 10px;
  width: 10px;
  top: -0.5em;
  left: -5px;
  color: white;
`;

export default Tooltip;
