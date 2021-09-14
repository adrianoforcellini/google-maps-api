import React from "react";
import styled from "styled-components";

const Restaurante = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top:10%;
`;

const RestauranteInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.span`
  font-family: ${(props) => props.theme.fonts.regular};
  color: black;
  font-size: 28px;
`;

const Adress = styled.span`
  font-family: ${(props) => props.theme.fonts.regular};
  color: black;
  font-size: 12px;
`;


const RestauranteImg = styled.img`
  width: 120vw;
  height: 20vh;
  border-radius: 6px;
  background-image: url(${(props) => props.restaurante}) ;
  background-size: cover;
  `;

const RestaurantCard = ({ restaurante }) => (
  <Restaurante>
    <RestauranteInfo>
      <Title>
      Restaurante Nome
      </Title>
      <Adress>
        Coronel Francisco Bráz, 1123
      </Adress>
    </RestauranteInfo>
    <RestauranteImg src={restaurante} alt="restuante-foto"/> 
  </Restaurante>
);

export default RestaurantCard;
