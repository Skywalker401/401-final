import { useState, useEffect } from "react";
import axios from "axios";
import Loader from "../Loader";
import ProCard from "../ProCard";
import { useUser } from "@auth0/nextjs-auth0";

export default function Pros(props) {
    const { user } = useUser()
    const user_id = user.sub.split("|")[1]
    const [pros, setPros] = useState();
    const [isLoading, setIsLoading] = useState(true)
    const getPros = () => {

        const fetchData = () => {
            axios
                .post('https://handy-dandy.azurewebsites.net/api/get-pros', { zip: props.zip }, { headers: { Authorization: `Bearer ${props.token}` } })
                .then((res) => {
                    setPros(res.data);
                })
                .catch((err) => {
                    console.log(err);
                }).then(() => {
                    setIsLoading(false);
                });
        }

        useEffect(() => {
            fetchData();
        }, []);

    }
    getPros()


    if (isLoading && pros === undefined) {
        return (

            <Loader />
        )

    } else if ((!isLoading && pros === undefined)) {

        return (
            <div className="flex justify-center">
                <p>No pros found in your area</p>
            </div>
        )
    } else {

        return (
            <>
                {(pros.length === 1) && (pros[0].sid === user_id)

                    ?
                    <div className="flex justify-center">
                        <p>No pros found in your area</p>
                    </div>

                    :
                    pros.filter(pro => pro.sid !== user_id && pro.competencies[`${props.task.category}`] === true).map((pro, idx) => (<ProCard id={idx} pro={pro} />))

                }
            </>
        )
    }

}