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

    function timer2(){
        return <Register user={user}/>
    }
    
    function timer(){
        if(isLoading === true){
            return <p>Loading</p>
        }
        else if(isLoading === false){
            if(data === undefined){
                setTimeout(timer2, 5000);
            }
            else{
                return <Registered user={data}/>
            }
            
        }
        
    }

    
    return (
            timer()
    );
  }

  // {data === undefined ? <Registered user={data} /> : <Register user={user}/> }