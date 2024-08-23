import { useState } from 'react';
import { FiSearch } from 'react-icons/fi'; // Import search icon from react-icons

const NavBar = ({ onSearch }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [city, setCity] = useState('');

  const handleInputChange = (e) => {
    setCity(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (city.trim() !== '') {
      onSearch(city);
      setMobileMenuOpen(false); // Close mobile menu after search
    }
  };

  return (
    <nav className="bg-purple-950 w-full px-2 py-4">
      <div className="container flex justify-between items-center">
        {/* Logo */}
        <div className="text-white text-2xl font-bold">
          Weather App
        </div>

        {/* Desktop Search Bar */}
        <div className="hidden md:flex space-x-2">
          <input
            type="text"
            value={city}
            onChange={handleInputChange}
            placeholder="Enter city name"
            className="p-2 rounded-lg focus:outline-none"
          />
          <button
            onClick={handleSearch}
            className="px-4 py-2 bg-white text-blue-600 rounded-lg hover:bg-gray-200"
          >
            Search
          </button>
        </div>

        {/* Mobile Hamburger Menu */}
        <div className="md:hidden">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-white">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu (Shows only when menu is open) */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-4 flex items-center">
          <input
            type="text"
            value={city}
            onChange={handleInputChange}
            placeholder="Enter city name"
            className="p-2 flex-grow rounded-l-lg focus:outline-none"
          />
          <button
            onClick={handleSearch}
            className="p-2 bg-white text-blue-600 rounded-r-lg hover:bg-gray-200"
          >
            <FiSearch size={24} /> {/* Search icon */}
          </button>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
