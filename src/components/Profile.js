import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 15px;
  width: 267px;
`;

const Button = styled.div`
  background-color: ${(props) => (props.primary ? "#14203e" : "#f6f0e8")};
  color: ${(props) => (props.primary ? "white" : "black")};
  padding: 10px 15px;
  border-radius: 10px;
  font-size: 18px;
`;

const Profile = () => (
  <Container>
    <Button>Log in</Button>
    <Button primary>Start Free Trial</Button>
  </Container>
);

export default Profile;
