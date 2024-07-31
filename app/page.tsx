import Image from "next/image";


'use client'

import { useState } from 'react'

import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from '@headlessui/react'
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'

const products = [
  { name: 'Analytics', description: 'Get a better understanding of your traffic', href: '#', icon: ChartPieIcon },
  { name: 'Engagement', description: 'Speak directly to your customers', href: '#', icon: CursorArrowRaysIcon },
  { name: 'Security', description: 'Your customers’ data will be safe and secure', href: '#', icon: FingerPrintIcon },
  { name: 'Integrations', description: 'Connect with third-party tools', href: '#', icon: SquaresPlusIcon },
  { name: 'Automations', description: 'Build strategic funnels that will convert', href: '#', icon: ArrowPathIcon },
]


const callsToAction = [
  { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
  { name: 'Contact sales', href: '#', icon: PhoneIcon },
]

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="bg-white">
      <header className="bg-white drop-shadow-sm">
      <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8 ">
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img alt="" src="assets/Logo SIMANGCEKRAGA_4 1.png" className="h-10 w-auto"/>
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900 w-auto mt-3">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
            </svg>
          </a>
          <a href="#" className="text-sm font-semibold  text-gray-900 ml-6 mt-3">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M3.124 7.5A8.969 8.969 0 0 1 5.292 3m13.416 0a8.969 8.969 0 0 1 2.168 4.5" />
            </svg>
          </a>

          <div className="h-14 bg-slate-200 w-[1px] leading-6 ml-9"></div>

          <div>
            <a href="#" className="text-xs font-semibold leading-3 text-gray-900 ml-7">
            Hary Maguare, S.Kom
            </a><br />
            <a href="#" className="text-xs font-semibold leading-3 text-gray-400 ml-7">
            NIP.196838423493
            </a>
          
          </div>

          <div>
            <img alt="" src="assets/image 4.png" className="w-10 h-10 rounded-full leading-6 text-gray-900 ml-3"/>
          </div>
          {/* <a href="#" className="text-sm font-semibold leading-6 text-gray-900 ml-9">
            Log in <span aria-hidden="true">&rarr;</span>
          </a> */}

        </div>
      </nav>

      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                alt=""
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                className="h-8 w-auto"
              />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                    Product
                    <ChevronDownIcon aria-hidden="true" className="h-5 w-5 flex-none group-data-[open]:rotate-180" />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-2">
                    {[...products, ...callsToAction].map((item) => (
                      <DisclosureButton
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      >
                        {item.name}
                      </DisclosureButton>
                    ))}
                  </DisclosurePanel>
                </Disclosure>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Features
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Marketplace
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Company
                </a>
              </div>
              <div className="py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Log in
                </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
      </header>
      
      <div className="bg-white pt-14 pb-1">
        <div className="mx-auto max-w-10xl px-2 lg:px-2">
          <a href="/cart">
            <div className="mx-auto max-w-6xl lg:text-left">
              <p className="mt- text-3xl font-bold tracking-tight text-gray-900 sm:text-2xl">
                Selamat Datang Dibooking lapangan kota palembang 
              </p>
              <div className="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96 lg:text-center">
                <div className="p-6">
                  <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                  <img alt="" src="assets/schedule.png" className="h-12 ml-[150px]"/>
                  </h5>
                </div>
                <div className="p-6 pt-0">
                  <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                    Booking Lapangan
                  </h5>
                </div>
              </div> 
            </div>
          </a>
        </div>
      </div>
      
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Lapangan Dikota Palembang</h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            <div className="group relative border border-black">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img alt="" src=""
                  className="h-2 w-full object-cover object-center lg:h-2 lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                <div className="font-bold text-white rounded-full bg-orange-500 flex items-center justify-center font-mono text-xs">Lapangan Bola</div>
                  <h3 className="text-lg text-gray-700">
                    <a href="">
                      <span aria-hidden="true" className="absolute inset-0" />
                      Lapangan Bola Kamboja
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">Mayor Sentosa, Palembang</p>
                  <p className="mt-1 text-sm text-gray-500 text-orange-500">Lihat Lapangan</p>
                </div>
              </div>
            </div>
            <div className="group relative border border-black">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img alt="" src=""
                  className="h-2 w-full object-cover object-center lg:h-2 lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                <div className="font-bold text-white rounded-full bg-orange-500 flex items-center justify-center font-mono text-xs">Lapangan Bola</div>
                  <h3 className="text-lg text-gray-700">
                    <a href="">
                      <span aria-hidden="true" className="absolute inset-0" />
                      Lapangan Bola Kamboja
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">Mayor Sentosa, Palembang</p>
                  <p className="mt-1 text-sm text-gray-500 text-orange-500">Lihat Lapangan</p>
                </div>
              </div>
            </div>
            <div className="group relative border border-black">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img alt="" src=""
                  className="h-2 w-full object-cover object-center lg:h-2 lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                <div className="font-bold text-white rounded-full bg-orange-500 flex items-center justify-center font-mono text-xs">Lapangan Bola</div>
                  <h3 className="text-lg text-gray-700">
                    <a href="">
                      <span aria-hidden="true" className="absolute inset-0" />
                      Lapangan Bola Kamboja
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">Mayor Sentosa, Palembang</p>
                  <p className="mt-1 text-sm text-gray-500 text-orange-500">Lihat Lapangan</p>
                </div>
              </div>
            </div>
            <div className="group relative border border-black">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img alt="" src=""
                  className="h-2 w-full object-cover object-center lg:h-2 lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                <div className="font-bold text-white rounded-full bg-orange-500 flex items-center justify-center font-mono text-xs">Lapangan Bola</div>
                  <h3 className="text-lg text-gray-700">
                    <a href="">
                      <span aria-hidden="true" className="absolute inset-0" />
                      Lapangan Bola Kamboja
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">Mayor Sentosa, Palembang</p>
                  <p className="mt-1 text-sm text-gray-500 text-orange-500">Lihat Lapangan</p>
                </div>
              </div>
            </div>
        </div>
        
      </div>
      

    </div>
    
    
  )
}

