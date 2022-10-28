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
import Task from '../Task.js';



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


export default function Registered(props) {
  // const { data, isLoading } = useApi('https://handy-dandy.azurewebsites.net/api/get-user')
  const tasks = props.user[1];
  const data2 = props.user[0]
  const token = props.token;
  const [isChecked, setIsChecked] = useState(false);
  // const [isCheckedPros, setIsCheckedPros] = useState(false);



  const handleChange = (event) => {
    if (isChecked) {
      setIsChecked(false)
    } else {
      setIsChecked(true)
    }
  };


  // const handleChangePros = () => {
  //   if (isCheckedPros) {
  //     setIsCheckedPros(false)
  //   } else {
  //     setIsCheckedPros(true)
  //   }
  // };

  // const deleteTask = (id) => {
  //   axios({
  //     method: 'post',
  //     url: 'https://handy-dandy.azurewebsites.net/api/delete-task',
  //     data: {
  //       id: id
  //     },

  //     headers: { Authorization: `Bearer ${props.token}` }
  //   }).then(() => props.setData([data2, tasks.filter(task => task.id !== id)])).catch(console.log);
  // };




  return (
    <>
      <main className="flex-grow lg:col-span-9 xl:col-span-6">
        <div className="px-4 sm:px-0">
          <div className="sm:hidden">
            <label htmlFor="task-tabs" className="sr-only">
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
          <div className="flex justify-center mb-10">
            <button onClick={handleChange} className="inline-flex items-center px-4 py-2 font-bold text-gray-800 rounded bg-lightBlue hover:bg-gray-400">
              <svg className="w-4 h-4 mr-2 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" /></svg>
              <span>New Task</span>
            </button>
          </div>
          <div>
            {isChecked ? <NewTask setIsChecked={setIsChecked} setData={props.setData} user={data2} tasks={tasks} token={token} /> : null}
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


            {tasks.map((task) => (
              <li key={task.id} className={!isOverdue(task) ? "px-4 py-6 bg-white shadow sm:rounded-lg sm:p-6" : "px-4 py-6 bg-rose shadow sm:rounded-lg sm:p-6"}>
                <Task task={task} tasks={tasks} data2={data2} token={token} user={props.user} setData={props.setData} />
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
