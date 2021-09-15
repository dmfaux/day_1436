import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 704px;
  width: 100vw;
  background-color: #fffcf8;
  border-top: 2px solid #faf3eb;
  border-bottom: 2px solid #faf3eb;
`;

const Header = styled.div`
  width: 631px;
  text-align: center;
  h1 {
    font-size: 66px;
    line-height: 72px;
    color: #14203e;
  }
`;

const Blurb = styled.div`
  width: 659px;
  text-align: center;
  p {
    font-size: 22px;
    line-height: 29px;
    color: #14203e;
  }
`;

const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 192px;
  height: 73px;
  background-color: #14203e;
  color: white;
  border-radius: 10px;
  font-size: 18px;
`;

const Hero = () => (
  <Container>
    <Header>
      <h1>A modern way to build websites.</h1>
    </Header>
    <Blurb>
      <p>
        Empowers designers to build professional, custom websites in a
        completely visual canvas with no code
      </p>
    </Blurb>
    <Button>Start free trial</Button>
  </Container>
);

export default Hero;
