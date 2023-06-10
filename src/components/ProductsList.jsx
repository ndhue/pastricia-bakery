import React from "react";
import Type from "../common/Type";
import { listItem } from "../data";
import SliderProduct from "../common/SliderProduct";

export default function ProductsList() {
  return (
    <div className="text-tertiary">
      <div className="container-fluid mx-auto">
        <div className="type pt-16">
          <Type />
        </div>
        <div className="cookies bg-primary">
          <SliderProduct
            name="COOKIES"
            description=""
            listProduct={listItem}
            type="cookies"
          />
        </div>
        <div className="cupcakes bg-white">
          <SliderProduct
            name="CUPCAKES"
            description=""
            listProduct={listItem}
            type="cupcakes"
          />
        </div>
        <div className="cheesecakes bg-primary">
        <SliderProduct
            name="CHEESECAKES"
            description=""
            listProduct={listItem}
            type="cheesecakes"
          />=
        </div>
        <div className="cakes bg-white">
          <SliderProduct
            name="CAKES"
            description=""
            listProduct={listItem}
            type="cakes"
          />
        </div>
        <div className="choux bg-primary">
          <SliderProduct
            name="CHOUX CREAM"
            description=""
            listProduct={listItem}
            type="choux"
          />
        </div>
        <div className="donuts bg-white">
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
