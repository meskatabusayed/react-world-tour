import { useEffect, useState } from "react";
import Country from "../Country/Country";
import "./countries.css";

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
            <div className="counties">
            {
                countries?.map(country => (<Country key={country.ccn3} country={country}></Country>))
            }
            </div>
        </div>
    );
};

export default Countries;