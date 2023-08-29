function Search({ searchQuery, updateSearchQuery }) {
  return (
    <div className="">
      <input
        type="search"
        name="search-bar"
        id="search-bar"
        className="w-full bg-gray-500 rounded border border-gray-300 focus:border-white focus:ring-2 focus:ring-white text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
      />
    </div>
  );
}

export default Search;
