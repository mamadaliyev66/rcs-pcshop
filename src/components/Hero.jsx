import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import PC_ICON from "../assets/pcimg.jpg"
import { Link } from 'react-router-dom'

import Background from '../assets/background.jpg'
export default function Hero() {
  return (
    <div className={"bg-no-repeat bg-fixed bg-center	bg-cover bg-[url('https://firebasestorage.googleapis.com/v0/b/myapp-19322.appspot.com/o/pexels-nikolaos-dimou-2473183.jpg?alt=media&token=4d4c84f3-0d30-42be-b1cb-ec250be424a6')]"}>
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          
        </div>
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Xush Kelibsiz!
            </h1>
            <p className="mt-6 text-lg leading-8 text-purple-300">
              Uzbekistondagi eng zo'r va arzon kompyuter va kompyuter ehtiyot qisimlarini bizning do'kondan xarid qiling !
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                to={'/products'}
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Ko'rish
              </Link>
              
            </div>
          </div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-50rem)]"
          aria-hidden="true"
        >
          
        </div>
      </div>
    </div>
  )
}
