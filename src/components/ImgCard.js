import React from "react";
import styled from "styled-components";

const Card = styled.div`
  min-width: 90px;
  height: 90px;
  border-radius: 8px;
  background-image: url(${(props) => props.photo});
  background-size: cover;
  margin-botton: 10%;
  p {
    margin-left: 6px;
    margin-top: 10px;
  }
`;

const Title = styled.p`
  margin-top: 10%;
  font-family: ${(props) => props.theme.fonts.regular};
  color: white;
  font-size: 18px;
`;

const ImgCard = ({ photo, title }) => (
  <Card photo={photo}>
    <Title>{title}</Title>
  </Card>
);

export default ImgCard;
