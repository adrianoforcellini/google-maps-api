import React from "react";
import styled from "styled-components";

const Card = styled.div`
  width: 40vw;
  height: 40vh;
  border-radius: 6px;
  background-image: url(${(props) => props.photo}) ;
  background-size: cover;
`;

const Title = styled.p`
  margin-top: 10%;
  font-family: ${(props) => props.theme.fonts.regular};
  color: white;
  font-size: 18px;
`;

const ImgCard = ({ photo }) => (
  <Card photo={photo}>
    <Title>Nome Do Restaurante</Title>
  </Card>
);

export default ImgCard;
