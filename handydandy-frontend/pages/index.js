import styles from '../styles/Home.module.css'
import axios from 'axios'

export default function Home() {
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
    <div className={styles.container}>
      <p></p>
    </div>
  )
}
