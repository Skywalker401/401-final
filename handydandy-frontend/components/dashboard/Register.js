import { useState } from "react";


export default function Register(props) {

    const [user, setUser] = useState({
      // name
    })
    

    const updatedUser = {
      sid:props.user.sub.split("|")[1],
      name:name,
      email:email,
      address:address,
      city:city,
      zipcode:zipcode,
    }

    const registerUser = (event) => {
        event.preventDefault();

        // make post request to user route to register a new user
        // after post request
        console.log(updatedUser);
      };

    const updateUser = (event) => {
      setUser(event.target.value);
      // spread here
      

    return (
        <form onSubmit={registerUser}>
            <label htmlFor="name">Name:</label>
            <input type="text" id="username" name="username" value={updatedUser.name} />

            <label htmlFor="email">Email:</label>
            <input type="text" id="email" name="email" value={updatedUser.email} />

            <label htmlFor="address">Address:</label>
            <input type="text" id="address" name="address" value={updatedUser.address} />

            <label htmlFor="city">City:</label>
            <input type="text" id="city" name="city" value={updatedUser.city} />

            <label htmlFor="zipcode">Zipcode:</label>
            <input type="text" id="zipcode" name="zipcode" value={updatedUser.zipcode} />

            <button onClick={updateUser} type="submit">Submit</button>
        </form>
    )
  }