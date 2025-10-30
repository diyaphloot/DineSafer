//Barchart component
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import BarChartComponent from './BarChartComponent'; // Adjust path if needed
import Select from 'react-select';

function BarChart() {

  const options = [
  { value: '2025', label: '2025' },
  { value: '2024', label: '2024' }
];

  const defaultOption = options.find(option => option.value === '2025');

  const [results, setResults] = useState([]);
  const [myVal, setMyVal] = useState({ value: '2025', label: '2025' });

  useEffect((value) => {
    const getchart = async () => {
      setResults([]);
      try {
        const response = await axios.get(`http://localhost:3001/api/graph?year=2025`);
        console.log('rrr',response.request)
        setResults(response.data); 
        console.log('results',results);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    getchart();
  }, []);

  const handleSearch = async (yr_val) => {
    
    try {
      const response = await axios.get(`http://localhost:3001/api/graph?year=${yr_val}`);
      console.log('resp',response.data);
      setResults(response.data); 
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleChange = (options) => {
    console.log(options);
    setMyVal(options);
    handleSearch(options.label);
  };




  return (
          <div className="search-container" style={{ justifyContent: "center", width: "750px" }}>
            <h2 style={{color:"#eaac04", textAlign:"center"}}>Inspections with Violations (DE)</h2>
            <div style={{display:"flex", justifyContent: "center", marginLeft: 200, width:"150px"}} >
            <Select classNamePrefix="mySelect" 
              options={options}
              defaultValue={defaultOption}
              value={options.label}
              onChange={handleChange}
              isSearchable={true} 
              placeholder="Select a Year"
            />
            </div>
            <BarChartComponent chartData={results} />
          </div>
          );
  
};

export default BarChart;