import { useState } from "react";
import axios from "axios";
import Comps from "./Comps";


export default function Register(props) {
    const [isChecked, setIsChecked] = useState(false);

    const [user, setUser] = useState({
      sid:props.user.sub.split("|")[1],
      name:"",
      email:"",
      address:"",
      city:"",
      zip:"",
    })

    // competencies for user if pro
    const [comps, setComps] = useState({
        hvac:false,
        electrical:false,
        carpentry:false,
        plumbing:false,
    });

    const handleChange = (event) => {
      setUser({ ...user, [event.target.name]: event.target.value });
    };


    const handleComps = (e) => {
      // Destructuring
      const { value, checked } = e.target;
      const { competencies } = comps;
       
      // Case 1 : The user checks the box
      if (checked) {
        setComps({...comps, [e.target.name]: true});
      }
    
      // Case 2  : The user unchecks the box
      else {
        setComps({...comps, [e.target.name]: false});
      }
    };

    const checkHandler = () => {
        setIsChecked(!isChecked)
      }

    // post request to create a new user
    const handleSubmit = (event) => {
      if(!isChecked){
        for(const key in comps){
          comps[key] = false
          console.log(comps[key]);
        }
      }

      axios({
        method: 'post',
        url: 'https://handy-dandy.azurewebsites.net/api/create-user',
        data: {
          sid:user.sid,
          name: user.name,
          email: user.email,
          address:user.address,
          city:user.city,
          zip:user.zip,
          is_pro:isChecked, //checks true/false/pro
          competencies:comps //competancies object
        },

        headers: { Authorization: `Bearer ${props.token}` }
      }).then(console.log).catch(console.log);
    };  

    return (
      <>  
        <form className="border border-black rounded-lg bg-gradient-to-r from-lightBlue to-white col-span-2 p-2 shadow-lg" onSubmit={handleSubmit}>
          <h1 className="text-2xl font-semibold text-center">Register Form</h1>
          <div className="flex flex-col">
            <label className=" text-center mb-2 text-sm  tracking-wide" htmlFor="name">Name</label>
            <input className=" rounded p-1" type="text" name="name" onChange={handleChange} />
          </div>
          <div className="flex flex-col">
          <label className=" text-center mb-2 text-sm  tracking-wide " htmlFor="email">Email</label>
          <input className="rounded p-1" type="email" name="email" onChange={handleChange} />
          </div>
          <div className="flex flex-col">
          <label className=" text-center mb-2 text-sm  tracking-wide " htmlFor="address">Address</label>
          <input className="rounded p-1" type="text" name="address" onChange={handleChange} />
          </div>
          <div className="flex flex-col">
          <label className=" text-center mb-2 text-sm  tracking-wide " htmlFor="city">City</label>
          <input className="rounded p-1" type="text" name="city" onChange={handleChange} />
          </div>
          <div className="flex flex-col">
          <label className=" text-center mb-2 text-sm  tracking-wide " htmlFor="zip">Zip</label>
          <input className="rounded p-1" type="text" name="zip" onChange={handleChange} />
          </div>
          <div className="flex flex-col">
            <div className="flex flex-col">
              <label className=" mb-2 tracking-wide " htmlFor="pro">Pro: </label>
            </div>
            <div className="flex">
              <input className="lg rounded mb-2" type="checkbox" name="pro" defaultChecked={false} checked={isChecked} onChange={checkHandler} />
              {
                isChecked ? <Comps handleComps={handleComps} /> : null
              }
            </div>
          </div>
          <div className="flex justify-center mt-4">
            <button className=" inline-flex rounded-md border border-transparent bg-gradient-to-r from-darkBlue to-lightBlue bg-origin-border px-4 py-2 text-base font-medium text-white shadow-sm">Register</button>
          </div>
        </form>
      </>

    );
  }



