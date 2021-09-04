import React, { useState } from "react";
import { Carousel } from "react-bootstrap";

import imgPath from "../assets/anand.jpg";
import magnus from "../assets/magnus.jpeg";
import ding from "../assets/ding.jpeg";
import fabi from "../assets/fabi.jpg";
import anish from "../assets/anish.jpeg";
import wesley from "../assets/wesley.jpeg";
import hou from "../assets/hou.jpg";
import ju from "../assets/ju.jpeg";
import kost from "../assets/kostenuk.jpg";
import goryachkina from "../assets/goryachkina.jpg";

const GalleryComponent = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="carouselContainer">
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img className="d-block w-100" src={magnus} alt="First slide" />
          <Carousel.Caption>
            <h3>Magnus Carlsen</h3>
            <p>World Chess Champion, Rank 1, World Rapid Champion</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={ding} alt="Second slide" />

          <Carousel.Caption>
            <h3>Ding Liren</h3>
            <p>China No.1 , World No. 2, Chess Olympiad Winner 2019</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={fabi} alt="Third slide" />

          <Carousel.Caption>
            <h3>Fabiano Caruana</h3>
            <p>World No. 3, USA No. 1</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={imgPath} alt="First slide" />
          <Carousel.Caption>
            <h3>Vishy Anand</h3>
            <p>India No. 1, Former World Chess Champion</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={anish} alt="First slide" />
          <Carousel.Caption>
            <h3>Anish Giri</h3>
            <p>Dutch No.1 , Tata Steel Runner-up 2020</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={wesley} alt="First slide" />
          <Carousel.Caption>
            <h3>Wesley So</h3>
            <p>American No. 2, World Fischer Random Champion 2019</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={hou} alt="First slide" />
          <Carousel.Caption>
            <h3>Hou Yifan</h3>
            <p>
              World No. 1, Former Womens World Champion, Womens Rapid Champion
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={ju} alt="First slide" />
          <Carousel.Caption>
            <h3>Ju Wenjun</h3>
            <p>Womens World Champion</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={kost} alt="First slide" />
          <Carousel.Caption>
            <h3>Alexandra Kostenuik</h3>
            <p>Women World Cup Winner 2021</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={goryachkina} alt="First slide" />
          <Carousel.Caption>
            <h3>Aleksandra Goryachkina</h3>
            <p>Women World Cup Runner-up 2021.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default GalleryComponent;
