import styled from "styled-components";

const Container = styled.div`
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 530px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const MenuEntry = styled.div`
  color: #14203e;
  font-size: 18px;
`;

const Menu = () => (
  <Container>
    <Wrapper>
      <MenuEntry>Home</MenuEntry>
      <MenuEntry>Articles</MenuEntry>
      <MenuEntry>Pricing</MenuEntry>
      <MenuEntry>About</MenuEntry>
      <MenuEntry>Contact</MenuEntry>
    </Wrapper>
  </Container>
);

export default Menu;
