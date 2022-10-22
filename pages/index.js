import { useUser } from '@auth0/nextjs-auth0';
import styles from '../styles/Home.module.css'
import NavBar from "../components/NavBar";
import useApi from '../hooks/useApi';


export default function Home() {
  const { user } = useUser();
  const { data, isLoading } = useApi('https://handy-dandy.azurewebsites.net//api/v1/handydandy/private')

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
