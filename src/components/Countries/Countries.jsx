import { useEffect, useState } from "react";


const Countries = () => {
    const [countries , setCountries] = useState([]);
    //data fetching
    useEffect( () => {
        fetch("https://restcountries.com/v3.1/all")
        .then(res => res.json())
        .then(data => setCountries(data));
    }, [])

    return (
        <div>
            <h1>Countries : {countries.length}</h1>
        </div>
    );
};

export default Countries;