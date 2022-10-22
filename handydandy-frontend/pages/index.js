import styles from '../styles/Home.module.css'
import axios from 'axios'
import NavBar from "../components/NavBar";
import Dashboard from "../components/Dashboard";
import AboutUs from "../components/AboutUs";
// import {useUser} from "@auth0/nextjs-auth0";


export default function Home() {
  // const {user} = useUser()
  let new_res;
  const fetcher = async (url) => {
    try {
      const res = await axios.get(url)
      // console.log(res)
      return res;
    } catch (err) {
      console.log("error")
    }
  };

  const resp = fetcher('http://127.0.0.1:8000/api/v1/handydandy').then(resp => console.log(resp))


  return (
<>
    <NavBar/>
 <Dashboard/>


  </>
  )
}
