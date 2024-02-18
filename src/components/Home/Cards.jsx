import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Cards.css"
import Heading from "./Heading";
function Cards() {
  return (
    <>
      <div className="scale-95 transition-all duration-500 hover:scale-100">
        <article className="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm">
          <img
            alt=""
            src="https://assets.thehansindia.com/h-upload/feeds/2019/05/02/1600x960_170588-nba.jpg"
            className="h-56 w-full object-cover"
          />

          <div className="p-4 sm:p-6">
            <a href="#">
              <h3 className="text-lg font-medium text-gray-900">
                LDCE is delighted to share that NBA has accredited Computer
                Engineering and Rubber Technology undergraduate program for
                three years (upto June 2026).
              </h3>
            </a>

            <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Recusandae dolores, possimus pariatur animi temporibus nesciunt
              praesentium dolore sed nulla ipsum eveniet corporis quidem,
              mollitia itaque minus soluta, voluptates neque explicabo tempora
              nisi culpa eius atque dignissimos. Molestias explicabo corporis
              voluptatem?
            </p>

            <a
              href="#"
              className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600 text-decoration-none"
            >
              03 Apr, 2023
              {/* <span
              aria-hidden="true"
              className="block transition-all group-hover:ms-0.5 rtl:rotate-180"
            >
              &rarr;
            </span> */}
            </a>
          </div>
        </article>
      </div>
    </>
  );
}


const SimpleSlider = () => {
  const settings = {
    dots: true,
    arrows:false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

    return (
      <div className="flex justify-center">
        <div className="md:px-2 slider-container m-1 w-[98%] md:w-[95%]">
          {/* <h2> Simple Slider </h2> */}
          <Slider {...settings}>
            <div className="sm:px-0 md:px-3">
              <Cards />
            </div>
            <div className="sm:px-0 md:px-3">
              <Cards />
            </div>
            <div className="sm:px-0 md:px-3">
              <Cards />
            </div>
            <div className="sm:px-0 md:px-3">
              <Cards />
            </div>
            <div className="sm:px-0 md:px-3">
              <Cards />
            </div>
            <div className="sm:px-0 md:px-3">
              <Cards />
            </div>
          </Slider>
        </div>
      </div>
    );
};

export default SimpleSlider;
