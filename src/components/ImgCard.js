import React from "react";
import styled from "styled-components";

const Card = styled.div`
  width: 90%;
  height: 90%;
  border-radius: 6px;
  background-image: ${(props) => props.photo};
  background-size: cover;
`;

const Title = styled.div`
  font-family: ${(props) => props.theme.fonts.regular};
  color: white;
  font-size: 16px;
`;

const ImgCard = ({ photo }) => (
  <Card photo={photo}>
    <Title>Nome</Title>
    <img src={photo}/>
  </Card>
);

export default ImgCard;