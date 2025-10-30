// Search Component
import React,  { memo, useEffect, useState } from 'react';
import axios from 'axios';
import Textbox from './textbox';
import Select from 'react-select';
import cities from './cities.json';
import Paginate from './paginate';


function SearchComponent() {
  const [searchEstablishment, setSearchEstablishment] = useState('');
  const [city, setCity] = useState({
        "value": "",
        "label": "All DE Cities "
    });
  const [results, setResults] = useState([]);

  useEffect(() => {
    handleSearch();
  }, [city])

  const handleSearch = async () => {
    setResults([]);

    try {
      const response = await axios.get(`http://localhost:3001/api/search?establishment=${searchEstablishment}&city=${city.value}`);
      console.log(searchEstablishment,city);
      setResults(response.data);
    
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  const handleCity = (city) =>{
    handleSearch();
  }

  const handleChange = (city) => {
    console.log('hcity',city);
    setCity(city)
  
  }
/*
  const handleCity = (city) => {
    console.log('city',city);
    setCity(city);
  };
  */

  return (
        <div className="search-container" style={{ justifyContent: "center", width: "90%", padding: 10 }}>
          <h1 style={{color:"#eaac04", textAlign:"center"}}>Food Safety Violations</h1>
          <div className="input-group" style={{height:'38px', marginLeft:"300px"}}>
              <input
                  type="text"
                  value={searchEstablishment}
                  onChange={(e) => setSearchEstablishment(e.target.value)}
                  onKeyUp={handleKeyPress}
                  placeholder="Restaurant, School or Address..." />
              <div style={{ height:'25px'}}>
                <Select classNamePrefix="mySelect"
                  options={cities}
                  value={city}
                  onChange={handleChange}
                  isSearchable={true} // Enables the textbox functionality
                  placeholder="Select a City"
                />
                <br/>
                <br/>
                <br/>
              </div>    
              {/*<Textbox handleCity={handleCity}/> */}
              <button onClick={handleSearch}>Search</button>
          </div>
          <div className="card-container" style={{ position: "center", padding: "none"}}>
              <Paginate items={results}/>
          </div>
        </div>  
  );
}

export default SearchComponent;