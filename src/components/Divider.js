import styled from "styled-components";

const Container = styled.div`
  margin: 30px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Stripe = styled.div`
  height: 2px;
  background-color: #eee;
  width: 600px;
`;

const Text = styled.div`
  color: #14203e;
  background-color: white;
  margin-top: -20px;
  padding: 10px;
  font-size: 14px;
`;

const Divider = ({ text }) => (
  <Container>
    <Stripe /> <Text>{text}</Text>
  </Container>
);

export default Divider;
