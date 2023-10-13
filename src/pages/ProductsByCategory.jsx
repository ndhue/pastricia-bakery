import React, { useEffect, useState} from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { listItem } from "../data";
import { ChevronRightIcon, ShoppingCartIcon } from "@heroicons/react/24/outline";

export const ProductsByCategory = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(listItem
      .filter(item => item.type === category || item.note === category));
  }, []);

  const { category } = useParams();
  const navigate = useNavigate();
  return (
    <div className="text-tertiary pt-[140px]">
      <div className="container-fluid grid grid-cols-2 items-center bg-primary">
        <div className="content md:col-span-1 col-span-2 md:mx-8 mx-4 md:my-0 my-4">
          <div className="header">
            <Link to="/products" className='hover:underline hover:underline-offset-2 duration-300'>OUR PRODUCTS</Link>
            <ChevronRightIcon className="h-6 w-6 inline pb-1" />
            <span className='uppercase hover:underline'>{category}</span>
          </div>
          <h1 className='font-bold md:text-6xl text-4xl md:my-6 my-4'><span className='uppercase'>{category.slice(0, 1)}</span>{category.replace('-', ' ').slice(1)}</h1>
          <p className='md:text-base text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer facilisis consequat pretium. In eu pharetra massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer</p>
        </div>
        <div className="img md:col-span-1 col-span-2">
          <img className="w-full" src="/assets/img/banner.png" />
        </div>
      </div>
      <div className="md:w-11/12 w-9/12 md:my-4 my-8 mx-auto list-products grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
        {data
          .map((p, index) => {
            return (
              <div key={index} className="max-w-sm bg-white border rounded-md shadow col-span-1">
                <Link to={`/detail/${p.id}`}>
                  <img className="w-full" src={p.src} alt={p.id} />
                </Link>
                <div className="detail m-4">
                  <Link to={`/detail/${p.id}`} className="name text-xl lg:text-2xl">{p.name.length > 16 ? p.name.slice(0, 16) + '...' : p.name}</Link>
                  <p className="desc text-sm pt-3 lg:text-[15px] leading-5">{p.desc}</p>
                  <div className="price flex justify-between items-center">
                  <h5 className="price text-base lg:text-[17px] pt-2 text-red-900">Starting at ${Number(p.price).toFixed(2)}</h5>
                  <ShoppingCartIcon className='h-6 w-6 text-red-900 cursor-pointer' onClick={() => navigate(`/details/${p.id}`)} />
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  )
}
