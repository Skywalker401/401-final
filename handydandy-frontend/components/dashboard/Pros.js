import { useState, useEffect } from "react";
import axios from "axios";

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
        return pros
    }
    getPros()
    console.log("PRO", pros)
    return (
        <><p>PRO</p></>
    )

}