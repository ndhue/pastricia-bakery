import React from "react";
import { Link } from "react-router-dom";

export default function OrderHistory() {
  return (
    <div className="text-tertiary pt-[140px]">
      <div className="title text-3xl lg:text-4xl text-center bg-secondary py-6">
        <h1>ORDER HISTORY</h1>
      </div>

      <div className="max-w-6xl mx-auto relative my-4 px-4">
        <table className="w-full text-[12px] xs:text-sm text-center">
          <thead className="uppercase bg-gray-75 border-2">
            <tr>
              <th scope="col" className="px-6 py-3">Date</th>
              <th scope="col" className="px-6 py-3">Order</th>
              <th scope="col" className="px-6 py-3">Price</th>
              <th scope="col" className="px-6 py-3">Status</th>
              <th scope="col" className="px-6 py-3"></th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-2">
            <td scope="row" className="px-6 py-4">12/04/2022</td>
              <td className="px-6 py-4">#O101</td>
              <td className="px-6 py-4">$80.00</td>
              <td className="px-6 py-4 text-green-400">Delivered</td>
              <td className="px-6 py-4">
                <Link to="/pastricia-bakery/detail-order" className="hover:underline hover:underline-offset-2 hover:text-primary ease-in-out duration-300">Detail</Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
