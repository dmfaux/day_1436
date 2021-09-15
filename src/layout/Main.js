import styled from "styled-components";
import { Header } from ".";
import { Article, Divider, Hero } from "../components";
import Img1 from "../assets/img1.png";
import Img2 from "../assets/img2.png";
import Img3 from "../assets/img3.png";
import Img4 from "../assets/img4.png";

const Container = styled.div`
  min-height: 100vh;
  min-width: 100vw;
`;

const ContentWindow = styled.div`
  min-width: 100vw;
  min-height: calc(100vh - 99px); // page height - header height
`;

const ArticleContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 100vw;
`;

const ArticleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 1254px;
`;

const Main = () => (
  <Container>
    <Header />
    <ContentWindow>
      <Hero />
      <Divider text="We share our thoughts on design" />
      <ArticleContainer>
        <ArticleWrapper>
          <Article
            heading="Redesigning my site increased sales by over 400% in one week."
            date="Jul 1, 2020"
            img={Img1}
          />
          <Article
            heading="Design handoff: What engineers really want to see"
            date="Jul 1, 2020"
            img={Img2}
          />
          <Article
            heading="A comprehensive list of human-computer interactions"
            date="Jul 1, 2020"
            img={Img3}
          />
          <Article
            heading="Why to people hate redesigns?"
            date="Jul 1, 2020"
            img={Img4}
          />
        </ArticleWrapper>
      </ArticleContainer>
    </ContentWindow>
  </Container>
);

export default Main;
