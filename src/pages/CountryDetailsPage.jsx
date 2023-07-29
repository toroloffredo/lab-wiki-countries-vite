import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom"

const apiURL = "https://ih-countries-api.herokuapp.com/countries" ;

function CountryDetails() {
  const {alpha3Code} = useParams()
  const [country, setCountry] = useState(null);
  const [fetching, setFetching] = useState(true); 

  useEffect(() => {
    const fetchCountry = async () => {
        try {
          const response = await axios.get(`${apiURL}/${alpha3Code}`);
          setCountry(response.data);
          console.log(response.data);
        
        } catch (error) {console.log('Error fetching country data',error)
          }  
          setFetching(false);
      }
    fetchCountry();
  }, [alpha3Code] );

  return (
    <>
      <h1>Country Details</h1>
      
      {fetching ? (
         <p>Loading...</p>
      ) : country ? (
        <div key={country._id} className="card">
         
          <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} style={{width: "130px"}}/>
            <h3>Country Name:</h3><p> {country.name.official}</p>
            <h3>Capital:</h3><p> {country.capital}</p>
            <h3>Country Area:</h3><p>{country.area}</p>
            <h3>Country Borders:</h3>
              <ul>
                {country.borders.map((alpha3Code) => (
                  <li key={alpha3Code}>
                    <Link to={`/${alpha3Code}`}>{alpha3Code}</Link>
                  </li>                
                ))}
              </ul> 
            
        </div>
      ) : (
        <p>Country not found.</p>
      )}
    </>  
  )
}

export default CountryDetails;
