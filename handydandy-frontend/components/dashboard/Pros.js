import { useState, useEffect } from "react";
import axios from "axios";

export default function Pros(props){
    const [pro, setPro] = useState();
    const getPro = () => {
        
        const fetchData = () => {
            axios
                .post('https://handy-dandy.azurewebsites.net/api/get-pros', { zip: props.zip }, { headers: { Authorization: `Bearer ${props.token}` } })
                .then((res) => {
                    setPro(res.data);
                })
                .catch((err) => {
                    console.log(err);
                })
        }

        useEffect(() => {
            fetchData();
        }, []);
        console.log(pro);
        return pro
    }
    console.log(getPro())
    return (
        <></>
    )

}