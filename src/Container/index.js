import styled from "styled-components";

export const StyledContainer = styled.main`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const Container = ({ children }) => (
  <StyledContainer>{children}</StyledContainer>
);

export default Container;
