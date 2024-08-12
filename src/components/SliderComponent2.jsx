import React, { Component } from "react";
import Slider from "react-slick";
import List from "../List.json";
import Cards from "./Cards";

export default function SliderComponent2() {
    const data = List.filter((i)=>(i.type === "fruit"));
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 4,
        vertical: true,
        verticalSwiping: true,
        beforeChange: function(currentSlide, nextSlide) {
          console.log("before change", currentSlide, nextSlide);
        },
        afterChange: function(currentSlide) {
          console.log("after change", currentSlide);
        }
      };

    return (
        <div>
            <div className="slider-container grid col-span-2 ">
      <Slider {...settings}>
       { data.map((i)=>(
            <Cards item={i} key={i.id} />
        ))}
       { data.map((i)=>(
            <Cards item={i} key={i.id} />
        ))}
      </Slider>
    </div>
        </div>
    )
}
