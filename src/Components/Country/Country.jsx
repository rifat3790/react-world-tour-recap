
const Country = ({country}) => {
    // console.log(country);
    const {name,flags} = country;
    // console.log(name);
    
    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
            <img src={flags.png} alt="Shoes" className="rounded-xl h-[200px]" />
        </figure>
        <div className="card-body items-center text-center">
            <h2 className="card-title">{name.common}</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions">
            <button className="btn btn-primary">Buy Now</button>
            </div>
        </div>
        </div>
        </div>
        
    );
};

export default Country;