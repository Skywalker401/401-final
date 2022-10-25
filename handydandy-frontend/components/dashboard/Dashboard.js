import Registered from "./Registered.js";
import useApi from '../../hooks/useApi.js';

export default function Dashboard() {
    const { data, isLoading } = useApi('https://handy-dandy.azurewebsites.net/api/get-user')
    return (
        <Registered user={data} />
    );
  }