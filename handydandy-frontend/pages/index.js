import styles from '../styles/Home.module.css'
import Axios from 'axios'
import React, {useState, useEffect} from 'react';

export default function Home() {

  const [user, setUser] = useState()

  useEffect(()=> {
    const getUsers = async () => {
      try {
        const response = await Axios.get('http://127.0.0.1:8000/api/v1/handydandy');
        setUser(response.data[0]);
        console.log(response.data[0]); 
      }
      catch(error) {
        if (error.response) {
          console.log(error.response)
        }
      }
    }
    getUsers();
  }, []);


// this should be checking response, so if
  function renderPage(){
    if(user == undefined){
      // use this part if user auth is not working then return an login error
      return;
    }
    else{
      return <p>Hello {user.name}</p>
    }
  }

  return (
    <div className={styles.container}>
      {renderPage()}
    </div>
  )
}
