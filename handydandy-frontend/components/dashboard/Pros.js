import { useState, useEffect } from "react";
import axios from "axios";
import Loader from "../Loader";

export default function Pros(props) {
    const [pros, setPros] = useState();
    const getPros = () => {

        const fetchData = () => {
            axios
                .post('https://handy-dandy.azurewebsites.net/api/get-pros', { zip: props.zip }, { headers: { Authorization: `Bearer ${props.token}` } })
                .then((res) => {
                    setPros(res.data);
                })
                .catch((err) => {
                    console.log(err);
                })
        }

        useEffect(() => {
            fetchData();
        }, []);
        console.log(pros);

    }
    getPros()
    console.log("PRO", pros)
    return (
        <>
            {pros
                ? pros.map((pro, idx) => (<p id={idx}>{pro.name}</p>))
                : <Loader />}
        </>
    )

}