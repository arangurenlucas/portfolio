import React from "react";
import "./slider.css";
import Carousel, { slidesToShowPlugin } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import Slides from "./Slides";

export default function Slider() {
  return (
    <div className="carousel-container">
      <div className="carousel-title">
        <h2>My projects</h2>
      </div>
      <Carousel
        plugins={[
          "arrows",
          "infinite",
          "centered",
          {
            resolve: slidesToShowPlugin,
            options: {
              numberOfSlides: 3,
            },
          },
        ]}
        animationSpeed={600}
        slides={Slides}
        draggable
        breakpoints={{
          960: {
            plugins: [
              {
                resolve: slidesToShowPlugin,
                options: {
                  numberOfSlides: 1,
                },
              },
              "infinite",
            ],
            itemWidth: 300,
          },
        }}
      />
    </div>
  );
}
