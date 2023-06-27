import { Header, Title } from "./styled";

const Section = ({ title, body, extraHeaderContent }) => (
  <section>
    <Header buttons>
      <Title>{title}</Title>
      {extraHeaderContent}
    </Header>
    <div>{body}</div>
  </section>
);

export default Section;
