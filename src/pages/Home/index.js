import React, { useState } from "react";
import { Container, Search, Input, Wrapper, CarouselTitle } from "./styles";
import MaterialIcon from "@material/react-material-icon";
import Slider from "react-slick";
import Card from "../../components/ImgCard";

const Home = () => {
  const [input, setInput] = useState("");
  const imgsrc =
    "https://th.bing.com/th/id/OIP.E0J17-Lt3pwbL1SjtB1-mwHaE7?pid=ImgDet&rs=1";

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
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
        <Slider>
          <div>
            <img src={imgsrc} />
          </div>{" "}
          <div>
            <img src={imgsrc} />
          </div>{" "}
          <div>
            <img src={imgsrc} />
          </div>{" "}
          <div>
            <img src={imgsrc} />
          </div>{" "}
          <div>
            <img src={imgsrc} />
          </div>{" "}
          <div>
            <img src={imgsrc} />
          </div>{" "}
          <div>
            <img src={imgsrc} />
          </div>
        </Slider>
      </Container>
    </Wrapper>
  );
};
export default Home;
