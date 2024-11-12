import "./country.css";

const Country = ({country}) => {
    console.log(country);
    const {name , 
        flags} = country;
    return (
        <div className="border-styles">
            <h1>Name : {name?.official}</h1>
            <img src={flags.svg} alt="" />
        </div>
    );
};

export default Country;