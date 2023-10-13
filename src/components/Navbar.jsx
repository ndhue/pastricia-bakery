import { Fragment, useEffect, useRef, useState } from "react";
import { Disclosure, Menu, Transition, Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon, UserCircleIcon, MinusIcon, PlusIcon, TrashIcon } from "@heroicons/react/24/outline";

import { Link, useLocation, useNavigate, useParams } from "react-router-dom";

import { addItem, removeItem, remove } from '../controller/cartSlice'
import { signOut } from '../controller/userSlice'
import { useDispatch, useSelector } from "react-redux";
const navigation = [
  { name: "OUR PRODUCT", href: "/products" },
  { name: "NEW & PROMOTION", href: "/news&promotion" },
  { name: "VISIT US", href: "/visit-us" },
  { name: "ABOUT US", href: "/visit-us" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ")
}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // Check login
  const user = useSelector(state => state.userReducer.user)
  // sign out
  const isLogOut = () => dispatch(signOut())

  const navigate = useNavigate()
  //add to cart
  const cart = useSelector(state => state.cartReducer.carts)

  // delete cart
  const dispatch = useDispatch()

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
      cart.forEach((e, i) => {
        price = parseFloat(e.price) * e.qty + price
      })
      setPrice(price)
    }
    totals();
  }, [cart]);

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
                        to="/products"
                        className=" bg-secondary hover:bg-primary rounded-sm px-4 py-2 font-medium ease-in-out duration-300"
                      >
                        OUR PRODUCTS
                      </Link>
                      <Link
                        to="/news&promotion"
                        className=" bg-secondary hover:bg-primary rounded-sm px-4 py-2 font-medium ease-in-out duration-300"
                      >
                        NEW & PROMOTION
                      </Link>
                      <Link
                        to="/visit-us"
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
                  <Link to="/">
                    <img alt="logo" src="/assets/img/Logo.png" />
                  </Link>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static lg:inset-auto lg:ml-6 lg:pr-0">
                  <Link
                    to="/visit-us"
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
                                to="/account"
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
                                to="/order-history"
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
                                onClick={() => isLogOut()}
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
                                to="/sign-in"
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
                  <div onClick={() => setOpen(true)} className="cursor-pointer ml-3 bg-dark rounded-full text-white h-8 w-8 flex">
                    <a role="button" className="relative flex items-center pl-[2px]">
                      <svg className="flex-1 w-7 h-7 fill-current" viewBox="0 0 24 24">
                        <path d="M17,18C15.89,18 15,18.89 15,20A2,2 0 0,0 17,22A2,2 0 0,0 19,20C19,18.89 18.1,18 17,18M1,2V4H3L6.6,11.59L5.24,14.04C5.09,14.32 5,14.65 5,15A2,2 0 0,0 7,17H19V15H7.42A0.25,0.25 0 0,1 7.17,14.75C7.17,14.7 7.18,14.66 7.2,14.63L8.1,13H15.55C16.3,13 16.96,12.58 17.3,11.97L20.88,5.5C20.95,5.34 21,5.17 21,5A1,1 0 0,0 20,4H5.21L4.27,2M7,18C5.89,18 5,18.89 5,20A2,2 0 0,0 7,22A2,2 0 0,0 9,20C9,18.89 8.1,18 7,18Z" />
                      </svg>
                      {cart.length !== 0 && (
                        <span className="absolute right-0 top-0 rounded-full bg-red-600 w-5 h-5 p-0 m-[-4px] text-white font-mono text-sm  leading-1 text-center">
                          {cart.length}
                        </span>
                      )}
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
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-40" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-in-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                <Transition.Child
                  as={Fragment}
                  enter="transform transition ease-in-out duration-500 sm:duration-700"
                  enterFrom="translate-x-full"
                  enterTo="translate-x-0"
                  leave="transform transition ease-in-out duration-500 sm:duration-700"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-x-full"
                >
                  <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                    <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                      <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                        <div className="flex items-start justify-between">
                          <Dialog.Title className="text-lg font-medium text-gray-900">Your items ({cart.length})</Dialog.Title>
                          <div className="ml-3 flex h-7 items-center">
                            <button
                              type="button"
                              className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
                              onClick={() => setOpen(false)}
                            >
                              <span className="absolute -inset-0.5" />
                              <span className="sr-only">Close panel</span>
                              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                            </button>
                          </div>
                        </div>

                        <div className="mt-8">
                          <div className="flow-root">
                            <ul role="list" className="-my-6 divide-y divide-gray-200">
                              {cart.map(e => (
                                <li key={e.id} className="flex py-5">
                                  <p 
                                    onClick={() => {
                                      navigate(`/details/${e.id}`);
                                      setOpen(false);
                                    }}
                                    className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-20 cursor-pointer">
                                    <img
                                      src={e.src}
                                      alt="png"
                                      className="h-full w-full object-cover object-center"
                                    />
                                  </p>
                                  <div className="ml-4 flex flex-1 flex-col">
                                      <div className="flex justify-between text-base font-medium text-gray-900">
                                        <h4 
                                        onClick={() => {
                                          navigate(`/details/${e.id}`);
                                          setOpen(false);
                                        }}
                                        className="font-bold cursor-pointer">{e.name}</h4>
                                        <button className="hover:text-red-900 duration-200 text-red-700" onClick={() => { deletes(e.id) }}>
                                          <TrashIcon className="h-6 w-6" />
                                        </button>
                                      </div>
                                    <div className="flex flex-1 items-center justify-between text-sm">
                                      <div className="price">
                                        <p className="text-lg tracking-wide font-semibold text-red-800">${e.price}</p>
                                      </div>
                                      <div className="flex justify-center items-center mt-2">
                                        <button className="border border-gray-200 hover:bg-slate-100 duration-200" onClick={e.qty <= 1 ? () => deletes(e.id) : () => decrement(e)}>
                                          <MinusIcon className="h-3 w-3 inline my-1 mx-1" />
                                        </button>
                                        <span className="mx-4"> {e.qty} </span>
                                        <button className="border border-gray-200 hover:bg-slate-100 duration-200" onClick={() => increment(e)}>
                                          <PlusIcon className="h-3 w-3 inline my-1 mx-1 text-slate-700" />
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                  
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className="border-t border-gray-200 px-4 py-3 sm:px-6 flex justify-between items-center">
                        <div className='font-bold'>
                          <p className="flex-auto">Total:</p>
                          <p className="text-right text-xl text-red-700"> ${price}.00</p>
                        </div>

                        <button className="btn bg-white text-tertiary border border-[#581B28] rounded-xl hover:bg-[#581B28] hover:text-[#f0d4d6] ease-in-out duration-500 font-bold block py-3 w-40"
                          onClick={() => {
                            user ? navigate("/checkout") : navigate("/sign-in");
                            setOpen(false);
                          }}
                          disabled={(cart.length !== 0) ? false : true}
                        >
                          $$ Checkout</button>
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </div>
  );
}