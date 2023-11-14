import Container from "../../common/Container";
import Header from "../../common/Header";
import Section from "../../common/Section";
import { AboutMe } from "./styled";

const Author = () => (
  <Container>
    <Header title="O autorze" />
    <Section
      title="Krystian Gręblowski"
      body={
        <>
          <AboutMe>
            Mam 29 lat i rok temu zainteresowałem się tworzeniem stron
            internetowych.
          </AboutMe>
          <AboutMe>
            Pochodzę z małej miejscowości na południu Polski. Zawsze jednak
            ciągnęło mnie do dużych miast i w pewnym momencie swojego życia
            postanowiłem, że zamieszkam w jednym z nich. I tak oto wylądowałem w
            Warszawie.
          </AboutMe>
          <AboutMe>
            Interesuję się również sportem, szczególnie lubię pojawiać się na
            siłowni. Natomiast w wolnym czasie zawsze chętnie przeczytam dobrą
            książkę lub obejrzę ciekawy film.
          </AboutMe>
        </>
      }
    />
  </Container>
);

export default Author;
