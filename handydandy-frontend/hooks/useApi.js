import axios from 'axios';
import { useState, useEffect } from 'react';
import useToken from './useToken';
import { useUser } from "@auth0/nextjs-auth0";

const useApi = (url) => {
  const { token, error, loading } = useToken()
  const [data, setData] = useState()
  const [isLoading, setIsLoading] = useState(true)
  const { user } = useUser()
  const user_id = user.sub.split("|")[1]
  console.log(user_id)



  const fetchData = () => {
    axios
      .post(url, { sid: `${user_id}` }, { headers: { Authorization: `Bearer ${token}` } })
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, [token]);

  return { data, isLoading }
}

export default useApi;

