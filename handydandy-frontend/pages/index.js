import axios from 'axios';
import { useState, useEffect } from 'react';
import { useUser, getSession } from '@auth0/nextjs-auth0';
import styles from '../styles/Home.module.css'
import NavBar from "../components/NavBar";



export default function Home() {
  const { user, error, isLoading } = useUser();
  const [data, setData] = useState({})



  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://handy-dandy.azurewebsites.net//api/v1/handydandy/', {
          headers: {
            Authorization: `Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IkphM2I5cnBTOUxNVVpVU1AwczVHZiJ9.eyJpc3MiOiJodHRwczovL2Rldi00dmFtMDN3My51cy5hdXRoMC5jb20vIiwic3ViIjoiZ29vZ2xlLW9hdXRoMnwxMTYyNzczNjczNzYwMjgzMDA1NTkiLCJhdWQiOlsiaHR0cHM6Ly9kZXYtNHZhbTAzdzMudXMuYXV0aDAuY29tL2FwaS92Mi8iLCJodHRwczovL2Rldi00dmFtMDN3My51cy5hdXRoMC5jb20vdXNlcmluZm8iXSwiaWF0IjoxNjY2MzkzODE1LCJleHAiOjE2NjY0ODAyMTUsImF6cCI6Ik1hWWdoSXNRa0t1WUNxb2pBU2tlaVhGbUdHMmw5WG16Iiwic2NvcGUiOiJvcGVuaWQgcHJvZmlsZSJ9.ls4I1Fbphm7xLNduEr01fCoOwnWDQ_Kf8I4aKl5P_xzo4j2YjCaJMzHFrYpibyDurWwLMPob7NaqNmk6zf1GnfLX8C4ZclDToENS1A7YidNOBiqztAtfMU-AvIz4gQlTaYKWgCVp_h7rIqTBuYEU-h-cqQG229sxI-Eo-5Sr-X-48o3nj-ehIRVB3u41NEtIMHPO7ij04YoeMv-6ixThDKPByPt_jorkSVNqwAO1ThRSnrG7JGu-5BfcKnGyv1KN2kuYvfKhbs2esbbOlVwSdd7GDLPgRyaKbXKBD1RT-tWbTj7Q91L3GkSlfQKrTZIre3nu8KHU4JOxDQ8BpVje8g`
          }
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
      <NavBar/>
    </>

  )
}
