import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { createOrder } from '../controller/userSlice'
import { deleteCart } from '../controller/cartSlice'
import { users } from '../data'
export const Checkout = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [user, setUser] = useState(null);
  const userId = useSelector(state => state.userReducer.userId)
  useEffect(() => {
    setUser(users.find(u => u.id === userId));
  }, [userId])
  
  const products = useSelector(state => state.cartReducer.carts)
  const payment = () => {
    dispatch(createOrder({userId,products,price,total}))
    dispatch(deleteCart())
    alert("Success!")
    navigate(`/order-history`)
  }
  // total prcie
  const [price, setPrice] = useState();
  useEffect(() => {
    const totals = () => {
      let price = 0
      products.forEach((e, i) => {
        price = parseFloat(e.price) * e.qty + price
      })
      setPrice(price)
    }
    totals();
  }, [products]);

  const total = price+6
    return (
      <div className='text-tertiary pt-[140px] md:grid md:grid-cols-2 mx-auto lg:w-8/12 w-10/12'>
        <div className="information col-span-1 border-b-4 md:border-b-0 md:border-r-4">
          <h2 className='font-bold text-2xl text-center'>Your information</h2>
          { user && (
            <div className="form mx-6">
            <p className='my-2'>
              <span className='font-bold text-lg mr-4'>Name:</span>
              <span className='text-[17px]'> {user.fName} {user.lName}</span>
            </p>
            <p className='my-2'>
              <span className='font-bold text-lg mr-4'>Email:</span>
              <span className='text-[17px]'> {user.email}</span>
            </p>
            <p className='my-2'>
              <span className='font-bold text-lg mr-4'>Phone:</span>
              <span className='text-[17px]'> {user.address}</span>
            </p>
            <p className='my-2'>
              <span className='font-bold text-lg mr-4'>Expected date:</span>
              <span className='text-[17px]'> 00/00/0000 </span>
            </p>
          </div>
          )}
        </div>
        <div className="order col-span-1 md:mt-0 mt-4">
          <h2 className='font-bold text-2xl text-center'>Your order</h2>
          <button className="btn bg-white text-tertiary border border-[#581B28] rounded-md hover:bg-[#581B28] hover:text-[#f0d4d6] ease-in-out duration-300 font-bold block py-2 px-6 m-4"
            onClick={() => {
              navigate("/products");
            }}
          >
            Products</button>

          {products.map(e => (
            <div key={e.id} className="item flex items-center m-4">
              <div className="image flex-1">
                <img src={e.src} width="120" height="120" className="rounded-md"></img>
              </div>
              <div className="desc pl-6 w-[180px] flex-1">
                <h4 className="font-bold text-lg">{e.name}</h4>
                <p>Price: ${e.price}</p>
                <p>Quantity: {e.qty}</p>
              </div>
            </div>
          ))}
          <div className='details_total font-bold flex py-2 border-t-2 mx-4'>
                <p className="flex-auto">Shipping:</p>
                <p className="text-right"> $6.00</p>
              </div>
          <div className='details_total font-bold flex py-2 border-t-2 mx-4 text-lg'>
                <p className="flex-auto">Total:</p>
                <p className="text-right text-[#cf2e2e]"> ${total}.00</p>
              </div>
              <button onClick={() => payment()} className="btn bg-[#581B28] border border-[#581B28] text-[#f0d4d6] rounded hover:bg-white hover:text-tertiary ease-in-out duration-300 font-bold block py-2 px-4 mt-2 mr-2 ml-auto">Complete your payment</button>
        </div>
      </div>
    )
}