// Import's
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronUp, ChevronDown } from 'react-feather';
import Autocomplete from './AutoComplete';
import ApiService from '../Services/ApiService';

// City Table functional component which shows all cities' data
const CityTable = () => {
    // States
    const [cities, setCities] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [sortConfig, setSortConfig] = useState({ key: null, direction: 'ascending' });

    // Side effect's
    useEffect(() => {
        fetchCities(searchTerm);
    }, [searchTerm]);

    // Function to fetch all cities' data from API
    const fetchCities = async (searchTerm) => {
        // Fetching data
        const data = await ApiService.fetchAllCities(searchTerm);
        // Setting cities data to state
        setCities(data);
    };

    // Search handler
    const handleSearch = (searchTerm) => {
        setSearchTerm(searchTerm);
    };

    // Sorting handler
    const requestSort = (key) => {
        let direction = 'ascending';
        if (sortConfig && sortConfig.key === key && sortConfig.direction === 'ascending') {
            direction = 'descending';
        }
        setSortConfig({ key, direction });
    };

    // Sorted and filtered cities
    const sortedCities = cities.sort((a, b) => {
        if (sortConfig.key && a[sortConfig.key] && b[sortConfig.key]) {
            if (a[sortConfig.key] < b[sortConfig.key]) {
                return sortConfig.direction === 'ascending' ? -1 : 1;
            }
            if (a[sortConfig.key] > b[sortConfig.key]) {
                return sortConfig.direction === 'ascending' ? 1 : -1;
            }
        }
        return 0;
    });

    // Return sorting indicator icon
    const renderSortIndicator = (key) => {
        if (sortConfig && sortConfig.key === key) {
            return sortConfig.direction === 'ascending' ? <ChevronUp /> : <ChevronDown />;
        }
        return null;
    };

    // Returning JSX
    return (
        // City table and search container
        <div className="mx-auto max-w-4xl p-8">
            {/* Search component */}
            <Autocomplete onSearch={handleSearch} />
            {/* City table container */}
            <div className="overflow-x-auto mt-6">
                {/* Table */}
                <div className="overflow-x-auto">
                    <table className="w-full table-auto bg-gray-200 rounded-lg overflow-hidden shadow-md">
                        {/* Table headings */}
                        <thead>
                            {/* Headings row */}
                            <tr className=''>
                                {/* City name */}
                                <th
                                    className="px-2 sm:px-6 py-3 text-left text-sm font-extrabold text-gray-600 uppercase tracking-wider cursor-pointer"
                                    onClick={() => requestSort('name')}
                                >
                                    City Name
                                    {renderSortIndicator('name')}
                                </th>
                                {/* Country */}
                                <th
                                    className="px-2 sm:px-6 py-3 text-left text-sm font-extrabold text-gray-600 uppercase tracking-wider cursor-pointer"
                                    onClick={() => requestSort('cou_name_en')}
                                >
                                    Country
                                    {renderSortIndicator('cou_name_en')}
                                </th>
                                {/* Population */}
                                <th
                                    className="px-2 sm:px-6 py-3 text-left text-sm font-extrabold text-gray-600 uppercase tracking-wider cursor-pointer"
                                    onClick={() => requestSort('population')}
                                >
                                    Population
                                    {renderSortIndicator('population')}
                                </th>
                                {/* Timezone */}
                                <th
                                    className="px-2 sm:px-6 py-3 text-left text-sm font-extrabold text-gray-600 uppercase tracking-wider cursor-pointer"
                                    onClick={() => requestSort('timezone')}
                                >
                                    Timezone
                                    {renderSortIndicator('timezone')}
                                </th>
                            </tr>
                        </thead>
                        {/* Table body */}
                        <tbody>
                            {/* Mapping all cities' data row wise */}
                            {sortedCities.map((city, index) => (
                                // City data row with odd even different shades background color
                                <tr key={city.geoname_id} className={`${index % 2 === 0 ? 'bg-gray-100' : 'bg-gray-50'} hover:bg-blue-100 transition duration-300 ease-in-out`}>
                                    {/* City name with link so that on click it's weather page opens passing params here */}
                                    <td
                                        className="px-2 sm:px-6 py-4 whitespace-nowrap font-medium"
                                        // Open weather page in new tab on right-click
                                        onContextMenu={(e) => {
                                            e.preventDefault(); // Prevent default context menu
                                            window.open(`/weather/${city.coordinates.lat}/${city.coordinates.lon}`, '_blank'); // Open link in new tab
                                        }}
                                    >
                                        <Link to={`/weather/${city.coordinates.lat}/${city.coordinates.lon}`} className="text-blue-500 hover:underline">{city.name}</Link>
                                    </td>
                                    {/* City country name */}
                                    <td className="px-2 sm:px-6 py-4 whitespace-nowrap">{city.cou_name_en}</td>
                                    {/* City population */}
                                    <td className="px-2 sm:px-6 py-4 whitespace-nowrap">{city.population}</td>
                                    {/* City timezone */}
                                    <td className="px-2 sm:px-6 py-4 whitespace-nowrap">{city.timezone}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

// Exporting CityTable
export default CityTable;
