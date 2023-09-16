import React, { useState } from 'react';

function Search({ searchFilter }) {
  const [searchText, setSearchText] = useState("");

  const handleSearchChange = (event) => {
    const text = event.target.value;
    setSearchText(text);
    searchFilter(text); // Call the searchFilter function with the search text
  };
  // const [selectedCountry, setSelectedCountry] = useState('');
  // const [selectedCost, setSelectedCost] = useState('');
  // const [selectedFlight, setSelectedFlight] = useState('');
  // const [rockets, setRockets] = useState([]);



  // const fetchRockets = useCallback(async () => {
  //   try {
  //     let queryParams = {
  //       id: rocketIds.join(','),
  //     };

  //     // Apply filters if provided
  //     if (filterOptions) {
  //       queryParams = { ...queryParams, ...filterOptions };
  //     }

  //     const response = await axios.get('https://api.spacexdata.com/v4/rockets', {
  //       params: queryParams,
  //     });
  //     setRockets(response.data);
  //   } catch (error) {
  //     console.error('Error fetching rockets:', error);
  //   }
  // }, [rocketIds, filterOptions]);

  // useEffect(() => {

  //   fetchRockets();
  // }, [fetchRockets]);


  // const costPerLaunchOptions = rockets.map(rocket => rocket.cost_per_launch);
  // const firstFlightDates = rockets.map(rocket => rocket.type);
  // const countries = rockets.map(rocket => rocket.name);

  // console.log(countries, firstFlightDates);

  // // const countries = flightName;
  // // const costPerLaunchOptions = costPerFlight;
  // // const firstFlightDates = flightType;

  // // console.log(countries, costPerLaunchOptions, firstFlightDates);

  // // const handleCountryChange = (event) => {
  // //   setSelectedCountry(event.target.value);
  // //   updateFilterOptions({ country: event.target.value });
  // // };

  // // const handleCostChange = (event) => {
  // //   setSelectedCost(event.target.value);
  // //   updateFilterOptions({ cost_per_launch: event.target.value });
  // // };

  // // const handleFlightChange = (event) => {
  // //   setSelectedFlight(event.target.value);
  // //   updateFilterOptions({ first_flight: event.target.value });
  // // };

  // const applyFilters = () => {
  //   const filters = {
  //     country: selectedCountry,
  //     cost_per_launch: selectedCost,
  //     first_flight: selectedFlight,
  //   };
  //   updateFilterOptions(filters);
  // };

  return (
    // 
    <div className="">
      <input
        type="search"
        name="search-bar"
        id="search-bar"
        className="w-full bg-gray-500 rounded border border-gray-300 focus:border-white focus:ring-2 focus:ring-white text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        value={searchText}
        onChange={handleSearchChange}
      />
    </div>
  );
}

export default Search;



