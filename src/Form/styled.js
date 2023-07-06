import styled from "styled-components";

export const StyledForm = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  grid-gap: 20px;
  background-color: white;
  box-shadow: 1px 1px 3px #ddd;
  padding: 20px;
  font-size: 14px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    grid-template-columns: 1fr;
  }
`;

export const Input = styled.input`
  border: 1px solid #ccc;
  padding: 10px;
`;

export const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.font};
  border: none;
  padding: 10px;
  cursor: pointer;
  transition: 0.4s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.hover};
    transform: scale(1.1);
  }
`;
