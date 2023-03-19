import { useState } from "react";
import styled from "styled-components";

export const ViewTitle = styled.h1`
  font-size: 2.3rem;
  text-align: center;
  margin-bottom: 1.7rem;
`;

export const OrderedList = styled.ol`
  margin-top: 1rem;
  margin-left: 1.3em;
`;

export const ListItem = styled.li`
  font-size: 1.85rem;
  display: list-item;
  margin: 0.5em 0;
`;

export const GeneralText = styled.p`
  line-height: 2.3rem;
`;
const NoteContainer = styled.div`
  margin: 0.5em 0;
  cursor: pointer;
`;

const NoteText = styled.p``;

const NoteContent = styled.p<{ open: boolean }>`
  display: none;

  ${({ open }) => open && "display: block;"}
`;

export const Note = (props: { text: string; title?: string }) => {
  const { text, title } = props;
  const [open, setOpen] = useState(false);
  return (
    <NoteContainer onClick={() => setOpen((p) => !p)}>
      <NoteText>{title ? title : "Note:"}</NoteText>
      <NoteContent open={open}>{text}</NoteContent>
    </NoteContainer>
  );
};
