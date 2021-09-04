import React, { useState, useEffect } from "react";
import imgPath from "../assets/anand.jpg";
import magnus from "../assets/magnus.jpeg";
import ding from "../assets/ding.jpeg";
import fabi from "../assets/fabi.jpg";
import wesley from "../assets/wesley.jpeg";
import hou from "../assets/hou.jpg";
import ju from "../assets/ju.jpeg";

const slideWidth = 30;

const _items = [
  {
    player: {
      title: "Vishy Anand",
      desc: 'Known as "The Madras Tiger", Anand is 5 time world champion and legend of Indian Chess.',
      image: imgPath,
    },
  },
  {
    player: {
      title: "Magnus Carlsen",
      desc: "World Chess Champion, Rank 1, World Rapid Champion",
      image: magnus,
    },
  },
  {
    player: {
      title: "Ding Liren",
      desc: 'The "Chinese Dragon" is currently world No.3 and wins 2019 Chess Olympiad under his captaincy.',
      image: ding,
    },
  },
  {
    player: {
      title: "Fabiano Caruana",
      desc: 'Fabi" as many like to call him is an American professional chess player with current No.2 Rank.',
      image: fabi,
    },
  },

  {
    player: {
      title: "Wesley So",
      desc: "World No. 6, Fischer Random Champion. Emerges as most successful Online Player during Covid era.",
      image: wesley,
    },
  },
  {
    player: {
      title: "Hou Yifan",
      desc: "Best active female player. World No. 1, Former Womens World Champion.    ",
      image: hou,
    },
  },
  {
    player: {
      title: "Ju Wenjun",
      desc: "Ju Wenjun from China is the current Womens World Champion with 2600+ elo ratings.",
      image: ju,
    },
  },
];

const length = _items.length;
_items.push(..._items);

const sleep = (ms = 0) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

const createItem = (position, idx) => {
  const item = {
    styles: {
      transform: `translateX(${position * slideWidth}rem)`,
    },
    player: _items[idx].player,
  };

  switch (position) {
    case length - 1:
    case length + 1:
      item.styles = { ...item.styles, filter: "grayscale(1)" };
      break;
    case length:
      break;
    default:
      item.styles = { ...item.styles, opacity: 0 };
      break;
  }

  return item;
};

const CarouselSlideItem = ({ pos, idx, activeIdx }) => {
  const item = createItem(pos, idx, activeIdx);

  return (
    <li className="carousel__slide-item" style={item.styles}>
      <div className="carousel__slide-item-img-link">
        <img src={item.player.image} alt={item.player.title} />
      </div>
      <div className="carousel-slide-item__body">
        <h5>{item.player.title}</h5>
        <p>{item.player.desc}</p>
      </div>
    </li>
  );
};

const keys = Array.from(Array(_items.length).keys());

const Carousel = () => {
  const [items, setItems] = useState(keys);
  const [isTicking, setIsTicking] = useState(false);
  const [activeIdx, setActiveIdx] = useState(0);
  const bigLength = items.length;

  const prevClick = (jump = 1) => {
    if (!isTicking) {
      setIsTicking(true);
      setItems((prev) => {
        return prev.map((_, i) => prev[(i + jump) % bigLength]);
      });
    }
  };

  const nextClick = (jump = 1) => {
    if (!isTicking) {
      setIsTicking(true);
      setItems((prev) => {
        return prev.map((_, i) => prev[(i - jump + bigLength) % bigLength]);
      });
    }
  };

  useEffect(() => {
    if (isTicking) sleep(300).then(() => setIsTicking(false));
  }, [isTicking]);

  useEffect(() => {
    setActiveIdx((length - (items[0] % length)) % length) // prettier-ignore
  }, [items]);

  return (
    <div className="carousel__wrap">
      <div className="carousel__inner">
        <button
          className="carousel__btn carousel__btn--prev"
          onClick={() => prevClick()}
        >
          <i className="carousel__btn-arrow carousel__btn-arrow--left" />
        </button>
        <div className="carousel__container">
          <ul className="carousel__slide-list">
            {items.map((pos, i) => (
              <CarouselSlideItem
                key={i}
                idx={i}
                pos={pos}
                activeIdx={activeIdx}
              />
            ))}
          </ul>
        </div>
        <button
          className="carousel__btn carousel__btn--next"
          onClick={() => nextClick()}
        >
          <i className="carousel__btn-arrow carousel__btn-arrow--right" />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
