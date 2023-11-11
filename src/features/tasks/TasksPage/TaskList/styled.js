import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

export const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const Item = styled.li`
  display: grid;
  grid-template-columns: auto 1fr auto;
  grid-gap: 10px;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #ddd;

  ${({ hidden }) =>
    hidden &&
    css`
      display: none;
    `}
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: teal;

  &:hover {
    filter: brightness(110%);
  }

  &:active {
    filter: brightness(110%);
  }
`;

export const Content = styled.span`
  ${({ done }) =>
    done &&
    css`
      text-decoration: line-through;
    `}
`;

const Button = styled.button`
  width: 30px;
  height: 30px;
  border: none;
  padding: 0;
  cursor: pointer;
  transition: 0.2s;
  color: white;
`;

export const ToggleDoneButton = styled(Button)`
  background-color: hsl(120, 100%, 25%);

  &:hover {
    filter: brightness(110%);
  }

  &:active {
    filter: brightness(110%);
  }
`;

export const RemoveButton = styled(Button)`
  background-color: hsl(0, 100%, 50%);

  &:hover {
    filter: brightness(110%);
  }
`;
