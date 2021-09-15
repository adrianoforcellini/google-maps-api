import React from "react";
import styled from "styled-components";
import imgsrc from "../fundobranco.png";

const Restaurante = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10%;
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
  width: 15vw;
  height: 20vh;
  border-radius: 6px;
  background-image: url(${(props) => props.restaurante});
  background-size: cover;
`;

const RestaurantCard = ({ restaurant, onClick}) => (
  <Restaurante onClick={onClick} >
    <RestauranteInfo>
      <Title>{restaurant.name}</Title>
      <Adress>{restaurant.vicinity || restaurant.formatted_address}</Adress>
    </RestauranteInfo>
    <RestauranteImg
      src={restaurant.photos ? restaurant.photos[0].getUrl() : imgsrc}
      alt="restuante-foto"
    />
  </Restaurante>
);

export default RestaurantCard;
