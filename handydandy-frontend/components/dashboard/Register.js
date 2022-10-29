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

      <form className="border border-black rounded-lg bg-gradient-to-r from-lightBlue to-white col-span-3 p-3 shadow-lg" onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input className="rounded p-1 m-2"   type="text" name="name" onChange={handleChange} />
        <label htmlFor="email">Email</label>
        <input className="rounded p-1 m-3" type="email" name="email" onChange={handleChange} />
        <label htmlFor="address">Addr</label>
        <input className="rounded p-1 m-4" type="text" name="address" onChange={handleChange} />
        <label htmlFor="city">City</label>
        <input className="rounded p-1 m-5" type="text" name="city" onChange={handleChange} />
        <label htmlFor="zip">Zip</label>
        <input className="rounded p-1 ml-6 mb-2" type="text" name="zip" onChange={handleChange} />
        <label htmlFor="pro">Pro: </label>
        <div className="flex">
            <input className="lg rounded mb-2" type="checkbox" name="pro" defaultChecked={false} checked={isChecked} onChange={checkHandler} />
            {
                isChecked ? <Comps handleComps={handleComps} /> : null
            }
        </div>

        <button className="inline-flex rounded-md  border-transparent bg-gradient-to-r from-lightGray to-white bg-origin-border px-4 py-2 text-base font-medium text-black shadow-inner shadow-lg">Register</button>
      </form>

    );
  }


    