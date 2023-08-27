import React, { useRef } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { ArrowLeftCircleIcon, ArrowRightCircleIcon } from '@heroicons/react/24/outline'
export default function SliderProduct(props) {
  const name = props.name;
  const description = props.description;
  const listProduct = props.listProduct;
  const productType = props.type;
  const note = props.note;

  const checkPath = () => {
    return (productType!=null)?productType:note;
  }
  const slider = useRef(null);

  const next = () => {
    slider.current.slickNext();
  };
  const previous = () => {
    slider.current.slickPrev();
  };
  const settings = {
    centerPadding: '10px',
    slidesToShow: 5,
    speed: 500,
    slidesToScroll: 1,
    infinite: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  const renderProduct = () => {
    return listProduct?.filter(item => {
      if(note != null) return item.note === note;
      if(productType != null) return item.type == productType;
    })
    .map((p, index) => {
      return (
        <Link
          to={`/pastricia-bakery/${p.id}`}
          key={index}
          className="col-span-2 w-full lg:col-span-1 mx-3">
          <div className="px-4">
            <img className="duration-500 ease-in-out hover:scale-105" alt={p.name} src={p.src}></img>
            <div className="detail pt-4">
              <h4 className="name leading-6 lg:leading-6 text-xl lg:text-2xl h-14 lg:h-[65px]">{p.name}</h4>
              <p className="desc text-sm lg:text-[15px] leading-5">{p.desc}</p>
              <h5 className="price text-base lg:text-[17px] pt-1">Starting at ${p.price}</h5>
            </div>
          </div>
        </Link>
      );
    });
  };

  return (
    <div className="type ">
      <div className="py-14 sm:py-14">
        <div className="relative mx-auto max-w-8xl lg:px-8 px-6 leading-8">
          <div className="text-center">
            <h1 className="text-3xl lg:text-4xl py-3">{name}</h1>
            <p className="mx-auto text-md lg:text-xl sm:max-w-3xl">
              {description}
            </p>
          </div>
          <p className="absolute inset-x-[25%] mx-auto w-[110px] text-center pt-3 underline underline-offset-2 hover:text-black ease-in-out duration-300">
            <Link to={`/pastricia-bakery/${checkPath()}`}>VIEW MORE</Link></p>
          <div className="absolute right-10">
            <button onClick={previous} className="hover:text-gray-500 duration-200"> <ArrowLeftCircleIcon className="block h-10 w-10" /> </button>
            <button onClick={next} className="hover:text-gray-500 duration-200"> <ArrowRightCircleIcon className="block h-10 w-10" /> </button>
          </div>
          <Slider className="mt-14" {...settings} ref={slider}>
            {renderProduct()}
          </Slider>
        </div>
      </div>
    </div>
  );
}