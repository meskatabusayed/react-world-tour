import { useState } from "react";
import "./country.css";

const Country = ({country}) => {
    const [visited , setVisited] = useState(false);
    const handleVisited = () => {
        setVisited(!visited);
    }
    const {name , 
        flags} = country;
    return (
        <div className="border-styles">
            <h1>Name : {name?.official}</h1>
            <img src={flags.png} alt="" />
            <button onClick={handleVisited}>{visited ? "visited" : "Going"}</button>
            {
                visited ? "Visited done" : "I want to visit this country"
            }
        </div>
    );
};

export default Country;