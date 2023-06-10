import React, { useEffect, useState } from 'react';

export default function Account() {
  const [method, setMethod] = useState("");
  const handleOnSubmit = (e) => {
    e.preventDefault();
    alert('Information Updated');
    setMethod("");
    refresh();
  };

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
            <button
                    onClick={() => {
                      setMethod("EDIT");}}
                    className="object-left rounded-md bg-gray-400 py-2 px-3 shadow-sm hover:bg-gray-500 ease-in-out duration-300 text-white m-2"
                  >
                    Edit your profile
                  </button>
          </div>
          <div className="mt-5 md:col-span-2 md:mt-0">
            <form onSubmit={handleOnSubmit}>
              <div className="overflow-hidden shadow sm:rounded-md">
                <div className="px-4 py-5 sm:p-6">
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="first-name" className="block">
                        First name
                      </label>
                      <input
                        type="text"
                        name="first-name"
                        id="first-name"
                        autoComplete="given-name"
                        className="mt-2 block w-full border border-slate-300 rounded-md p-3 shadow-sm focus:outline-none focus:border-primary focus:ring-secondary focus:ring-1"
                        disabled={method==='EDIT'?false:true}
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="last-name" className="block">
                        Last name
                      </label>
                      <input
                        type="text"
                        name="last-name"
                        id="last-name"
                        autoComplete="family-name"
                        className="mt-2 block w-full border border-slate-300 rounded-md p-3 shadow-sm focus:outline-none focus:border-primary focus:ring-secondary focus:ring-1"
                        disabled={method==='EDIT'?false:true}
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-4">
                      <label htmlFor="email-address" className="block">
                        Email address
                      </label>
                      <input
                        type="text"
                        name="email-address"
                        id="email-address"
                        autoComplete="email"
                        className="mt-2 block w-full border border-slate-300 rounded-md p-3 shadow-sm focus:outline-none focus:border-primary focus:ring-secondary focus:ring-1"
                        disabled={method==='EDIT'?false:true}
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="country" className="block">
                        Country
                      </label>
                      <select
                        id="country"
                        name="country"
                        autoComplete="country-name"
                        className="mt-2 block w-full border border-slate-300 rounded-md p-3 shadow-sm focus:outline-none focus:border-primary focus:ring-secondary focus:ring-1"
                        disabled={method==='EDIT'?false:true}
                      >
                        <option>United States</option>
                        <option>Canada</option>
                        <option>Mexico</option>
                      </select>
                    </div>

                    <div className="col-span-6">
                      <label htmlFor="street-address" className="block">
                        Street address
                      </label>
                      <input
                        type="text"
                        name="street-address"
                        id="street-address"
                        autoComplete="street-address"
                        className="mt-2 block w-full border border-slate-300 rounded-md p-3 shadow-sm focus:outline-none focus:border-primary focus:ring-secondary focus:ring-1"
                        disabled={method==='EDIT'?false:true}
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                      <label htmlFor="city" className="block">
                        City
                      </label>
                      <input
                        type="text"
                        name="city"
                        id="city"
                        autoComplete="address-level2"
                        className="mt-2 block w-full border border-slate-300 rounded-md p-3 shadow-sm focus:outline-none focus:border-primary focus:ring-secondary focus:ring-1"
                        disabled={method==='EDIT'?false:true}
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                      <label htmlFor="region" className="block">
                        State / Province
                      </label>
                      <input
                        type="text"
                        name="region"
                        id="region"
                        autoComplete="address-level1"
                        className="mt-2 block w-full border border-slate-300 rounded-md p-3 shadow-sm focus:outline-none focus:border-primary focus:ring-secondary focus:ring-1"
                        disabled={method==='EDIT'?false:true}
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                      <label htmlFor="postal-code" className="block0">
                        ZIP / Postal code
                      </label>
                      <input
                        type="text"
                        name="postal-code"
                        id="postal-code"
                        autoComplete="postal-code"
                        className="mt-2 block w-full border border-slate-300 rounded-md p-3 shadow-sm focus:outline-none focus:border-primary focus:ring-secondary focus:ring-1"
                        disabled={method==='EDIT'?false:true}
                      />
                    </div>
                  </div>
                </div>
                <div className="px-4 pb-5 text-right sm:px-6">
                  <button
                    disabled={method==='EDIT'?false:true}
                    className="inline-flex justify-center rounded-md bg-secondary py-2 px-3 text-white shadow-sm hover:bg-primary ease-in-out duration-300"
                  >
                    Save
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
