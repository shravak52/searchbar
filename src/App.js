import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Ensure axios is installed
import './App.css'; // Import the CSS file for styling

const App = () => {
  const [countries, setCountries] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  // Fetch country data when the component mounts
  // useEffect(() => {
  //   axios.get('https://dpaste.com/79QXDY8TD/raw') // Replace with the provided JSON URL
  //     .then(response => {
  //       const data = response.data;
  //       if (Array.isArray(data)) {
  //         console.log('Fetched countries:', data); // Debug log
  //         setCountries(data);
  //       } else {
  //         console.error('Fetched data is not an array:', data);
  //       }
  //     })
  //     .catch(error => {
  //       console.error('Error fetching data:', error);
  //     });
  // }, []);

  useEffect(() => {
    // Replace with actual JSON content if the URL isn't working
    const data = [
      {
        "country": "United States",
        "capital": "Washington, D.C."
      },
      {
        "country": "Canada",
        "capital": "Ottawa"
      },
      {
        "country": "Brazil",
        "capital": "Brasília"
      },
      {
        "country": "United Kingdom",
        "capital": "London"
      },
      {
        "country": "Australia",
        "capital": "Canberra"
      },
      {
        "country": "Germany",
        "capital": "Berlin"
      },
      {
        "country": "France",
        "capital": "Paris"
      },
      {
        "country": "Italy",
        "capital": "Rome"
      },
      {
        "country": "Spain",
        "capital": "Madrid"
      },
      {
        "country": "Japan",
        "capital": "Tokyo"
      },
      {
        "country": "China",
        "capital": "Beijing"
      },
      {
        "country": "India",
        "capital": "New Delhi"
      },
      {
        "country": "South Africa",
        "capital": "Pretoria"
      },
      {
        "country": "Russia",
        "capital": "Moscow"
      },
      {
        "country": "Mexico",
        "capital": "Mexico City"
      },
      {
        "country": "Argentina",
        "capital": "Buenos Aires"
      },
      {
        "country": "Chile",
        "capital": "Santiago"
      },
      {
        "country": "Colombia",
        "capital": "Bogotá"
      },
      {
        "country": "Peru",
        "capital": "Lima"
      },
      {
        "country": "Egypt",
        "capital": "Cairo"
      },
      {
        "country": "Turkey",
        "capital": "Ankara"
      },
      {
        "country": "Nigeria",
        "capital": "Abuja"
      },
      {
        "country": "Kenya",
        "capital": "Nairobi"
      },
      {
        "country": "Ghana",
        "capital": "Accra"
      },
      {
        "country": "South Korea",
        "capital": "Seoul"
      },
      {
        "country": "Thailand",
        "capital": "Bangkok"
      },
      {
        "country": "Malaysia",
        "capital": "Kuala Lumpur"
      },
      {
        "country": "Vietnam",
        "capital": "Hanoi"
      },
      {
        "country": "Singapore",
        "capital": "Singapore"
      },
      {
        "country": "New Zealand",
        "capital": "Wellington"
      },
      {
        "country": "Sweden",
        "capital": "Stockholm"
      },
      {
        "country": "Norway",
        "capital": "Oslo"
      },
      {
        "country": "Finland",
        "capital": "Helsinki"
      },
      {
        "country": "Denmark",
        "capital": "Copenhagen"
      },
      {
        "country": "Ireland",
        "capital": "Dublin"
      },
      {
        "country": "Belgium",
        "capital": "Brussels"
      },
      {
        "country": "Netherlands",
        "capital": "Amsterdam"
      },
      {
        "country": "Switzerland",
        "capital": "Bern"
      },
      {
        "country": "Austria",
        "capital": "Vienna"
      },
      {
        "country": "Poland",
        "capital": "Warsaw"
      }
    ]
    ;
    setCountries(data);
  }, []);
  

  // Handle search input changes
  const handleSearchChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);

    // Filter countries based on the input
    if (value.trim() !== '') {
      const filteredSuggestions = countries.filter(countrys =>
        countrys.country.toLowerCase().includes(value.toLowerCase()) ||
        countrys.capital.toLowerCase().includes(value.toLowerCase())
      );
      console.log('Filtered Suggestions:', filteredSuggestions); // Debug log
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]); // Clear suggestions if input is empty
    }
  };

  return (
    <div className="search-container">
      <h1>Country Search</h1>
      <div className="search-bar">
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Search for a country or capital..."
        />
        {suggestions.length > 0 && (
          <ul className="suggestions-list">
            {suggestions.map((countrys, index) => (
              <li key={index}>
                {countrys.country} - {countrys.capital}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default App;

