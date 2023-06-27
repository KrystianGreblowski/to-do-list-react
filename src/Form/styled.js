import styled from "styled-components";

export const StyledForm = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  grid-gap: 20px;
  background-color: white;
  box-shadow: 1px 1px 3px #ddd;
  padding: 20px;
  font-size: 14px;

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
  }
`;

export const Input = styled.input`
  border: 1px solid #ccc;
  padding: 10px;
`;

export const Button = styled.button`
  background-color: hsl(180, 100%, 25%);
  border: none;
  padding: 10px;
  color: white;
  cursor: pointer;
  transition: 0.4s;

  &:hover {
    background-color: hsl(180, 100%, 30%);
    transform: scale(1.1);
  }
`;
