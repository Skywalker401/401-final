import { useState } from "react";
import axios from "axios";
import Comps from "./Comps";


export default function Register(props) {
    const [user, setUser] = useState({
      sid:props.user.sub.split("|")[1],
      name:"",
      email:"",
      address:"",
      city:"",
      zip:"",
    //   competancies:{}
    })

    const [isChecked, setIsChecked] = useState(false);

    const handleChange = (event) => {
      setUser({ ...user, [event.target.name]: event.target.value });

    };

    const checkHandler = () => {
        setIsChecked(!isChecked)
      }

    // post request to create a new user
    const handleSubmit = (event) => {
      event.preventDefault();
      console.log(user, 'form user');
      console.log(isChecked, 'checkedbox');

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
          is_pro:isChecked,
          competancies:user.competancies
        },
        headers: { Authorization: `Bearer ${props.token}` }
      }).then(console.log).catch(console.log);
    };

    // compentancies function 
   

    return (
      <form className="" onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" onChange={handleChange} />
        <label htmlFor="email">Email</label>
        <input type="email" name="email" onChange={handleChange} />
        <label htmlFor="address">Address</label>
        <input type="text" name="address" onChange={handleChange} />
        <label htmlFor="city">City</label>
        <input type="text" name="city" onChange={handleChange} />
        <label htmlFor="zip">Zipcode</label>
        <input type="text" name="zip" onChange={handleChange} />
        <label htmlFor="pro">Pro: </label>
        <div className="flex">
            <input className="lg" type="checkbox" name="pro" defaultChecked={false} checked={isChecked} onChange={checkHandler} />
            {
                isChecked ? <Comps /> : null    
            }    
        </div>
            
        <button className="">Register</button>
      </form>
    );
  }

    