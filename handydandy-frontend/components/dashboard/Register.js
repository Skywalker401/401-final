import { useState } from "react";


export default function Register(props) {

    const [userName, setUserName] = useState('')

    const updatedUser = {
      sid:props.user.sub.split("|")[1],
      userName:userName,
    }

    const registerUser = (event) => {
        event.preventDefault();

        // make post request to user route to register a new user
        console.log(updatedUser);
      };

    const updateUser = (event) => {
      setUserName(event.target.value);
    }

    return (
        <form onSubmit={registerUser}>
            <label for="username">Username:</label>
            <input type="text" id="username" name="username" value={userName} onChange={updateUser} />
            <button type="submit">Submit</button>
        </form>
    )
  }