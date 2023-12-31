import React, { useState, useEffect } from "react";
import { CreditCardIcon } from '@heroicons/react/24/outline';
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { users } from "../data";
export const DetailOrder = () => {

  const { id } = useParams()
  const [user, setUser] = useState(null);
  const userId = useSelector(state => state.userReducer.userId)
  useEffect(() => {
    setUser(users.find(u => u.id === userId));
  }, [userId])
  const orders = useSelector(state => state.userReducer.orders)
  
  return (
    <div className="text-tertiary pt-[140px]">
      <div className="title text-3xl lg:text-4xl text-center bg-secondary py-6">
        <h1>ORDER'S DETAIL</h1>
      </div>
      {orders.filter(o => o.id == id)
      .map(order => (
        <div key={order.id} className="my-4 max-w-7xl mx-auto px-4 text-center">
        <div className="lg:grid lg:grid-cols-5 lg:gap-6">
          <div className="lg:col-span-3">
            <table className="mx-auto w-5/6 md:w-full text-sm xs:text-base md:text-lg">
              <thead className="bg-gray-75 border-2 text-left">
                <tr>
                  <th scope="col" className="px-4 py-3">
                    Items from Pastricia
                  </th>
                  <th scope="col" className="px-4 py-3"></th>
                  <th scope="col" className="px-4 py-3">
                    Order #{order.id}
                  </th>
                </tr>
              </thead>
              <thead className="bg-gray-75 border-2">
                <tr>
                  <th scope="col" className="px-4 py-3  text-left">
                    Item(s)
                  </th>
                  <th scope="col" className="px-4 py-3">Price</th>
                  <th scope="col" className="px-4 py-3">
                    Qty.
                  </th>
                </tr>
              </thead>
              <tbody>
                {order.products.map(item => (
                  <tr key={item.id} className="border-2">
                  <td scope="row" className="p-4  text-left">
                    <img src={item.src} width="85" height="85" className="lg:inline rounded-md pb-2 lg:pb-0"></img>
                    <span className="px-0 lg:px-2 text-sm lg:text-base">{item.name}</span>
                  </td>
                  <td className="p-4 text-sm">${item.price}</td>
                  <td className="p-4 text-sm">{item.qty}</td>
                </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-4 lg:col-span-2 lg:mt-0">
            <table className="text-left mx-auto w-5/6 md:w-full text-sm xs:text-base md:text-lg">
              <thead className="border-2">
                <tr>
                  <th scope="col" className="px-4 py-3">
                    Order Summary
                  </th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-2">
                  <td scope="row" className="p-4">
                    <p>Subtotal:</p>
                    <p className="text-sm">{order.products.length} {order.products.length == 1 ? <span> item</span> : <span> items</span>}</p>
                  </td>
                  <td className="p-4 text-right text-sm">${order.price}</td>
                </tr>
                <tr className="border-2">
                  <td scope="row" className="p-4">
                    Shipping:
                  </td>
                  <td className="p-4 text-right text-sm">${order.shipping}</td>
                </tr>
                <tr className="border-2">
                  <td scope="row" className="p-4">
                    Total:
                  </td>
                  <td className="p-4 text-right text-lg">${order.total}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <hr className="my-6 border-t-2"/>
        <div className="lg:grid lg:grid-cols-6 lg:gap-6 mt-4">
          <div className="lg:col-span-2">
            <table className="mx-auto w-5/6 md:w-full text-left  text-sm xs:text-base md:text-lg">
              <thead className="border-2">
                <tr>
                  <th scope="col" className="px-4 py-3">
                    Billing Information
                  </th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-2">
                  <td scope="row" className="p-4">
                    Paypal
                    <CreditCardIcon className="block h-10 w-10 ml-1"/>
                  </td>
                  <td className="p-4">
                    Number 01XX
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-4 lg:col-span-2 lg:mt-0">
            <table className="mx-auto w-5/6 md:w-full text-left  text-sm xs:text-base md:text-lg">
              <thead className="border-2">
                <tr>
                  <th scope="col" className="px-4 py-3">
                    Shipping Information
                  </th>
                  <th></th>
                </tr>
              </thead>
              {user && (
                <tbody>
                <tr className="border-2">
                  <td scope="row" className="p-4">
                    <span className="underline">Sent to:</span>
                    <span className="info">&nbsp; {user.fName} {user.lName}</span>
                  </td>
                </tr>
                <tr className="border-2">
                  <td scope="row" className="p-4">
                    <span className="underline">Phone number:</span>
                    <span className="info">&nbsp; {user.phone}</span>
                  </td>
                </tr>
                <tr className="border-2">
                  <td scope="row" className="p-4">
                    <span className="underline">Address:</span>
                    <span className="info">&nbsp; {user.address}</span>
                  </td>
                </tr>
              </tbody>
              )}
            </table>
          </div>
          <div className="mt-4 lg:col-span-2 lg:mt-0">
            <table className="mx-auto w-5/6 md:w-full text-left  text-sm xs:text-base md:text-lg">
              <thead className="border-2">
                <tr>
                  <th scope="col" className="px-4 py-3">
                    Delivery
                  </th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-2">
                  <td scope="row" className="p-4">
                    <span className="underline">Status:</span>
                    {order.status != "Waiting" ? <span className="font-thin text-green-500">&nbsp; {order.status}</span> : <span className="font-thin text-yellow-500">&nbsp; {order.status}</span>}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      ))}
      
    </div>
  );
}
