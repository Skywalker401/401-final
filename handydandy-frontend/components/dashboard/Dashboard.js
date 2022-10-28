import Registered from "./Registered.js";
import Register from "./Register.js";
import useApi from '../../hooks/useApi.js';
import { useUser } from "@auth0/nextjs-auth0";
import useToken from "../../hooks/useToken.js";

export default function Dashboard() {
    const { user } = useUser()
    const { token } = useToken()
    const { data, setData, isLoading } = useApi('https://handy-dandy.azurewebsites.net/api/get-user')
    console.log(data);
    return (
        <>
            {data !== undefined ? <Registered user={data} setData={setData} token={token} isLoading={isLoading} /> : <Register user={user} token={token} />}
        </>
    );
}

