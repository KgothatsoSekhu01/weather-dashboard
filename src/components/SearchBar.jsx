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
const SearchBar = ({ onSearch, recentSearches }) => {
  const [city, setCity] = useState('');

  const handleChange = (e) => {
    setCity(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city) {
      onSearch(city);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="mb-6">
        <input
          type="text"
          value={city}
          onChange={handleChange}
          className="px-4 py-2 border rounded-lg"
          placeholder="Enter city name"
        />
        <button
          type="submit"
          className="px-4 py-2 ml-2 bg-blue-500 text-white rounded-lg"
        >
          Search
        </button>
      </form>

      {recentSearches.length > 0 && (
        <div>
          <h3 className="font-bold">Recent Searches</h3>
          <ul>
            {recentSearches.map((search, index) => (
              <li key={index} onClick={() => onSearch(search)} className="cursor-pointer text-blue-600">
                {search}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
