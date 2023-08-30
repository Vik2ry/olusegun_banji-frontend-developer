import React, { useState } from 'react';

function Search({ updateFilterOptions }) {
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedCost, setSelectedCost] = useState('');
  const [selectedFlight, setSelectedFlight] = useState('');

  const countries = ["Nigeria", "Niger"];
  const costPerLaunchOptions = [1003, 1000];
  const firstFlightDates = ["12-12-12", "20-02-20"];

  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
    updateFilterOptions({ country: event.target.value });
  };

  const handleCostChange = (event) => {
    setSelectedCost(event.target.value);
    updateFilterOptions({ cost_per_launch: event.target.value });
  };

  const handleFlightChange = (event) => {
    setSelectedFlight(event.target.value);
    updateFilterOptions({ first_flight: event.target.value });
  };

  return (
    <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2">
      <div className="relative">
        <select
          name="country"
          value={selectedCountry}
          onChange={handleCountryChange}
          className="block appearance-none w-full bg-gray-500 rounded border border-gray-300 focus:border-white focus:ring-2 focus:ring-white text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        >
          <option value="">Select Type</option>
          {countries.map((country, index) => (
            <option key={index} value={country}>
              {country}
            </option>
          ))}
        </select>
        <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
          <svg
            className="w-4 h-4 fill-current text-gray-400"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M6.293 7.293a1 1 0 011.414 0L10 9.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </div>
      </div>
      <div className="relative">

        <select
          name="cost_per_launch"
          value={selectedCost}
          onChange={handleCostChange}
          className="block appearance-none w-full bg-gray-500 rounded border border-gray-300 focus:border-white focus:ring-2 focus:ring-white text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        >
          <option value="">Select Cost</option>
          {costPerLaunchOptions.map((cost_per_launch, index) => (
            <option key={index} value={cost_per_launch}>
              {cost_per_launch}
            </option>
          ))}
        </select>
        <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
          <svg
            className="w-4 h-4 fill-current text-gray-400"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M6.293 7.293a1 1 0 011.414 0L10 9.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </div>
      </div>
      <div className="relative">

        <select
          name="first_flight"
          value={selectedFlight}
          onChange={handleFlightChange}
          className="block appearance-none w-full bg-gray-500 rounded border border-gray-300 focus:border-white focus:ring-2 focus:ring-white text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        >
          <option value="">Select Name</option>
          {firstFlightDates.map((first_flight, index) => (
            <option key={index} value={first_flight}>
              {first_flight}
            </option>
          ))}
        </select>
        <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
          <svg
            className="w-4 h-4 fill-current text-gray-400"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M6.293 7.293a1 1 0 011.414 0L10 9.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </div>
      </div>

      {/* Similar structure for the other two dropdowns */}
    </div>
  );
}

export default Search;



