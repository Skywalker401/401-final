import { useState } from "react";
import { useUser } from "@auth0/nextjs-auth0";
import axios from "axios";

export default function NewTask(props) {

    const { user } = useUser();

    const [task, setTask] = useState({
        owner: props.user.id,
        name: "",
        category: "",
        description: "",
        period_months: "",
        months_ago: 0,
    })



    const handleChange = (event) => {
        setTask({ ...task, [event.target.name]: event.target.value });
    };

    //  handle the request
    const handleSubmit = () => {
        let d = new Date();
        let last_d = new Date(d - task.months_ago * 2629800000)
        console.log(d, last_d)
        let curr_date = last_d.getDate();
        let curr_month = last_d.getMonth() + 1;
        let curr_year = last_d.getFullYear();
        let last = curr_year + "-" + curr_month + "-" + curr_date;
        props.setIsChecked(false)
        parseFloat(task.period_months);
        axios({
            method: 'post',
            url: 'https://handy-dandy.azurewebsites.net/api/create-task',
            data: {
                owner: task.owner,
                name: task.name,
                category: task.category,
                description: task.description,
                period_months: task.period_months,
                last_performed: last
            },

            headers: { Authorization: `Bearer ${props.token}` }
        })
            .then((res) => {
                if (res.status === 200) {
                    props.setData([props.user, [...props.tasks, res.data]])
                } else {
                    console.error("unable to add task")
                }
            })
            .catch(console.log);

    };


    return (
        <>
            {user && <div className="min-h-full">
                <div className="py-10">
                    <div
                        className="max-w-3xl mx-auto sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-12 lg:gap-8 lg:px-8">
                        <div className="col-span-9">
                            <form className="w-full max-w-lg">
                                <div className="flex flex-wrap mb-6 -mx-3">
                                    <div className="w-full px-3 mb-6 md:w-1/2 md:mb-0">
                                        <label className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase" htmlFor="grid-first-name">
                                            Task Name
                                        </label>
                                        <input name="name" onChange={handleChange} className="block w-full px-4 py-3 mb-3 leading-tight  border  rounded appearance-none focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Task Name" />
                                        <p className="text-xs italic text-red-500">Please fill out Name for the Task.</p>
                                    </div>
                                </div>
                                <div className="flex flex-wrap mb-6 -mx-3">
                                    <div className="w-full px-3">
                                        <label className="block mb-2 text-xs font-bold tracking-wide  uppercase" htmlFor="grid-password">
                                            Description
                                        </label>
                                        <input name="description" onChange={handleChange} className="block w-full px-4 py-3 mb-3 leading-tight  border  rounded appearance-none focus:outline-none focus:bg-white" id="grid-password" type="text" placeholder="Description" />
                                        <p className="text-xs italic text-gray-600">Please Add a Description for the Task</p>
                                    </div>
                                </div>
                                <div className="flex flex-wrap mb-2 -mx-3">
                                    <div className="w-full px-3 mb-6 md:w-1/3 md:mb-0">
                                        <label className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase" htmlFor="grid-city">
                                            Maintenance period (months)
                                        </label>
                                        <input name="period_months" onChange={handleChange} className="block w-full px-4 py-3 leading-tight  border  rounded appearance-none focus:outline-none focus:bg-white" id="grid-city" type="number" step="1" placeholder="6" />
                                        <p className="text-xs italic text-gray-600">Scheduled Routine Maintenance </p>
                                    </div>
                                    <div className="w-full px-3 mb-6 md:w-1/3 md:mb-0">
                                        <label className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase" htmlFor="grid-city">
                                            Last performed (months ago)
                                        </label>
                                        <input name="months_ago" onChange={handleChange} className="block w-full px-4 py-3 leading-tight border  rounded appearance-none focus:outline-none focus:bg-white" id="grid-city" type="number" step="1" placeholder="6" />
                                        <p className="text-xs italic text-gray-600">Scheduled Routine Maintenance </p>
                                    </div>
                                    <div className="w-full px-3 mb-6 md:w-1/3 md:mb-0">
                                        <label className="block mb-6 text-xs font-bold tracking-wide uppercase" htmlFor="grid-state">
                                            Category
                                        </label>
                                        <div className="relative">
                                            <select defaultValue="" name="category" onChange={handleChange} className="block w-full px-4 py-3 pr-8 leading-tight  border  rounded appearance-none focus:outline-none focus:bg-white " id="grid-state">
                                                <option value="" disabled></option>
                                                <option name='hvac' value='hvac'>Hvac</option>
                                                <option name='electrical' value='electrical'>Electrical</option>
                                                <option name='carpentry' value='carpentry'>Carpentry</option>
                                                <option name='plumbing' value='plumbing'>Plumbing</option>
                                            </select>
                                            <p className="text-xs italic text-gray-600">Selection can't be blank</p>
                                            <div className="absolute inset-y-0 right-0 flex items-center px-2  pointer-events-none">
                                                <svg className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <button onClick={handleSubmit} className="px-4 py-2 font-bold text-white rounded bg-mediumBlue hover:bg-lightBlue focus:outline-none focus:shadow-outline" type="button">
                                    Create Task
                                </button>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
                // :
                // <><AboutUs /> <Footer /></>
            }

        </>
    )
}