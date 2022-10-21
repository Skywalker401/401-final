import styles from '../styles/Home.module.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useUser, getSession } from '@auth0/nextjs-auth0';


export default function Home() {
  const { user, error, isLoading } = useUser();
  const [data, setData] = useState({})

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/v1/handydandy/api/public', {

        });
        setData(response.data);
      }
      catch (error) {
        if (error.response) {
          console.log(error.response)
        }
      }
    }
    fetchData()
  }, [])
  console.log(user)


  return (
    <>
      {user ?
        <>
          <a href="/api/auth/logout">Logout</a>
          <p>{user.name}</p>
        </>
        : <a href="/api/auth/login">Login</a>
      }


      {data ?
        (<div className={styles.container}>
          <p>{data.message}</p>
        </div>)
        : <p>No data</p>
      }
    </>
  )
}
