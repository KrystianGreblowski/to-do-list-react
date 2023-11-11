import { Header, Title, Body } from "./styled";

const Section = ({ title, body, extraHeaderContent }) => (
  <section>
    <Header>
      <Title>{title}</Title>
      {extraHeaderContent}
    </Header>
    <Body>{body}</Body>
  </section>
);

export default Section;
