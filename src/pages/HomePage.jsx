import { useState, useEffect } from "react";
import axios from "axios";
import { findRenderedDOMComponentWithClass } from "react-dom/test-utils";
import { Link } from "react-router-dom"

const apiURL = "https://ih-countries-api.herokuapp.com/countries" ;

function HomePage() {
  const [fetching, setFetching] = useState(true);  
  const [countries, setCountries] = useState([]) ;

    useEffect(() => {
      const fetchCountries = async () => {
        try {
          const response = await axios.get(apiURL)
          setCountries(response.data);
          console.log(response.data);
         
        } catch (error) {console.log('Error getting data',error)}  
          setFetching(false);
          }
              
    fetchCountries();
    }, [] );

  return (
    <>  

      <h1>HomePage</h1>
      {fetching && <p>Loading...</p>}
      
      {countries.map((country) => {
        const alpha2CodeLowercase = country.alpha2Code.toLowerCase()
        return (
          <div key={country._id} className="card">
            <Link to={`/${country.alpha3Code}`}>
              <img src={`https://flagpedia.net/data/flags/icon/72x54/${alpha2CodeLowercase}.png`} style={{width: "30px"}}/>
              <p>{country.name.official}</p>
            </Link>
          </div>
        )
      })}


    </>

  )

}

export default HomePage;
