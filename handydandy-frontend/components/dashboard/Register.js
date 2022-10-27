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

    // competancies for user if pro
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
      event.preventDefault();



      if(!isChecked){
        for(const key in comps){
          comps[key] = false
          console.log(comps[key]);
        }
      }

      let data = {
        sid: user.sid,
        name: user.name,
        email: user.email,
        address: user.address,
        city: user.city,
        zip: user.zip,
        is_pro: isChecked, //checks true/false/pro
        competencies: comps //competancies object
      }

      console.log(data);

      

      // axios({
      //   method: 'post',
      //   url: 'https://handy-dandy.azurewebsites.net/api/create-user',
      //   data: {
      //     sid:user.sid,
      //     name: user.name,
      //     email: user.email,
      //     address:user.address,
      //     city:user.city,
      //     zip:user.zip,
      //     is_pro:isChecked, //checks true/false/pro
      //     competencies:comps //competancies object
      //   },
      //   headers: { Authorization: `Bearer ${props.token}` }
      // }).then(console.log).catch(console.log);
    };  

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
                isChecked ? <Comps handleComps={handleComps} /> : null    
            }    
        </div>
            
        <button className="">Register</button>
      </form>
    );
  }

    