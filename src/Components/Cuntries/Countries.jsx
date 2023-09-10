import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";

const Countries = () => {

    const [countries, setCountries] = useState([]);

    const [visitedCountries, setVisitedCountries] = useState([]);

    const handleVisitedCountries = (country) =>{
        const newVisitedCountries =[...visitedCountries, country];
        setVisitedCountries(newVisitedCountries);
    }

    useEffect( ()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data))
    },[])

    return (
        <div>
            <h2 className="text-3xl font-bold text-center mt-10">Country: {countries.length}</h2>
            <div className="container max-w-screen-xl mx-auto flex flex-col lg:flex-row">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 flex-1">
            {
                countries.map(country=> <Country country={country} handleVisitedCountries={handleVisitedCountries} key={country.cca3} ></Country>)
            }
            </div>
            <div className="ml-5">
                <h3 className="font-medium text-center flex-1">Visited Countries: {visitedCountries.length}</h3>
                <hr/>
                {
                    visitedCountries.map(country =><li key={country.cca3}>{country.name.common}</li> )
                }
            </div>
            </div>
        </div>
    );
};

export default Countries;