import styled from "styled-components";
import { Logo, Menu, Profile } from "../components";

const Container = styled.div`
  height: 99px;
  width: 100vw;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const Wrapper = styled.div`
  padding: 0 45px;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Header = () => (
  <Container>
    <Wrapper>
      <Logo />
      <Menu />
      <Profile />
    </Wrapper>
  </Container>
);

export default Header;
