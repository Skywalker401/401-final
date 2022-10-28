
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


  return (
    <article aria-labelledby={'task-title-' + props.tasks.id}>
      <div>
        <div className="flex space-x-3">
          <div className="flex-shrink-0">
            <WrenchScrewdriverIcon className="w-5 h-5" aria-hidden="true" />
          </div>
          <div className="flex-1 min-w-0">

            <p className="text-sm text-gray-500">
              <a href={props.tasks.name} className="hover:underline">
                <time dateTime={props.tasks.period_months}>Service Interval: {props.tasks.period_months}</time>
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
                          <span onClick={() => deleteTask(props.tasks.id)}>Remove Task</span>
                        </a>
                      )}
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
        </div>

        <h2 id={'question-title-' + props.tasks.id} className="mt-4 text-base font-medium text-gray-900">
          {props.tasks.name}
        </h2>
        {props.user ? <div
          className="mt-2 space-y-4 text-sm text-gray-700"
          dangerouslySetInnerHTML={{ __html: props.tasks.description }}
        /> : <p>No Data Available</p>}
        <button onClick={() => referToWikihow(props.tasks.name)}>DIY</button><br />
        <button onClick={() => handleChangePros()} >PRO</button>
        <div>
          {isCheckedPros ? <Pros zip={props.data2.zip} token={props.token} /> : null}
        </div>
      </div>

    </article>
  )
}