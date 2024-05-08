import React from "react";
import "./autoplaycarousel.scss";
import CarouselItem from "./CarouselItem";
import './autoplaycarousel.scss'

export default function AutoplayCarousel() {

  type CardDetails = {
    [key: string]: {
      imgUrl: string;
      title: string;
    };
  };

  const cardDetails : CardDetails = {
    0: {
        imgUrl: "https://picsum.photos/id/237/200/300",
        title: "Text 1"
    },

    1: {
        imgUrl: "https://picsum.photos/id/238/200/300",
        title: "Text 2"
    },

    2: {
        imgUrl: "https://picsum.photos/id/239/200/300",
        title: "Text 3"
    },

    3: {
        imgUrl: "https://picsum.photos/id/240/200/300",
        title: "Text 4"
    },

    4: {
        imgUrl: "https://picsum.photos/id/241/200/300",
        title: "Text 5"
    },

    5: {
        imgUrl: "https://picsum.photos/id/42/200/300",
        title: "Text 6"
    },

    6: {
        imgUrl: "https://picsum.photos/id/243/200/300",
        title: "Text 7",
    },
}

  return (
    <div className="carousel-container">
      <div className="carousel-track">
        {Object.keys(cardDetails).map((detailKey) => {
          return (
            <CarouselItem
              imgUrl={cardDetails[detailKey].imgUrl}
              imgTitle={cardDetails[detailKey].title}
            ></CarouselItem>
          );
        })}
        {Object.keys(cardDetails).map((detailKey) => {
          return (
            <CarouselItem
              imgUrl={cardDetails[detailKey].imgUrl}
              imgTitle={cardDetails[detailKey].title}
            ></CarouselItem>
          );
        })}
      </div>
    </div>
  );
}
