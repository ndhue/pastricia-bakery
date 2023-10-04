import React, { useState } from 'react';
import { useSelector } from 'react-redux';
export const Account = () => {
  const user = useSelector(state => state.userReducer.user)

  return (
    <div className='text-tertiary pt-[140px]'>
      <div className="text-3xl lg:text-4xl text-center bg-secondary py-6">
        <h1>MY ACCOUNT</h1>
      </div>
      <div className="my-4 max-w-7xl mx-auto">
        <div className="py-4 md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0">
              <h3 className="text-3xl font-semibold leading-6">Personal Information</h3>
              <p className="mt-2">Use a permanent address where you can receive mail.</p>
            </div>
          </div>
          <div className="mt-5 md:col-span-2 md:mt-0">
            <form>
              <div className="overflow-hidden shadow sm:rounded-md">
                <div className="px-4 py-5 sm:p-6">
                  {user ? (
                    <div className="grid grid-cols-6 gap-6">
                      <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="first-name" className="block">
                          First name
                        </label>
                        <input
                          type="text"
                          name="fName"
                          id="first-name" 
                          value={user.fName}
                          className="mt-2 block w-full border border-slate-300 rounded-md p-3 shadow-sm focus:outline-none focus:border-primary focus:ring-secondary focus:ring-1"
                          disabled
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="last-name" className="block">
                          Last name
                        </label>
                        <input
                          type="text"
                          name="lName"
                          id="last-name"
                          value={user.lName}
                          className="mt-2 block w-full border border-slate-300 rounded-md p-3 shadow-sm focus:outline-none focus:border-primary focus:ring-secondary focus:ring-1"
                          disabled
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="email-address" className="block">
                          Email address
                        </label>
                        <input
                          type="text"
                          name="email"
                          id="email-address" 
                          value={user.email}
                          className="mt-2 block w-full border border-slate-300 rounded-md p-3 shadow-sm focus:outline-none focus:border-primary focus:ring-secondary focus:ring-1"
                          disabled
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="number" className="block">
                          Phone number
                        </label>
                        <input
                          type="number"
                          name="number"
                          id="number"
                          value={user.phone}
                          className="mt-2 block w-full border border-slate-300 rounded-md p-3 shadow-sm focus:outline-none focus:border-primary focus:ring-secondary focus:ring-1"
                          disabled
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="street-address" className="block">
                          Street address
                        </label>
                        <input
                          type="text"
                          name="address"
                          id="street-address"
                          value={user.address}
                          className="mt-2 block w-full border border-slate-300 rounded-md p-3 shadow-sm focus:outline-none focus:border-primary focus:ring-secondary focus:ring-1"
                          disabled
                        />
                      </div>
                    </div>
                  ) : (<></>)}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}