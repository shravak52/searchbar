import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [countries, setCountries] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    axios.get('https://dpaste.com/79QXDY8TD')
      .then(response => {
        setCountries(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleSearchChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    const filteredSuggestions = countries.filter(country =>
      country.name.toLowerCase().includes(value.toLowerCase()) ||
      country.capital.toLowerCase().includes(value.toLowerCase())
    );
    setSuggestions(filteredSuggestions);
  };

  return (
    <div>
      <h1>Country Search Bar</h1>
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearchChange}
        placeholder="Search for a country or capital..."
      />
      <ul>
        {suggestions.map((country, index) => (
          <li key={index}>
            {country.name} - {country.capital}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
