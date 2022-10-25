import Registered from "./Registered.js";
import Register from "./register.js";
import useApi from '../../hooks/useApi.js';
import { useUser } from "@auth0/nextjs-auth0";

export default function Dashboard() {
    const { user } = useUser()
    const { data, isLoading } = useApi('https://handy-dandy.azurewebsites.net/api/get-user')
    return (
        <div>
            {data == undefined ? <Registered user={data} /> : <Register user={user}/> }
        </div>  
    );
  }