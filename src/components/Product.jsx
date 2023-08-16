import React, { useState } from "react"
import { Link, useParams } from 'react-router-dom'
import { useDispatch } from "react-redux"
import { ChevronRightIcon, MinusIcon, PlusIcon } from "@heroicons/react/24/outline"
import { listItem } from "../data"
export default function Product() {
  const { id } = useParams()
  // const dispatch = useDispatch()
  const [quantity, setQuantity] = useState(1)

  return (
    <>
      {listItem?.filter(item => item.id == id)
        .map(item => (
          <div className="max-w-7xl mx-auto text-tertiary pt-[140px] md:px-0 px-6 pb-5" key={item.id}>
            <section className="details">
              <div className="header py-2">
                <Link to="/products" className='hover:underline hover:underline-offset-2 hover:text-primary ease-in-out duration-300'>OUR PRODUCTS</Link>
                <ChevronRightIcon className="h-7 w-7 inline pb-1" />
                <Link to={`/products/${item.type}`} className='hover:underline hover:underline-offset-2 hover:text-primary ease-in-out duration-300 uppercase'>{item.type}</Link>
              </div>
            </section>
            <div className="content grid grid-cols-1 md:grid-cols-2 md:gap-10">
              <div className="left md:col-span-1 col-span-2 items-center">
                <img src={`/pastricia-bakery/${item.src}`} alt={item.name} className='w-full' />
              </div>
              <div className="right md:col-span-1 col-span-2 pt-4 md:pt-2">
                <h1 className='text-4xl w-full md:w-1/2'>{item.name}</h1>
                <h2 className='text-2xl py-8 font-bold'>${item.price}</h2>
                <div className="size flex justify-start gap-6 items-center">
                  <div className="mr-12 font-bold text-slate-500">Size </div>
                  <div className="size1 border border-gray-200 rounded-sm">
                    <p className="px-3 py-2">Size 1</p>
                  </div>
                  <div className="size1 border border-gray-200 rounded-sm">
                    <p className="px-3 py-2">Size 2</p>
                  </div>
                  <div className="size1 border border-gray-200 rounded-sm">
                    <p className="px-3 py-2">Size 3</p>
                  </div>
                </div>
                <div className="qty py-8 flex justify-start gap-6 items-center">
                  <div className="mr-4 font-bold text-slate-500">Quantity </div>
                  <div>
                    <button className="border border-gray-200" onClick={() => (quantity == 1 ? setQuantity(1) : setQuantity(quantity - 1))}>
                      <MinusIcon className="h-4 w-4 inline mx-2 my-1" />
                    </button>
                    <span className="text-lg mx-4"> {quantity} </span>
                    <button className="border border-gray-200" onClick={() => setQuantity(quantity + 1)}>
                      <PlusIcon className="h-4 w-4 inline mx-2 my-1" />
                    </button>
                  </div>
                </div>
                <div className="action pt-2 flex justify-start gap-6 items-center">
                  <button className="btn bg-[#581B28] border border-[#581B28] text-[#f0d4d6] px-6 py-4 rounded-md hover:bg-white hover:text-tertiary ease-in-out duration-300 font-bold uppercase">Add to cart</button>
                  <button className="btn bg-white border border-[#581B28] px-6 py-4 rounded-md hover:bg-[#581B28] hover:text-[#f0d4d6] ease-in-out duration-300 font-bold uppercase">Buy</button>
                </div>
                <div className="describe pt-6">
                  <p>These brand-new, festive mini vanilla and chocolate cupcakes are 
                  topped with classic Holiday candies: red & green M&Ms, Sno-Caps 
                  and crushed Peppermint. Bring a 24- or 36-pack for the perfect 2022
                  winter party dessert!</p>
                  <p>Made in a facility that processes eggs, milk, peanuts,
                  tree nuts, soy, and wheat. Contains: Milk, Eggs, Wheat, Soy</p>
                </div>
              </div>
            </div>
          </div>
        ))
      }
    </>
  )
}
