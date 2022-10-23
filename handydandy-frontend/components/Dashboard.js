import Link from 'next/link'
import { Fragment } from 'react'
import { Menu, Popover, Transition } from '@headlessui/react'
import {
  ChatBubbleLeftEllipsisIcon,
  CodeBracketIcon,
  EllipsisVerticalIcon,
  EyeIcon,
  FlagIcon,
  HandThumbUpIcon,
  MagnifyingGlassIcon,
  PlusIcon,
  ShareIcon,
  StarIcon,
    LightBulbIcon,
    WrenchScrewdriverIcon,
    EnvelopeOpenIcon,
    ArrowPathIcon,
    TrashIcon,
    CheckCircleIcon,


} from '@heroicons/react/20/solid'
import {
  ArrowTrendingUpIcon,
  Bars3Icon,
  BellIcon,
  FireIcon,
  HomeIcon,
  UserGroupIcon,
  XMarkIcon,

} from '@heroicons/react/24/outline'
import useApi from '../hooks/useApi';





const tabs = [
  { name: 'Maintenance Required', href: '#', current: true },
  { name: 'Home Upgrades', href: '#', current: false },
  { name: 'Completed', href: '#', current: false },
]



function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Dashboard() {
 const { data, isLoading } = useApi('https://handy-dandy.azurewebsites.net//api/v1/handydandy/private')
 const tasks = [
  {
    id: '81614',
    author: {
      name: 'Kitchen',
      imageUrl:
        'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      href: '#',
    },
    date: 'December 9 at 11:43 AM',
    datetime: '2020-12-09T11:43:00',
    href: '#',
    title: 'Replace Water Filter',
    Notes: `
      <p> ${data.message} </p>
    `,
  },
  // More questions...


]
  return (
    <>
      {/*<div className="min-h-full">*/}
        {/* When the mobile menu is open, add `overflow-hidden` to the `body` element to prevent double scrollbars */}


        {/*<div className="py-10">*/}
        {/*  <div className="mx-auto max-w-3xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-12 lg:gap-8 lg:px-8">*/}

            <main className="lg:col-span-9 xl:col-span-6">
              <div className="px-4 sm:px-0">
                <div className="sm:hidden">
                  <label htmlFor="question-tabs" className="sr-only">
                    Select a tab
                  </label>
                  <select
                    id="question-tabs"
                    className="block w-full rounded-md border-gray-300  text-base font-medium text-gray-900 shadow-sm focus:border-darkBlue focus:ring-darkBlue"
                    defaultValue={tabs.find((tab) => tab.current).name}
                  >
                    {tabs.map((tab) => (
                      <option key={tab.name}>{tab.name}</option>
                    ))}
                  </select>
                </div>
                <div className="hidden sm:block">
                  <nav className="isolate flex divide-x divide-darkBlue rounded-lg shadow bg-lightBlue" aria-label="Tabs">
                    {tabs.map((tab, tabIdx) => (
                      <a
                        key={tab.name}
                        href={tab.href}
                        aria-current={tab.current ? 'page' : undefined}
                        className={classNames(
                          tab.current ? 'text-gray-900' : 'text-gray-500 hover:text-gray-700',
                          tabIdx === 0 ? 'rounded-l-lg' : '',
                          tabIdx === tabs.length - 1 ? 'rounded-r-lg' : '',
                          'group relative min-w-0 flex-1 overflow-hidden bg-white py-4 px-6 text-sm font-medium text-center hover:bg-lightGray focus:z-10'
                        )}
                      >
                        <span>{tab.name}</span>
                        <span
                          aria-hidden="true"
                          className={classNames(
                            tab.current ? 'bg-lightGray' : 'bg-transparent',
                            'absolute inset-x-0 bottom-0 h-0.5'
                          )}
                        />
                      </a>
                    ))}
                  </nav>
                </div>
              </div>
              <div className="mt-4">
                <h1 className="sr-only">Upcoming Maintenance</h1>
                <ul role="list" className="space-y-4">
                  {tasks.map((tasks) => (
                    <li key={tasks.id} className="bg-white px-4 py-6 shadow sm:rounded-lg sm:p-6">
                      <article aria-labelledby={'question-title-' + tasks.id}>
                        <div>
                          <div className="flex space-x-3">
                            <div className="flex-shrink-0">
                              {/*<img className="h-10 w-10 rounded-full" src={tasks.author.imageUrl} alt="" />*/}
                              <WrenchScrewdriverIcon className="h-5 w-5" aria-hidden="true"/>
                            </div>
                            <div className="min-w-0 flex-1">
                              <p className="text-sm font-medium text-gray-900">
                                <a href={tasks.author.href} className="hover:underline">
                                  {tasks.author.name}
                                </a>
                              </p>
                              <p className="text-sm text-gray-500">
                                <a href={tasks.href} className="hover:underline">
                                  <time dateTime={tasks.datetime}>{tasks.date}</time>
                                </a>
                              </p>
                            </div>
                            <div className="flex flex-shrink-0 self-center">
                              <Menu as="div" className="relative inline-block text-left">
                                <div>
                                  <Menu.Button className="-m-2 flex items-center rounded-full p-2 text-gray-400 hover:text-gray-600">
                                    <span className="sr-only">Open options</span>
                                    <EllipsisVerticalIcon className="h-5 w-5" aria-hidden="true" />
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
                                  <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                    <div className="py-1">
                                      <Menu.Item>
                                        {({ active }) => (
                                          <a
                                            href="#"
                                            className={classNames(
                                              active ? 'bg-red-100 text-gray-900' : 'text-gray-700',
                                              'flex px-4 py-2 text-sm'
                                            )}
                                          >
                                            <ArrowPathIcon className="mr-3 h-5 w-5 text-gray-400" aria-hidden="true" />
                                            <span>Update Task</span>
                                          </a>
                                        )}
                                      </Menu.Item>
                                      <Menu.Item>
                                        {({ active }) => (
                                          <a
                                            href="#"
                                            className={classNames(
                                              active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                              'flex px-4 py-2 text-sm'
                                            )}
                                          >
                                            <CheckCircleIcon
                                              className="mr-3 h-5 w-5 text-gray-400"
                                              aria-hidden="true"
                                            />
                                            <span>Mark Complete</span>
                                          </a>
                                        )}
                                      </Menu.Item>
                                      <Menu.Item>
                                        {({ active }) => (
                                          <a
                                            href="#"
                                            className={classNames(
                                              active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                              'flex px-4 py-2 text-sm'
                                            )}
                                          >
                                            <TrashIcon className="mr-3 h-5 w-5 text-gray-400" aria-hidden="true" />
                                            <span>Remove Task</span>
                                          </a>
                                        )}
                                      </Menu.Item>
                                    </div>
                                  </Menu.Items>
                                </Transition>
                              </Menu>
                            </div>
                          </div>
                          <h2 id={'question-title-' + tasks.id} className="mt-4 text-base font-medium text-gray-900">
                            {tasks.title}
                          </h2>
                        </div>
                        { data ? <div
                          className="mt-2 space-y-4 text-sm text-gray-700"
                          dangerouslySetInnerHTML={{ __html: tasks.Notes }}
                        /> : <p>No Data Available</p>}
                      </article>
                    </li>
                  ))}
                </ul>
              </div>
            </main>
            <aside className="hidden xl:col-span-4 xl:block">
              <div className="sticky top-4 space-y-4">


              </div>
            </aside>
        {/*  </div>*/}
        {/*</div>*/}
      {/*</div>*/}
    </>
  )
}
