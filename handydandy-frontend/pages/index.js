import styles from '../styles/Home.module.css'
import NavBar from "../components/NavBar";
import Dashboard from "../components/Dashboard";
import AboutUs from "../components/AboutUs";
import {useUser} from "@auth0/nextjs-auth0";


export default function Home() {
  const { user } = useUser();

  return (
    <>


        {user ? <><NavBar/>  <Dashboard/></> : <NavBar/>}


    </>
  )
}
