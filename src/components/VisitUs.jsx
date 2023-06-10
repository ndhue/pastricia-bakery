import React from 'react'
import { MapPinIcon } from "@heroicons/react/24/outline";
import { locationHCM, locationCT } from '../data';
export default function VisitUs() {
  const renderLocation = (locations) => {
    return locations.map((location) => {
      return (
        <div key={location.id} className="h-fit group photo md:col-span-1 col-span-3 mx-auto py-4 md:py-0">
          <div className="relative overflow-hidden text-white">
            <img src={location.src} alt="" className=" object-cover ease-in-out duration-500 group-hover:scale-110" />
            <div className="absolute bottom-0 left-0 p-2">
              <h2 className='text-2xl'>{location.name}</h2>
              <p>{location.desc}</p>
            </div>
            <div className="absolute h-full w-full bg-black/20 flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
              <button><MapPinIcon className="block h-16 w-16" /></button>
            </div>
          </div>
        </div>
      )
    })
  }
  return (
    <div className="text-tertiary pt-[140px]">
      <div className="title text-3xl lg:text-4xl text-center py-6">
        <h1>STORE LOCATIONS</h1>
      </div>
      <div className="content px-6">
        <div className="card bg-secondary p-6">
          <div className="location pb-4 pl-2">
            <h2 className='text-3xl'>Hồ Chí Minh</h2>
          </div>
          <div className="img grid grid-cols-1 md:grid-cols-3 items-center py-2">
            {renderLocation(locationHCM)}
          </div>
        </div>
        <div className="card p-6 border">
          <div className="location pb-4 pl-2">
            <h2 className='text-3xl'>Cần Thơ</h2>
          </div>
          <div className="img grid grid-cols-1 md:grid-cols-3 items-center py-2">
            {renderLocation(locationCT)}
          </div>
        </div>
      </div>
    </div>
  )
}
