import styled from "styled-components";

export const StyledButtons = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 30px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    grid-template-columns: 1fr;
  }
`;

export const Button = styled.button`
  background-color: transparent;
  color: teal;
  margin: 0;
  padding: 0;
  font-size: 15px;
  border: none;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    filter: brightness(110%);
  }

  &:active {
    filter: brightness(120%);
  }

  &:disabled {
    color: #ccc;
    cursor: default;
  }
`;
