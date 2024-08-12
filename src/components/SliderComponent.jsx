import React from "react";
import List from "../../public/List.json";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from "./Cards";

export default function SliderComponent() {
    const data = List.filter((i)=>(i.type==="fruit"));
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 3,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
    };
    return (
        <>
            <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 mt-4 md:mt-12 mb-10 ">
                <div className=" font-display text-4xl font-bold">

                    fast selling
                </div>
                <p className="font-thin text-center first-letter:text-lime-500 first-letter:text-2xl first-letter:font-bold font-serif selection:bg-lime-300">
                    following are the most popular products that are selling on our website and the amazing fact is that they can be available with us 24X7
                </p>
                <div className="slider-container mt-5 mb-5 md:flex-wrap">
      <Slider {...settings}>
        {data.map((i)=>(
            <Cards item={i} key={i.id}/>
        ))}
      </Slider>
    </div>
  
            </div>
        </>        
    )
}
