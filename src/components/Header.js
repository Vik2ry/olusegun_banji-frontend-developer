// import Search from "./Search";

function Header({ searchQuery, onSetSearchQuery }) {
  return (
    <header className="text-gray-600 body-font flex-none z-50 bg-slate-950">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row justify-between">
        <div className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-10 h-10 text-white p-2 bg-yellow-500 rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span className="ml-3 text-xl">Space-x</span>
        </div>

        {/* <Search
          searchQuery={searchQuery}
          updateSearchQuery={(query) => onSetSearchQuery}
        ></Search> */}
      </div>
    </header>
  );
}

export default Header;
