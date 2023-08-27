import React from "react";
import Type from "../common/Type";
import { listItem } from "../data";
import SliderProduct from "../common/SliderProduct";

export default function ProductsList() {
  return (
    <div className="text-tertiary">
      <div className="container-fluid mx-auto">
        <div data-aos="zoom-in" className="type pt-16">
          <Type />
        </div>
        <div data-aos="fade-up" className="cookies bg-primary">
          <SliderProduct
            name="COOKIES"
            description=""
            listProduct={listItem}
            type="cookies"
          />
        </div>
        <div data-aos="fade-up" className="cupcakes bg-white">
          <SliderProduct
            name="CUPCAKES"
            description=""
            listProduct={listItem}
            type="cupcakes"
          />
        </div>
        <div data-aos="fade-up" className="cheesecakes bg-primary">
        <SliderProduct
            name="CHEESECAKES"
            description=""
            listProduct={listItem}
            type="cheesecakes"
          />=
        </div>
        <div data-aos="fade-up" className="cakes bg-white">
          <SliderProduct
            name="CAKES"
            description=""
            listProduct={listItem}
            type="cakes"
          />
        </div>
        <div data-aos="fade-up" className="choux bg-primary">
          <SliderProduct
            name="CHOUX CREAM"
            description=""
            listProduct={listItem}
            type="choux"
          />
        </div>
        <div data-aos="fade-up" className="donuts bg-white">
          <SliderProduct
            name="DONUTS"
            description=""
            listProduct={listItem}
            type="donuts"
          />
        </div>
      </div>
    </div>
  );
}
