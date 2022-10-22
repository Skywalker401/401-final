import { useState, useEffect } from 'react';
import axios from 'axios';


const useToken = () => {
  const [token, setToken] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  const fetchData = () => {
    axios
      .post('/api/getTokenFromApi')
      .then((res) => {
        setToken(res.data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { token, error, loading };
};

export default useToken;