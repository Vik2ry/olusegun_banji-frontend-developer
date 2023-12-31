import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import RocketList from "./components/RocketList";
import Search from "./components/Search"; // Import the new Search component

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRocket, setSelectedRocket] = useState([]);
  const [rockets, setRockets] = useState([]);

  useEffect(() => {
    getRockets();
  }, []);

  function getRockets() {
    axios
      .get('https://api.spacexdata.com/v4/rockets')
      .then((response) => {
        console.log(response.data);
        setRockets(response.data);
      })
      .catch((error) => {
        console.error('Error fetching rockets:', error);
      });
  }

  const searchFilter = (text) => {
    if (text) {
      setSearchQuery(text);
      const newData = text
        ? rockets.filter((item) => {
          const itemData = (
            item.name +
            ' ' +
            item.type +
            ' ' +
            item.cost_per_launch
          ).toUpperCase();
          const input = text.toUpperCase();
          return itemData.indexOf(input) > -1;
        })
        : rockets; // If no text, show all rockets
      setSelectedRocket(newData);
    } else {
      setSearchQuery(text);
      setSelectedRocket(rockets);
      // console.log(selectedRocket, "selectedRocket")

    }
  };

  // const [filterOptions, setFilterOptions] = useState({}); // Initialize filter options
  // const rocketIds = ['falcon1', 'falcon9', 'falconheavy', 'starship'];

  return (
    <div className="bg-slate-800 text-white flex flex-col">
      <Header
        searchQuery={searchQuery}
        onSetSearchQuery={(query) => setSearchQuery(query)}
      ></Header>
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              Welcome to my SpaceX website for rockets.{' '}
              <a href="#1" className="font-semibold text-indigo-600">
                <span className="absolute inset-0" aria-hidden="true" />
                Read more <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Extending the reach of space exploration
            </h1>
            <p id="1" className="mt-6 text-lg leading-8 text-gray-600">
              SpaceX, a visionary company at the forefront of space exploration, continues to capture the imagination of the world with its relentless pursuit of progress.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#2"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Find Rockets
              </a>
              <a href="#2" className="text-sm font-semibold leading-6 text-gray-900">
                See Rockets <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
      </div>
      <div id="2">
        <div className="relative lg:w-1/4 md:w-1/2 p-4 w-full">
          <Search searchFilter={searchFilter} />
        </div>
        <RocketList
          searchQuery={searchQuery}
          onSelectRocket={selectedRocket}
        ></RocketList>
      </div>

      <Footer></Footer>

    </div>

  );
}

export default App;
