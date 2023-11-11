import styled from "styled-components";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

export const StyledList = styled.ul`
  list-style-type: none;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 30px;
  background-color: teal;
  padding: 18px;
  margin-top: 0;
  font-size: 14px;
`;

export const TasksItem = styled.li`
  justify-self: end;
`;

export const AuthorItem = styled.li`
  justify-self: start;
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: white;

  &.active {
    font-weight: bold;
  }

  &:hover {
    filter: brightness(90%);
  }
`;
