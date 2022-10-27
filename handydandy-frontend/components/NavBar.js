import { Fragment } from 'react'
import { Disclosure, Menu, Popover, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon, UserGroupIcon, HomeIcon } from '@heroicons/react/24/outline'
import Image from 'next/image';
import logo from '../img/handydandylogo.svg';
import Link from "next/link";
import { useUser } from "@auth0/nextjs-auth0";
import { EnvelopeOpenIcon, LightBulbIcon } from "@heroicons/react/20/solid";
import LandingPage from "./LandingPage";


const navigation = [
  { name: 'Home', href: '/', icon: HomeIcon, current: true },
  { name: 'Project Ideas', href: '/project-ideas', icon: LightBulbIcon, current: false },
  { name: 'About Us', href: '/about', icon: UserGroupIcon, current: false },
  { name: 'Contact Us', href: '#', icon: EnvelopeOpenIcon, current: false },
]
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}



const userNavigation = [
  { name: 'Your Profile', href: '/profile' },
  { name: 'Settings', href: '#' },
  { name: 'Sign out', href: "/api/auth/logout" },
]

export default function NavBar() {
  const { user } = useUser()
  return (
    <Disclosure as="nav" className="bg-lightGray">
      {({ open }) => (
        <>
          <Popover
            as="header"
            className={({ open }) =>
              classNames(
                open ? 'fixed inset-0 z-40 overflow-y-auto' : '',
                'bg-white shadow-sm lg:static lg:overflow-y-visible'
              )
            }
          >
            {({ open }) => (
              <>
                <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                  <div className="relative flex justify-between lg:gap-8 xl:grid xl:grid-cols-12">
                    <div className="flex md:absolute md:inset-y-0 md:left-0 lg:static xl:col-span-2">
                      <div className="flex items-center flex-shrink-0">
                        <a href="/#">
                          <Image
                            className="block w-auto h-8"
                            src={logo}
                            width={100}
                            height={75}
                            alt="HandyDandy"
                          />
                        </a>
                      </div>
                    </div>
                    <div className="flex-1 min-w-0 md:px-8 lg:px-0 xl:col-span-6
                    ">
                      <div className="text-center text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                        <h1 className="block text-black p-3 pl-40 pb-10">Handy Dandy</h1>
                      </div>
                    </div>
                    <div className="flex items-center md:absolute md:inset-y-0 md:right-0 lg:hidden">
                      {/* Mobile menu button */}
                      <Popover.Button className="inline-flex items-center justify-center p-2 -mx-2 text-gray-400 rounded-md hover:bg-white hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-darkBlue">
                        <span className="sr-only">Open menu</span>
                        {open ? (
                          <XMarkIcon className="block w-6 h-6" aria-hidden="true" />
                        ) : (
                          <Bars3Icon className="block w-6 h-6" aria-hidden="true" />
                        )}
                      </Popover.Button>
                    </div>
                    <div className="hidden lg:flex lg:items-center lg:justify-end xl:col-span-4">

                      <a
                        href="/about"
                        className="flex-shrink-0 p-1 ml-5 text-gray-400 bg-white rounded-full hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-darkBlue focus:ring-offset-2"
                      >
                        <span className="sr-only">View notifications</span>

                        <UserGroupIcon className="w-6 h-6" aria-hidden="true" title="About Us" />

                      </a>

                      {/* Profile dropdown */}
                      {user ? <Menu as="div" className="relative flex-shrink-0 ml-5">
                        <div>
                          <Menu.Button className="flex bg-white rounded-full focus:outline-none focus:ring-2 focus:ring-darkBlue focus:ring-offset-2">
                            <span className="sr-only">Open user menu</span>
                            {user ? <img className="w-8 h-8 rounded-full" src={user.picture} alt="" /> : <p>Please Login</p>}
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
                          <Menu.Items className="absolute right-0 z-10 w-48 py-1 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            {userNavigation.map((item) => (
                              <Menu.Item key={item.name}>
                                {({ active }) => (
                                  <a
                                    href={item.href}
                                    className={classNames(
                                      active ? 'bg-gray-100' : '',
                                      'block py-2 px-4 text-sm text-gray-700'
                                    )}
                                  >
                                    {item.name}
                                  </a>
                                )}
                              </Menu.Item>
                            ))}
                          </Menu.Items>
                        </Transition>
                      </Menu> : <a href="/api/auth/login" className="inline-block rounded-md border border-transparent bg-white py-2 px-4 text-base font-medium ml-2">Login</a>}


                    </div>
                  </div>
                </div>

                <Popover.Panel as="nav" className="lg:hidden" aria-label="Global">
                  <div className="max-w-3xl px-2 pt-2 pb-3 mx-auto space-y-1 sm:px-4">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        aria-current={item.current ? 'page' : undefined}
                        className={classNames(
                          item.current ? 'bg-lightGray text-gray-900' : 'hover:bg-white',
                          'block rounded-md py-2 px-3 text-base font-medium'
                        )}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                  <div className="pt-4 border-t border-gray-200">
                    <div className="flex items-center max-w-3xl px-4 mx-auto sm:px-6">
                      <div className="flex-shrink-0">
                        {user ? <img className="w-10 h-10 rounded-full" src={user.picture} alt="" /> : <p>Please Login</p>}
                      </div>
                      <div className="ml-3">
                        {user ? <div className="text-base font-medium text-gray-800">{user.name}</div> : <p>Please Login</p>}
                        {user ? <div className="text-sm font-medium text-gray-500">{user.email}</div> : <p>Please Login</p>}
                      </div>
                      <button
                        type="button"
                        className="flex-shrink-0 p-1 ml-auto text-gray-400 bg-white rounded-full hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-darkBlue focus:ring-offset-2"
                      >
                        <span className="sr-only">View notifications</span>
                        <UserGroupIcon className="w-6 h-6" aria-hidden="true" />
                      </button>
                    </div>
                    <div className="max-w-3xl px-2 mx-auto mt-3 space-y-1 sm:px-4">
                      {userNavigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="block px-3 py-2 text-base font-medium text-gray-500 rounded-md hover:bg-white hover:text-gray-900"
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>

                </Popover.Panel>
              </>
            )}
          </Popover>
        </>
      )}
    </Disclosure>
  )
}

