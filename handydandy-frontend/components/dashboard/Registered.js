import { useEffect, useReducer, useState } from 'react';
import NewTask from './new-task.js';
import Pros from './Pros.js';
import { Fragment } from 'react'
import { Menu, Popover, Transition } from '@headlessui/react'
import { useUser } from '@auth0/nextjs-auth0';
import referToWikihow from '../../utils/referToWikihow.js';
import useApi from '../../hooks/useApi';
import axios from 'axios';
import {
  EllipsisVerticalIcon,
  WrenchScrewdriverIcon,
  ArrowPathIcon,
  TrashIcon,
  CheckCircleIcon,


} from '@heroicons/react/20/solid'
import { data } from 'autoprefixer';

const tabs = [
  { name: 'Incomplete', href: '#', current: true },
  { name: 'Completed', href: '#', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function isOverdue(task) {
  let last = task.last_performed
  let period = task.period_months
  let lastDay = new Date(last)
  let today = new Date()
  let timediff = today - lastDay
  if (period * 2629800000 <= timediff) {
    return true
  } else {
    return false
  }
}

function useForceUpdate() {
  const [value, setValue] = useState(0); // integer state
  return () => setValue(value => value + 1); // update state to force render
  // An function that increment 👆🏻 the previous state like here 
  // is better than directly setting `value + 1`
}

export default function Registered(props) {
  // const { data, isLoading } = useApi('https://handy-dandy.azurewebsites.net/api/get-user')
  const tasks = props.user[1];
  const data2 = props.user[0]
  const token = props.token;
  const [isChecked, setIsChecked] = useState(false);
  const [isCheckedPros, setIsCheckedPros] = useState(false);
  const [refresh, setRefresh] = useState(false);

  const doRefresh = () => {
    setRefresh(true)
  }





  const handleChange = (event) => {
    if (isChecked) {
      setIsChecked(false)
    } else {
      setIsChecked(true)
    }
  };


  const handleChangePros = (event) => {
    if (isCheckedPros) {
      setIsCheckedPros(false)
    } else {
      setIsCheckedPros(true)
    }
  };

  const deleteTask = (id) => {
    axios({
      method: 'post',
      url: 'https://handy-dandy.azurewebsites.net/api/delete-task',
      data: {
        id: id
      },

      headers: { Authorization: `Bearer ${props.token}` }
    }).then(() => props.setData([data2, tasks.filter(task => task.id !== id)])).catch(console.log);
  };




  return (
    <>
      <main className="lg:col-span-9 xl:col-span-6">
        <div className="px-4 sm:px-0">
          <div className="sm:hidden">
            <label htmlFor="question-tabs" className="sr-only">
              Select a tab
            </label>
            <select
              id="task-tabs"
              className="block w-full text-base font-medium text-gray-900 border-gray-300 rounded-md shadow-sm focus:border-darkBlue focus:ring-darkBlue"
              defaultValue={tabs.find((tab) => tab.current).name}
            >
              {tabs.map((tab) => (
                <option key={tab.name}>{tab.name}</option>
              ))}
            </select>
          </div>
          <button onClick={handleChange} className="inline-flex items-center px-4 py-2 font-bold text-gray-800 rounded bg-lightBlue hover:bg-gray-400">
            <svg className="w-4 h-4 mr-2 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" /></svg>
            <span>New Task</span>
          </button>
          <div>
            {isChecked ? <NewTask doRefresh={doRefresh} setData={props.setData} user={data2} tasks={tasks} token={token} /> : null}
          </div>
          <div className="hidden sm:block">
            <nav className="flex divide-x rounded-lg shadow isolate divide-darkBlue bg-lightBlue" aria-label="Tabs">
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
              <li key={tasks.id} className={!isOverdue(tasks) ? "px-4 py-6 bg-white shadow sm:rounded-lg sm:p-6" : "px-4 py-6 bg-rose shadow sm:rounded-lg sm:p-6"}>
                <article aria-labelledby={'task-title-' + tasks.id}>
                  <div>
                    <div className="flex space-x-3">
                      <div className="flex-shrink-0">
                        <WrenchScrewdriverIcon className="w-5 h-5" aria-hidden="true" />
                      </div>
                      <div className="flex-1 min-w-0">

                        <p className="text-sm text-gray-500">
                          <a href={tasks.name} className="hover:underline">
                            <time dateTime={tasks.period_months}>Service Interval: {tasks.period_months}</time>
                          </a>
                        </p>
                      </div>
                      <div className="flex self-center flex-shrink-0">
                        <Menu as="div" className="relative inline-block text-left">
                          <div>
                            <Menu.Button className="flex items-center p-2 -m-2 text-gray-400 rounded-full hover:text-gray-600">
                              <span className="sr-only">Open options</span>
                              <EllipsisVerticalIcon className="w-5 h-5" aria-hidden="true" />
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
                            <Menu.Items className="absolute right-0 z-10 w-56 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
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
                                      <ArrowPathIcon className="w-5 h-5 mr-3 text-gray-400" aria-hidden="true" />
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
                                        className="w-5 h-5 mr-3 text-gray-400"
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
                                      <TrashIcon className="w-5 h-5 mr-3 text-gray-400" aria-hidden="true" />
                                      <span onClick={() => deleteTask(tasks.id)}>Remove Task</span>
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
                      {tasks.name}
                    </h2>
                    {props.user ? <div
                      className="mt-2 space-y-4 text-sm text-gray-700"
                      dangerouslySetInnerHTML={{ __html: tasks.description }}
                    /> : <p>No Data Available</p>}
                    <button onClick={() => referToWikihow(tasks.name)}>DIY</button><br />
                    <button onClick={handleChangePros} >PRO</button>
                    <div>
                      {isCheckedPros ? <Pros zip={data2.zip} token={token} /> : null}
                    </div>
                  </div>

                </article>
              </li>
            ))}
          </ul>
        </div>
      </main>
      <aside className="hidden xl:col-span-4 xl:block">
        <div className="sticky space-y-4 top-4">
        </div>
      </aside>
    </>
  )
}
