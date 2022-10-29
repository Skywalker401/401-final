
import Pros from './dashboard/Pros.js';
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import referToWikihow from '../utils/referToWikihow.js';
import { useState } from 'react';
import axios from 'axios';

import {
  EllipsisVerticalIcon,
  WrenchScrewdriverIcon,
  ArrowPathIcon,
  TrashIcon,
  CheckCircleIcon,


} from '@heroicons/react/20/solid'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Task(props) {
  const [isCheckedPros, setIsCheckedPros] = useState(false);

  const handleChangePros = () => {
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
    }).then(() => props.setData([props.data2, props.tasks.filter(task => task.id !== id)])).catch(console.log);
  };

  const getDueDate = (last_performed, period_months) => {
    const last_d = new Date(last_performed)
    const next_performed = new Date(last_d.getTime() + period_months * 2629800000)
    let next_date = next_performed.getDate();
    let next_month = next_performed.getMonth() + 1;
    let next_year = next_performed.getFullYear();
    let next = next_year + "-" + next_month + "-" + next_date;
    return next
  }


  return (
    <article aria-labelledby={'task-title-' + props.task.id}>
      <div>
        <div className="flex space-x-3">
          <div className="flex-shrink-0">
            <WrenchScrewdriverIcon className="w-5 h-5" aria-hidden="true" />
          </div>
          <div className="flex-1 min-w-0">

            <p className="text-sm ">
              <a href="" className="hover:underline">
                <time dateTime={props.task.period_months}>Service Interval: {props.task.period_months} months</time>
              </a>
              <p className="text-sm ">Due Date: {getDueDate(props.task.last_performed, props.task.period_months)}</p>
            </p>
          </div>
          <div className="flex self-center flex-shrink-0">
            <Menu as="div" className="relative inline-block text-left">
              <div>
                <Menu.Button className="flex items-center p-2 -m-2 text-gray-400 rounded-full">
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
                            active ? 'bg-red-100 text-black' : 'text-black',
                            'flex px-4 py-2 text-sm'
                          )}
                        >
                          <ArrowPathIcon className="w-5 h-5 mr-3" aria-hidden="true" />
                          <span>Update Task</span>
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(
                            active ? 'bg-gray-100 text-black' : 'text-black',
                            'flex px-4 py-2 text-sm'
                          )}
                        >
                          <CheckCircleIcon
                            className="w-5 h-5 mr-3 text-black"
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
                            active ? 'bg-gray-100 text-black' : 'text-black',
                            'flex px-4 py-2 text-sm'
                          )}
                        >
                          <TrashIcon className="w-5 h-5 mr-3 text-black" aria-hidden="true" />
                          <span onClick={() => deleteTask(props.task.id)}>Remove Task</span>
                        </a>
                      )}
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
        </div>

        <h2 id={'question-title-' + props.task.id} className="mt-4 text-2xl font-medium text-center ">
          {props.task.name}
        </h2>
        <p className="my-2 text-xs italic text-center ">Category: {props.task.category}</p>
        {props.user ? <div
          className="mt-2 space-y-4 text-sm text-center "
          dangerouslySetInnerHTML={{ __html: props.task.description }}
        /> : <p>No Data Available</p>}
        <div className="flex justify-between mt-4">
          <button onClick={() => handleChangePros()}
            type="button"
            className="inline-flex px-4 py-2 text-base font-semibold text-white border border-transparent rounded-md shadow-sm bg-gradient-to-r from-darkBlue to-lightBlue bg-origin-border"
          >
            PRO
          </button>
          <button onClick={() => referToWikihow(props.task.name)}
            type="button"
            className="inline-flex px-4 py-2 text-base font-medium text-white border border-transparent rounded-md shadow-sm bg-gradient-to-r from-darkBlue to-lightBlue bg-origin-border"
          >
            DIY
          </button>
        </div>
        <div>
          {isCheckedPros ? <Pros zip={props.data2.zip} token={props.token} task={props.task} /> : null}
        </div>
      </div>

    </article>
  )
}