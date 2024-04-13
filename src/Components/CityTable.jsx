import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Autocomplete from './AutoComplete.jsx';
import ApiService from '../Services/ApiService.js';

const CityTable = () => {
    const [cities, setCities] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        fetchCities(searchTerm);
    }, [searchTerm]);

    const fetchCities = async (searchTerm) => {
        const data = await ApiService.fetchAllCities(searchTerm);
        setCities(data);
    };

    const handleSearch = (searchTerm) => {
        setSearchTerm(searchTerm);
    };

    return (
        <div className="mx-auto max-w-4xl p-8">
            <Autocomplete onSearch={handleSearch} />
            <div className="overflow-x-auto mt-6">
                <table className="w-full table-auto bg-gray-200 rounded-lg overflow-hidden shadow-md">
                    <thead>
                        <tr>
                            <th className="px-6 py-3 text-left text-sm font-medium text-gray-600 uppercase tracking-wider">City Name</th>
                            <th className="px-6 py-3 text-left text-sm font-medium text-gray-600 uppercase tracking-wider">Country</th>
                            <th className="px-6 py-3 text-left text-sm font-medium text-gray-600 uppercase tracking-wider">Population</th>
                            <th className="px-6 py-3 text-left text-sm font-medium text-gray-600 uppercase tracking-wider">Timezone</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cities.map((city, index) => (
                            <tr key={city.geoname_id} className={`${index % 2 === 0 ? 'bg-gray-100' : 'bg-gray-50'} hover:bg-blue-100 transition duration-300 ease-in-out`}>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <Link to={`/weather/${city.coordinates.lat}/${city.coordinates.lon}`} className="text-blue-500 hover:underline">{city.name}</Link>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">{city.cou_name_en}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{city.population}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{city.timezone}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default CityTable;
