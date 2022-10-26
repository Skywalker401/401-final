import { useState } from "react";
import axios from "axios";
import { useToken } from "../../hooks/useToken";



export default function Register(props) {

    const [user, setUser] = useState({
      sid:props.user.sub.split("|")[1],
      name:"",
      email:"",
      address:"",
      city:"",
      zip:"",
    })

    const handleChange = (event) => {
      setUser({ ...user, [event.target.name]: event.target.value });
    };

    // post request to create a new user
    const handleSubmit = (event) => {
      // event.preventDefault();

      axios({
        method: 'post',
        url: 'https://handy-dandy.azurewebsites.net/api/create-user',
        data: {
          sid:user.sid,
          name: user.name,
          email: user.email,
          address:user.address,
          city:user.city,
          zip:user.zip
        },
        headers: { Authorization: `Bearer ${props.token}` }
      }).then(console.log).catch(console.log);
    };
      

    return (
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Full Name</label>
        <input type="text" name="name" onChange={handleChange} />
        <label htmlFor="email">Email</label>
        <input type="email" name="email" onChange={handleChange} />
        <label htmlFor="address">Address</label>
        <input type="text" name="address" onChange={handleChange} />
        <label htmlFor="city">City</label>
        <input type="text" name="city" onChange={handleChange} />
        <label htmlFor="zip">Zipcode</label>
        <input type="text" name="zip" onChange={handleChange} />
        <button>Register</button>
      </form>
    );
  }