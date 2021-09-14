import React from "react";
import styled from "styled-components";

const Card = styled.div`
  width: 20vw;
  height: 20vh;
  border-radius: 6px;
  background-image: url(${(props) => props.photo}) ;
  background-size: cover;
  margin-botton:10%;
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
