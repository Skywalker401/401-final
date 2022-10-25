import Registered from "./Registered.js";
import Register from "./register.js";
import useApi from '../../hooks/useApi.js';
import { useUser } from "@auth0/nextjs-auth0";

export default function Dashboard() {
    const { user } = useUser()
    const { data, isLoading } = useApi('https://handy-dandy.azurewebsites.net/api/get-user')
    // console.log(isLoading);
    // console.log(data);
    // console.log(user);
  
    function checkRegister(){
        if(isLoading === true){
            return <p>Loading</p>
        }
        else if(isLoading === false){
            if(data === undefined){
                return <Register user={user} />
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