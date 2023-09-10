
const Country = ({country, handleVisitedCountries}) => {
    // console.log(country);
    const {name,flags, population, area} = country;
    // console.log(name);
    
    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
            <img src={flags.png} alt="Shoes" className="rounded-xl h-[200px] w-full" />
        </figure>
        <div className="card-body items-center text-center">
            <h2 className="card-title">Country Name: {name.common}</h2>
            <p>Population: {population}</p>
            <p>Area: {area}</p>
            
            <div className="card-actions">
            <button onClick={()=> handleVisitedCountries(country)} className="btn btn-primary">Mark Visited</button>
            </div>
        </div>
        </div>
        </div>
        // clicked add
    );
};

export default Country;