import Registered from "./Registered.js";
import Register from "./register.js";
import useApi from '../../hooks/useApi.js';
import { useUser } from "@auth0/nextjs-auth0";
import useToken from "../../hooks/useToken.js";

export default function Dashboard() {
    const { user } = useUser()
    const { token } = useToken()
    const { data, isLoading } = useApi('https://handy-dandy.azurewebsites.net/api/get-user')  
  
    function checkRegister(){
        if(isLoading === true){
            return <p>Loading</p>
        }
        else if(isLoading === false){
            if(data === undefined){
                return <Register user={user} token={token} />
            }  
            else{
                return <Registered user={data}/>
            }
            
        }
        
    }

    
    return (
            checkRegister()
    );
  }

  // {data === undefined ? <Registered user={data} /> : <Register user={user}/> }