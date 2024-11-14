import { useState } from "react";
import "./country.css";

const Country = ({country , handleVisitedCountries}) => {
    const [visited , setVisited] = useState(false);
    const handleVisited = () => {
        setVisited(!visited);
    }
    const {name , 
        flags} = country;
    
    return (
        <div className={`border-styles ${visited && 'visited-style'}`}>
            <h1>Name : {name?.official}</h1>
            <img src={flags.png} alt="" />
            <button onClick={() => handleVisitedCountries(country)}>Marked As</button>
            <br />
            <button onClick={handleVisited}>{visited ? "visited" : "Going"}</button>
            {
                visited ? "Visited done" : "I want to visit this country"
            }
        </div>
    );
};

export default Country;