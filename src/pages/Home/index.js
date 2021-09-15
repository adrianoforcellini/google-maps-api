import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Container, Search, Input, Wrapper, CarouselTitle } from "./styles";
import MaterialIcon from "@material/react-material-icon";
import Slider from "react-slick";
import imgsrc from "../../fundobranco.png";
import Card from "../../components/ImgCard";
import RestaurantCard from "../../components/RestaurantCard";
import Modal from "../../components/Modal/index";
import Map from "../../components/Map/index";

const Home = () => {
  const [inputValue, setInput] = useState("");
  const [modalOpened, setModalOpened] = useState(false);
  const [query, setQuery] = useState("");
  const [placeId, setPlaceId] = useState("");
  const { restaurants, restaurant } = useSelector((state) => state.restaurants);
  // const { restaurant } = useSelector((state) => state.restaurant);

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 100,
    slidesToShow: 3,
    slidesToScroll: 3,
    adaptiveHeight: true,
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleOpenModal = (placeId) => {
    setPlaceId(placeId);
    setModalOpened(true);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      setQuery(inputValue);
    }
  };

  return (
    <Wrapper>
      <Container>
        <Search>
          <Input
            type="text"
            value={inputValue}
            onChange={handleChange}
            onKeyPress={handleKeyPress}
          />
          <MaterialIcon role="button" icon="search" />
        </Search>
        <CarouselTitle>NA SUA ÁREA</CarouselTitle>
        <Slider {...settings}>
          {restaurants &&
            restaurants.map((restaurant) => (
              <Card
                key={restaurant.place_id}
                photo={
                  restaurant.photos ? restaurant.photos[0].getUrl() : imgsrc
                }
                title={restaurant.name}
              />
            ))}
        </Slider>
        {restaurants &&
          restaurants.map((restaurant) => (
            <RestaurantCard
            onClick={ () => handleOpenModal(restaurant.place_id) }
            restaurant={restaurant}
            />
          ))}
      </Container>
      <Modal open={modalOpened} onClose={() => setModalOpened(!modalOpened)}>
        <p>
          { restaurant?.name }
        </p>
        <p>
          { restaurant?.formatted_phone_number }
        </p>
        <p>
          { restaurant?.formatted_address }
        </p>
      </Modal>
      <Map query={query} placeId={placeId} />
    </Wrapper>
  );
};
export default Home;
