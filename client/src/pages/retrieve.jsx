import Navbar from "../components/navbar";
import { useState, useEffect } from "react";
import style from "./retrieve.css";
import { redirect } from "react-router-dom";

function Retrieve() {

    const [destinationData, setDestinationData] = useState(null);
    const baseURL = "https://smiling-blue-woodpecker.cyclic.cloud";

    useEffect(() => {

        fetch(`${baseURL}/trip/retrieve`)
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            console.log(data);
            setDestinationData(data);
        })
        .catch((err) => {
            console.log(err.message);
        })
        
    },[]);


    return <>
        <Navbar />
        <div className="mainDiv">
            {
                destinationData?.map((element) => {
                    return <div>
                        <h3>Name : {element.name}</h3>
                        <p>Email : {element.email}</p>
                        <p>Destination : {element.destination}</p>
                        <p>Number of Travellers : {element.no_of_travellers}</p>
                        <p>Budget per person : {element.budget_per_person}</p>
                        <button id="deleteBtn" onClick={() => {
                            fetch(`${baseURL}/trip/delete/${element._id}`,{
                                method : "DELETE"
                            })
                            .then((res) => {
                                return res.json();
                            })
                            .then((data) => {
                                if(data.message === "Post deleted"){
                                    alert(data.message);
                                }
                                else{
                                    alert(data.message);
                                }
                            })

                        }}>Delete</button>
                    </div>
                })
            }
        </div>
    </>
}

export default Retrieve;