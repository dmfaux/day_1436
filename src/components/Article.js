import styled from "styled-components";

const Container = styled.div`
  width: 291px;
  height: 356px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  img {
    width: 291px;
    height: 220px;
  }
`;

const DateContainer = styled.div`
  flex-grow: 1;
  justify-content: flex-end;
`;

const Article = ({ img, heading, date }) => (
  <Container>
    <img src={img} alt={heading} />
    <h4>{heading}</h4>
    <DateContainer>
      <small>{date}</small>
    </DateContainer>
  </Container>
);

export default Article;
