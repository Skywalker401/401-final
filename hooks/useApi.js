import axios from 'axios';
import { useState, useEffect } from 'react';
import useToken from './useToken';

const useApi = (url) => {
  const { token, error, loading } = useToken()
  const [data, setData] = useState({})
  const [isLoading, setIsLoading] = useState(true)

  const fetchData = () => {
    axios
      .get(url, { headers: { Authorization: `Bearer ${token}` } })
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

