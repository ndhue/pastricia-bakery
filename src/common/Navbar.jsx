import { Fragment, useRef } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon, UserCircleIcon, ShoppingCartIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
const navigation = [
  { name: "OUR PRODUCT", href: "/pastricia-bakery/products" },
  { name: "NEW & PROMOTION", href: "/pastricia-bakery/news&promotion" },
  { name: "VISIT US", href: "/pastricia-bakery/visit-us" },
  { name: "ABOUT US", href: "/pastricia-bakery/about-us" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ")
}

export default function Navbar() {
  const toggleCart = () => {
    if (ref.current.classList.contains('translate-x-full')){
      ref.current.classList.remove('translate-x-full')
      ref.current.classList.add('translate-x-0')
    }
    else if (!ref.current.classList.contains('translate-x-full')){
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
                    <a href="/pastricia-bakery">
                      <img alt="logo" src="/assets/img/Logo.png"/>
                  </a>
                </div>   
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static lg:inset-auto lg:ml-6 lg:pr-0">
                  <Link
                    to="/pastricia-bakery/about-us"
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
                        <UserCircleIcon className="block h-10 w-10"/>
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
                              to="/signout"
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
                    </Transition>
                  </Menu>
                  <div onClick={toggleCart} className="cursor-pointer ml-3 bg-dark rounded-full text-white h-8 w-8 flex">
                    <ShoppingCartIcon className="block h-6 w-6 m-auto"/>
                  </div>
                  
                </div>
              </div>
            </div>

            <Disclosure.Panel className="lg:hidden">
              <div className="space-y-1 px-2 pt-2 pb-3">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
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
      <div ref={ref} className="sidebar absolute right-0 top-0 bg-white p-10 transition-transform translate-x-full duration-500">
        <button onClick={toggleCart} className="btn bg-[#581B28] border border-[#581B28] text-[#f0d4d6] rounded-xl hover:bg-white hover:text-tertiary ease-in-out duration-300 font-bold block m-4 py-3 xs:w-40 w-52">Continue Shopping</button>
        <button className="btn bg-white border border-[#581B28] rounded-xl hover:bg-[#581B28] hover:text-[#f0d4d6] ease-in-out duration-300 font-bold block m-4 py-3 xs:w-40 w-52 ">Checkout</button>
      </div>
    </div>
  );
}
