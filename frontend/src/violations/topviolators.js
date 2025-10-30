// Card Component for Top Violators
import {useEffect, useState} from 'react';
import axios from 'axios';
import Select from 'react-select';
import cities from './cities.json';



function TopViolators() {
   
  const [results, setResults] = useState([]);
  const [city, setcity] = useState({
        "value": "",
        "label": "All DE Cities "
    });


  useEffect(() => {
    const getchart = async () => {
      setResults([]);
      console.log('myci',city);
      try {
        const response = await axios.get(`http://localhost:3001/api/violators?city=${city.value}&year=2025`);
        setResults(response.data); 
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    getchart();
  }, [city]);

  const handleChange = (city) => {
    console.log('hcity',city.value);
    setcity(city);
    console.log('getc',city);
  }


  return (
          <div className="search-container" style={{ justifyContent: "center", width: "750px", height: "420px" }}>
            <h2 style={{color:"#eaac04", textAlign:"center"}}>Top 5 Violators - (2025)</h2>
            <div style={{display:"flex", justifyContent: "center", margin: 0}}>
              <Select classNamePrefix="mySelect"
                  options={cities}
                  value={city}
                  onChange={handleChange}
                  isSearchable={true} 
                  placeholder="Select a City"
                />
              <br/>
              <br/>
              <br/>
            </div>
            <ul style={{textAlign:"left", color:"#fff"}}>
              <div style={{display:'flex',marginLeft: '10px',textAlign:"left"}}>
                <div className="flex-item" style={{width:'400px'}}>
                  <h4>Establishment</h4>
                  {results.map((item, index) => (
                  <><p style={{ fontSize: '14px' }}>{item.Establishment} - {item.Address}</p>
                  <hr style={{color: 'green'}}/>
                  </>
                  ))}
                </div>
                <div className="flex-item" style={{marginLeft: '0px'}}>
                  <h4>Violations</h4>
                  {results.map((item, index) => (
                  <><p style={{fontSize: '14px',textAlign:'center'}}>{item.violations}</p>
                  <hr style={{color: 'green'}}/>
                  </>
                  ))}
                </div>
              </div>
              
               
              
            </ul>
          </div>
          );

};

export default TopViolators;