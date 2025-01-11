import React from 'react';

const SearchBar = ({ onSearch }) => {
  const [city, setCity] = React.useState('');

  const handleChange = (e) => {
    setCity(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(city);
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <input
        type="text"
        value={city}
        onChange={handleChange}
        className="px-4 py-2 border rounded-lg"
        placeholder="Enter city name"
      />
      <button type="submit" className="px-4 py-2 ml-2 bg-blue-500 text-white rounded-lg">
        Search
      </button>
    </form>
  );
};

export default SearchBar;
