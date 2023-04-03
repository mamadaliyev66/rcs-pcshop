import React from 'react'
import Logo from "../assets/forrek.png"
import PC_ICON from "../assets/pc_icon.svg"
import SP from "../assets/sp_icon.svg"
import { Link } from 'react-router-dom'
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { useParams,Routes,Route } from 'react-router-dom'
const navigation = [
  { name: 'Bosh Sahifa ', href: '/', current: false },
  { name: 'Biz Haqimizda', href: '/about', current: false },
  { name: 'Kompyuterlar', href: '/products', current: false },
  { name: 'Ehtiyot Qismlar', href: '/ehtiyot-qismlar', current: false },
  { name: 'Bog`lanish', href: '/contact', current: false },
]

function classNames(...classes) {return classes.filter(Boolean).join(' ')}


export default function Navbar() {

  return (
      <Disclosure as="nav" className="bg-[#0B0C10]">
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
              <div className="relative flex h-16 items-center justify-between">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2  text-[#66FCF1]  hover:bg-yellow-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="flex flex-shrink-0 items-center">
                    <img
                      className="block h-8 w-auto lg:hidden"
                      src={Logo}
                      alt="Your Company"
                    />
                    <img
                      className="hidden h-10 w-auto lg:block"
                      src={Logo}
                      alt="Your Company"
                    />
                  </div>
                  <div className="hidden  sm:ml-6 sm:block">
                    <div className="flex space-x-4">
                      {navigation.map((item) => (
                        <Link 

                          key={item.name}
                          to={item.href}
                          className={classNames(
                            item.current ? '  text-[#66FCF1] ' : ' text-[#66FCF1]  hover:bg-[#66FCF1] hover:text-[#0B0C10]',
                            'rounded-md px-3 py-2 text-sm font-medium'
                          )}
                          aria-current={item.current ? 'page' : undefined}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
                
              </div>
            </div>
  
            <Disclosure.Panel className="sm:hidden">
              <div className="space-y-1 px-2 pb-3 pt-2">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={classNames(
                      item.current ? ' text-white' : ' text-[#66FCF1]  hover:bg-[#45A29E] hover:text-white',
                      'block rounded-md px-3 py-2 text-base font-medium'
                    )}
                    aria-current={item.current ? 'page' : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    )
  }
  









