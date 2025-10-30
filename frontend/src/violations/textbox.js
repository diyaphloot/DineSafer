// Searchable DropList Component
import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import axios from 'axios';

function Textbox({handleCity}) {

    const [searchCity, setSearchCity] = useState([{label:'dover'}]);
    const [selectedOption, setSelectedOption] = useState(null);
    
    let options = {value:'',label:''};
    if (searchCity ) {
    options = searchCity.map(item => {
        return {value: item.City, label: item.City};
    });
        console.log(options);
        }


  useEffect(() => {
    const getcities = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/api/cities`);
        console.log('resp',response.data);
        setSearchCity(response.data); 
        console.log('results',searchCity);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    getcities();
  }, []);
  

  const handleChange = (options) => {
    console.log('options', options)
    setSelectedOption(options);
    handleCity(options.label);
  };

  return (
    <div style={{ height:'25px'}}>
      <Select classNamePrefix="mySelect"
        options={options}
        value={selectedOption}
        onChange={handleChange}
        isSearchable={true} // Enables the textbox functionality
        placeholder="Select a City"
      />
      <br/>
      <br/>
      <br/>
    </div>
  );
}

export default Textbox;