// Import's
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Autocomplete from './AutoComplete';
import ApiService from '../Services/ApiService';

// City Table functional componenet which show's all citie's data
const CityTable = () => {

    // States
    const [cities, setCities] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    // Side effect's
    useEffect(() => {
        fetchCities(searchTerm);
    }, [searchTerm]);

    // Function to fetch all citie's data from API/
    const fetchCities = async (searchTerm) => {
        // Fetaching data
        const data = await ApiService.fetchAllCities(searchTerm);
        // Setting cities data to state's
        setCities(data);
    };

    // Search handler
    const handleSearch = (searchTerm) => {
        setSearchTerm(searchTerm);
    };

    // Returning JSX
    return (
        // City table and search container
        <div className="mx-auto max-w-4xl p-8">

            {/* Search componenet */}
            <Autocomplete onSearch={handleSearch} />

            {/* City table container */}
            <div className="overflow-x-auto mt-6">

                {/* Table */}
                <table className="w-full table-auto bg-gray-200 rounded-lg overflow-hidden shadow-md">
                    {/* Table heading's */}
                    <thead>
                        {/* Heading's row */}
                        <tr className=''>
                            {/* City name */}
                            <th className="px-6 py-3 text-left text-sm font-medium text-gray-600 uppercase tracking-wider">City Name</th>
                            {/* Country */}
                            <th className="px-6 py-3 text-left text-sm font-medium text-gray-600 uppercase tracking-wider">Country</th>
                            {/* Population */}
                            <th className="px-6 py-3 text-left text-sm font-medium text-gray-600 uppercase tracking-wider">Population</th>
                            {/* Timezone */}
                            <th className="px-6 py-3 text-left text-sm font-medium text-gray-600 uppercase tracking-wider">Timezone</th>
                        </tr>
                    </thead>

                    {/* Table body */}
                    <tbody>

                        {/* Mapping all citie's data row wise */}
                        {cities.map((city, index) => (
                            // City data row with odd even different shade's background color
                            <tr key={city.geoname_id} className={`${index % 2 === 0 ? 'bg-gray-100' : 'bg-gray-50'} hover:bg-blue-100 transition duration-300 ease-in-out`}>
                                {/* City name with link so that on click it's weather page open's passing params here */}
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <Link to={`/weather/${city.coordinates.lat}/${city.coordinates.lon}`} className="text-blue-500 hover:underline">{city.name}</Link>
                                </td>
                                {/* City country name */}
                                <td className="px-6 py-4 whitespace-nowrap">{city.cou_name_en}</td>
                                {/* City population */}
                                <td className="px-6 py-4 whitespace-nowrap">{city.population}</td>
                                {/* City timezone */}
                                <td className="px-6 py-4 whitespace-nowrap">{city.timezone}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

// Exporting CityTable
export default CityTable;
