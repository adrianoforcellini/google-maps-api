import React, { useState } from "react";
import { Container, Search, Input, Wrapper, CarouselTitle } from "./styles";
import MaterialIcon from "@material/react-material-icon";
import Slider from "react-slick";
import imgsrc from "../../OIP.jpeg";
import Card from "../../components/ImgCard";
import RestaurantCard from "../../components/RestaurantCard";
import Modal from "../../components/Modal/index";
import Map from '../../components/Map/index';

const Home = () => {
  const [input, setInput] = useState("");
  const [modalOpened, setModalOpened] = useState(true);

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

  return (
    <Wrapper>
      <Container>
        <Search>
          <Input type="text" value={input} onChange={handleChange} />
          <MaterialIcon role="button" icon="search" />
        </Search>
        <CarouselTitle>NA SUA ÁREA</CarouselTitle>
        <Slider {...settings}>
          <Card photo={imgsrc} />
          <Card photo={imgsrc} />
          <Card photo={imgsrc} />
          <Card photo={imgsrc} />
          <Card photo={imgsrc} />
          <Card photo={imgsrc} />
        </Slider>
        <RestaurantCard restaurante={imgsrc} />
      {/* <Modal open={modalOpened} onClose={()=> setModalOpened(!modalOpened)}/> */}
      </Container>
      <Map/>
    </Wrapper>
  );
};
export default Home;
