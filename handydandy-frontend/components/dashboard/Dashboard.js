import Registered from "./Registered.js";
import Register from "./Register.js";
import useApi from '../../hooks/useApi.js';
import { useUser } from "@auth0/nextjs-auth0";
import useToken from "../../hooks/useToken.js";

export default function Dashboard() {
    const { user } = useUser()
    const { token } = useToken()
    const { data, isLoading } = useApi('https://handy-dandy.azurewebsites.net/api/get-user')  
    
    return (
        <>
            { isLoading ? <p>Loading</p> : data !== undefined ? <Registered user={data} /> : <Register user={user} token={token} /> }
        </>
    );
  }

  