import Registered from "./Registered.js";
import Register from "./Register.js";
import useApi from '../../hooks/useApi.js';
import { useUser } from "@auth0/nextjs-auth0";
import useToken from "../../hooks/useToken.js";
import Loader from "../Loader.js";

export default function Dashboard() {
    const { user } = useUser()
    const { token } = useToken()
    const { data, setData, isLoading } = useApi('https://handy-dandy.azurewebsites.net/api/get-user')
    console.log(data);
    if (isLoading && data === undefined) {
        return <Loader />
    } else if (!isLoading && data === undefined) {
        return <Register user={user} token={token} />
    } else {
        return <Registered user={data} setData={setData} token={token} isLoading={isLoading} />
    }

}


