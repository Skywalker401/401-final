import { useState } from "react";
import AboutUs from "../components/AboutUs";
import SideNav from "../components/SideNav";
import {useUser} from "@auth0/nextjs-auth0";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import axios from "axios";

export default function NewTask(props){

    const {user} = useUser();
    let today = new Date()

    const [task, setTask] = useState({
        owner:props.user.id,
        name:"",
        category:"",
        description:"",
        period_months:"",
        last_performed:today,
      })

      const handleChange = (event) => {
        setTask({ ...task, [event.target.name]: event.target.value });
      };
    
    //  handle the request
      const handleSubmit = (event) => {
  
        axios({
          method: 'post',
          url: 'https://handy-dandy.azurewebsites.net/api/create-task',
          data: {
            owner:task.owner,
            name: task.name,
            category:task.category,
            description:task.description,
            period_months:task.period_months,
            last_performed:task.last_performed  
          },
  
          headers: { Authorization: `Bearer ${props.token}` }
        }).then(console.log).catch(console.log);
      };  

    
    return (
        <>
            {user ? <div className="min-h-full">
                <div className="py-10">
                    <div
                        className="mx-auto max-w-3xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-12 lg:gap-8 lg:px-8">
                        <div className="col-span-9">
                            <form onSubmit={handleSubmit} className="w-full max-w-lg">
                                <div className="flex flex-wrap -mx-3 mb-6">
                                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                                            Task Name
                                        </label>
                                        <input name="name" onChange={handleChange} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Task Name"/>
                                            <p className="text-red-500 text-xs italic">Please fill out Name for the Task.</p>
                                    </div>
                                </div>
                                <div className="flex flex-wrap -mx-3 mb-6">
                                    <div className="w-full px-3">
                                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                                            Description
                                        </label>
                                        <input name="description" onChange={handleChange} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="text" placeholder="Description"/>
                                            <p className="text-gray-600 text-xs italic">Please Add a Description for the Task</p>
                                    </div>
                                </div>
                                <div className="flex flex-wrap -mx-3 mb-2">
                                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-city">
                                        Maintenance
                                        </label>
                                        <input name="period_months" onChange={handleChange} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="number" placeholder="6"/>
                                        <p className="text-gray-600 text-xs italic">Scheduled Routine Maintenance </p>
                                    </div>
                                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                                        <label onChange={handleChange} className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-state">
                                            Category
                                        </label>
                                        <div className="relative">
                                            <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                                                <option>Hvac</option>
                                                <option>Electrical</option>
                                                <option>Carpentry</option>
                                                <option>Plumbing</option>
                                            </select>
                                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <button onClick={handleSubmit} className="bg-mediumBlue hover:bg-lightBlue text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                                    Create Task
                                </button>
                            </form> 
                        </div>
                    </div>
                </div>
                
            </div>
                :
                <><AboutUs /> <Footer /></>
            }
            
        </>
    )
}