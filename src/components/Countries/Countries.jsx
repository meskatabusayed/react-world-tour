import { useEffect, useState } from "react";
import Country from "../Country/Country";
import "./countries.css";

const Countries = () => {
    const [countries , setCountries] = useState([]);
    const [visitedCountries , setVisitedCountries] = useState([]);

    //data fetching
    useEffect( () => {
        fetch("https://restcountries.com/v3.1/all")
        .then(res => res.json())
        .then(data => setCountries(data));
    }, []);

    const handleVisitedCountries = country => {
        const newVisitedCountry = [...visitedCountries , country];
        setVisitedCountries(newVisitedCountry);
    }

    return (
        <div>
            <h1>Countries : {countries.length}</h1>
            <div>
                <h1>Visited Countries : {visitedCountries.length} </h1>
            </div>
            <div className="counties">
            {
                countries?.map(country => (<Country key={country.ccn3}
                    handleVisitedCountries={handleVisitedCountries}
                    country={country}></Country>))
            }
            </div>
        </div>
    );
};

export default Countries;