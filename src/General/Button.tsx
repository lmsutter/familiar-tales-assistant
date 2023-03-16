import React, { PropsWithChildren } from "react";
import styled from "styled-components";

type ButtonProps = {
  onClick: (...args: any) => any;
};

const Button = (props: PropsWithChildren<ButtonProps>) => {
  const { onClick, children } = props;

  return (
    <Container>
      <Background />
      <StyledButton onClick={onClick}>{children}</StyledButton>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  display: inline;
  cursor: pointer;
`;

const Background = styled.div`
  background-color: HSL(129, 13%, 28%);
  position: absolute;
  transform: skew(-10deg, 0) translateX(-50%);
  top: 0;
  left: 50%;
  width: 80%;
  height: 100%;

  &:hover {
    width: 80%;
  }
`;

const StyledButton = styled.button`
  border: none;
  background-color: rgba(0, 0, 0, 0);
  color: white;
  padding: 0.5rem 1rem;
  position: relative;
`;

export default Button;
