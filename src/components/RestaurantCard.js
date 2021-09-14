import React from "react";
import styled from "styled-components";

const Restaurante = styled.div`
  display: flex;
  justify-content: space-between;
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

const RestaurantCard = ({ photo }) => (
  <Restaurante>
    <RestauranteInfo>
      <Title>
      Restaurante Nome
      </Title>
      <Adress>
        Coronel Francisco Bráz, 1123
      </Adress>
    </RestauranteInfo>
  </Restaurante>
);

export default RestaurantCard;
