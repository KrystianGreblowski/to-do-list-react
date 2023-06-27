import styled, { css } from "styled-components";

export const Header = styled.header`
  padding: 20px;
  background-color: white;
  margin-top: 10px;
  margin-bottom: 2px;
  box-shadow: 1px 1px 3px #ddd;

  ${({ buttons }) =>
    buttons &&
    css`
      display: grid;
      grid-template-columns: 1fr auto;

      @media (max-width: 767px) {
        grid-template-columns: 1fr;
        grid-gap: 30px;
      }
    `}
`;

export const Title = styled.h2`
  font-size: 20px;
  margin: 0;
`;
