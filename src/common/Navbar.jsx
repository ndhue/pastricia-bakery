import { Fragment, useEffect, useRef, useState } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon, UserCircleIcon, MinusIcon, PlusIcon, TrashIcon } from "@heroicons/react/24/outline";

import { Link, useNavigate } from "react-router-dom";

import { addItem, removeItem, remove } from '../controller/cartSlice'
import { signOut } from '../controller/userSlice'
import { useDispatch, useSelector } from "react-redux";
const navigation = [
  { name: "OUR PRODUCT", href: "/pastricia-bakery/products" },
  { name: "NEW & PROMOTION", href: "/pastricia-bakery/news&promotion" },
  { name: "VISIT US", href: "/pastricia-bakery/visit-us" },
  { name: "ABOUT US", href: "/pastricia-bakery/visit-us" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ")
}

export default function Navbar() {

  // Check login
  const user = useSelector(state => state.userReducer.user)
  // sign out
  const isLogOut = () => dispatch(signOut())

  const navigate = useNavigate()
  //add to cart
  const getData = useSelector(state => state.cartReducer.carts)

  // delete cart
  const dispatch = useDispatch()
  const delet = (id) => {
    dispatch(remove(id))
  }

  // delete item
  const deletes = (id) => {
    dispatch(remove(id))
  }

  // increment item
  const increment = (e) => {
    dispatch(addItem(e))
  }

  // descriment item
  const decrement = (item) => {
    dispatch(removeItem(item))
  }

  // total prcie
  const [price, setPrice] = useState();
  useEffect(() => {
    const totals = () => {
      let price = 0
      getData.forEach((e, i) => {
        price = parseFloat(e.price) * e.qty + price
      })
      setPrice(price)
    }
    totals();
  }, [getData]);

  const toggleCart = () => {
    if (ref.current.classList.contains('translate-x-full')) {
      ref.current.classList.remove('translate-x-full')
      ref.current.classList.add('translate-x-0')
    }
    else if (!ref.current.classList.contains('translate-x-full')) {
      ref.current.classList.remove('translate-x-0')
      ref.current.classList.add('translate-x-full')
    }
  }
  const ref = useRef()
  return (
    <div className="fixed w-full z-20 border-b-2">
      <Disclosure as="nav" className="home bg-white text-tertiary">
        {({ open }) => (
          <>

            <div className="mx-auto max-w-full px-2 lg:px-8 py-2 lg:py-4">
              <div className="relative flex items-center justify-between">
                <div className="absolute inset-y-0 left-0 flex items-center lg:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 hover:bg-secondar focus:outline-none focus:ring-2 focus:ring-inset">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon
                        className="block h-10 w-10"
                        aria-hidden="true"
                      />
                    ) : (
                      <Bars3Icon
                        className="block h-10 w-10"
                        aria-hidden="true"
                      />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex flex-1 lg:flex-none items-center justify-center lg:items-stretch lg:justify-start">
                  <div className="hidden lg:ml-6 lg:block">
                    <div className="flex space-x-4">
                      <Link
                        to="/pastricia-bakery/products"
                        className=" bg-secondary hover:bg-primary rounded-sm px-4 py-2 font-medium ease-in-out duration-300"
                      >
                        OUR PRODUCTS
                      </Link>
                      <Link
                        to="/pastricia-bakery/news&promotion"
                        className=" bg-secondary hover:bg-primary rounded-sm px-4 py-2 font-medium ease-in-out duration-300"
                      >
                        NEW & PROMOTION
                      </Link>
                      <Link
                        to="/pastricia-bakery/visit-us"
                        className=" bg-secondary hover:bg-primary rounded-sm px-4 py-2 font-medium ease-in-out duration-300"
                      >
                        VISIT US
                      </Link>
                    </div>
                  </div>
                  <div className="lg:hidden flex items-center justify-center h-12 rounded-full">
                  </div>
                </div>
                <div className="absolute inset-x-0 w-28 md:w-36 lg:w-30 mx-auto mt-8 md:mt-11 rounded-full">
                  <Link to="/pastricia-bakery">
                    <img alt="logo" src="/pastricia-bakery/assets/img/Logo.png" />
                  </Link>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static lg:inset-auto lg:ml-6 lg:pr-0">
                  <Link
                    to="/pastricia-bakery/visit-us"
                    className="relative lg:block hidden bg-secondary hover:bg-primary rounded-sm px-4 py-2 font-medium ease-in-out duration-300"
                  >
                    ABOUT US
                  </Link>
                  <label className="relative lg:block hidden mx-5">
                    <span className="sr-only">Search</span>
                    <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                        />
                      </svg>
                    </span>
                    <input
                      className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-3 pl-9 pr-3 shadow-sm focus:outline-none focus:border-primary focus:ring-secondary focus:ring-1 lg:text-sm"
                      placeholder="Search for anything..."
                      type="text"
                      name="search"
                    />
                  </label>
                  {/* Profile dropdown */}
                    <Menu as="div" className="relative">
                    <div>
                      <Menu.Button className="flex rounded-full focus:outline-none focus:ring-1 focus:ring-dark focus:ring-offset-1 text-dark">
                        <span className="sr-only">Open user menu</span>
                        <UserCircleIcon className="block h-10 w-10" />
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      {user ? (
                        <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <Menu.Item>
                          {({ active }) => (
                            <Link
                              to="/pastricia-bakery/account"
                              className={classNames(
                                active ? "bg-secondary ease-in-out duration-300" : "",
                                "block px-4 py-2"
                              )}
                            >
                              Your account
                            </Link>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <Link
                              to="/pastricia-bakery/order-history"
                              className={classNames(
                                active ? "bg-secondary ease-in-out duration-300" : "",
                                "block px-4 py-2"
                              )}
                            >
                              Order History
                            </Link>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <Link
                              onClick={()=> isLogOut()}
                              className={classNames(
                                active ? "bg-secondary ease-in-out duration-300" : "",
                                "block px-4 py-2"
                              )}
                            >
                              Sign out
                            </Link>
                          )}
                        </Menu.Item>
                      </Menu.Items>
                      ) : (
                        <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <Menu.Item>
                          {({ active }) => (
                            <Link
                              to="/pastricia-bakery/sign-in"
                              className={classNames(
                                active ? "bg-secondary ease-in-out duration-300" : "",
                                "block px-4 py-2"
                              )}
                            >
                              Sign in
                            </Link>
                          )}
                        </Menu.Item>
                      </Menu.Items>
                      )}
                      
                    </Transition>
                  </Menu>
                  {/* CART */}
                  <div onClick={toggleCart} className="cursor-pointer ml-3 bg-dark rounded-full text-white h-8 w-8 flex">
                    <a role="button" className="relative flex items-center pl-[2px]">
                      <svg className="flex-1 w-7 h-7 fill-current" viewBox="0 0 24 24">
                        <path d="M17,18C15.89,18 15,18.89 15,20A2,2 0 0,0 17,22A2,2 0 0,0 19,20C19,18.89 18.1,18 17,18M1,2V4H3L6.6,11.59L5.24,14.04C5.09,14.32 5,14.65 5,15A2,2 0 0,0 7,17H19V15H7.42A0.25,0.25 0 0,1 7.17,14.75C7.17,14.7 7.18,14.66 7.2,14.63L8.1,13H15.55C16.3,13 16.96,12.58 17.3,11.97L20.88,5.5C20.95,5.34 21,5.17 21,5A1,1 0 0,0 20,4H5.21L4.27,2M7,18C5.89,18 5,18.89 5,20A2,2 0 0,0 7,22A2,2 0 0,0 9,20C9,18.89 8.1,18 7,18Z" />
                      </svg>
                      {getData.length !== 0 ? (
                        <span className="absolute right-0 top-0 rounded-full bg-red-600 w-5 h-5 p-0 m-[-4px] text-white font-mono text-sm  leading-1 text-center">
                        {getData.length}
                      </span>
                      ) : (<></>)}
                    </a>

                  </div>

                </div>
              </div>
            </div>

            <Disclosure.Panel className="lg:hidden">
              <div className="space-y-1 px-2 pt-2 pb-3">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as={Link}
                    to={item.href}
                    className="hover:bg-secondary block rounded-md px-3 py-2"
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
                <label className="relative">
                  <span className="sr-only">Search</span>
                  <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                      />
                    </svg>
                  </span>
                  <input
                    className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-primary focus:ring-secondary focus:ring-1"
                    placeholder="Search for anything..."
                    type="text"
                    name="search"
                  />
                </label>
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
      {/* CART */}
      <div ref={ref} className="sidebar absolute right-0 top-0 bg-white transition-transform translate-x-full duration-500 w-[355px] h-[100vh]">
        <div className="button text-[17px] my-6">
          <button onClick={toggleCart} className="btn bg-[#581B28] border border-[#581B28] text-[#f0d4d6] rounded-xl hover:bg-white hover:text-tertiary ease-in-out duration-500 font-bold block py-3 xs:w-40 w-52 my-4 mx-auto">Continue Shopping</button>
          <button className="btn bg-white text-tertiary border border-[#581B28] rounded-xl hover:bg-[#581B28] hover:text-[#f0d4d6] ease-in-out duration-500 font-bold block py-3 xs:w-40 w-52 mt-4 mx-auto"
            onClick={() => {
              navigate("/pastricia-bakery/checkout");
              toggleCart();
            }}
            disabled={(getData.length !== 0) ? false : true}
            >
            $$ Checkout</button>
        </div>
        <div className="items pt-2 mx-4 text-tertiary border-t-2">
          <h1 className="text-2xl">Your items</h1>
          {getData.length ? (
            <div className="py-1">
              <div className="overflow-y-auto h-[400px]">
                {getData.map(e => (
                  <div key={e.id} className="item flex items-center py-3">
                    <div className="image flex-1">
                      <img src={e.src} width="120" height="120" className="rounded-md"></img>
                    </div>
                    <div className="desc pl-6 w-[180px]">
                      <h4 className="font-bold">{e.name}</h4>
                      <p className="text-sm">${e.price}</p>
                      <div className="pt-2">
                        <button className="border border-gray-200 hover:bg-slate-100 duration-200" onClick={e.qty <= 1 ? () => deletes(e.id) : () => decrement(e)}>
                          <MinusIcon className="h-3 w-3 inline mx-2 my-1" />
                        </button>
                        <span className="mx-4"> {e.qty} </span>
                        <button className="border border-gray-200 hover:bg-slate-100 duration-200" onClick={() => increment(e)}>
                          <PlusIcon className="h-3 w-3 inline mx-2 my-1" />
                        </button>
                      </div>
                    </div>
                    <button className="hover:text-red-900 duration-200 text-red-700" onClick={() => { delet(e.id) }}>
                      <TrashIcon className="h-6 w-6" />
                    </button>
                  </div>
                ))}

              </div>
              <div className='details_total font-bold flex pt-2 pr-2 border-t-2'>
                <p className="flex-auto">Total:</p>
                <p className="text-right text-lg text-[#cf2e2e]"> ${price}.00</p>
              </div>
            </div>
          ) : (
            <div>
              <p className="text-center py-4">Your cart is empty</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}