import React from "react";
import Slider from "react-slick";
import SliderProduct from "../common/SliderProduct";
import Type from "../common/Type";
import { sliders } from "../data";
import { listItem } from "../data";
export default function Home() {
  const settings = {
    accessibility: false,
    touchMove: false,
    swipe: false,
    pauseOnHover: false,
    draggable: false,
    arrows: false,

    speed: 1000,
    fade: true,
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
  };

  const renderSlider = () => {
    return sliders.map((slider, index) => {
      return (
        <div key={index}>
          <img alt={slider.id} src={slider.src} className="object-cover"></img>
        </div>
      );
    });
  };

  return (
    <div className="container-fluid mx-auto text-tertiary">
      <div className="carousel">
        <Slider {...settings}>{renderSlider()}</Slider>
      </div>
      <div data-aos="zoom-in" className="type">
        <Type />
      </div>
      <div data-aos="fade-up" className="best_seller bg-primary">
        <SliderProduct
          name="BEST SELLERS"
          description="From classic cupcakes and layer cakes to rich banana pudding, our best sellers are a great place to begin your Pastricia experience."
          listProduct={listItem}
          note="best-seller"
        />
      </div>
      <div data-aos="fade-up" className="new_products">
        <SliderProduct
          name="NEW PRODUCTS"
          description=""
          listProduct={listItem}
          note="new-products"
        />
      </div>
    </div>
  );
}
