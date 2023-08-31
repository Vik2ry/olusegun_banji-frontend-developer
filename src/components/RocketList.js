import RocketCard from "./RocketCard";
// import RocketDetail from "./RocketDetail";
import PaginationControls from "./PaginationControls";
import { useEffect, useState } from "react";
import axios from "axios";

function RocketList({ searchQuery, filterOptions, onSelectRocket }) {
  const [meta, setMeta] = useState({});

  const [rockets, setRockets] = useState([]);

  useEffect(() => {
    getRockets();
  }, []);

  function getRockets() {
    axios
      .post(
        "https://api.spacexdata.com/v4/rockets/query"
      )
      .then(function (response) {
        console.log(response.data.docs);
        setRockets(response.data.docs);
        setMeta(response.data)
      });
  }

  // const filteredRockets = rockets.filter((rocket) => {
  //   // Check if each filter option matches the corresponding rocket property
  //   const countryMatch =
  //     !filterOptions.country || rocket.country === filterOptions.country;
  //   const costMatch =
  //     !filterOptions.cost_per_launch ||
  //     rocket.cost_per_launch === parseInt(filterOptions.cost_per_launch);
  //   const flightMatch =
  //     !filterOptions.first_flight ||
  //     rocket.type === filterOptions.first_flight;

  //   // Return true if all filter conditions are met
  //   return countryMatch && costMatch && flightMatch;
  // });

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          {
            rockets.map(
              rocket =>
                <RocketCard rocket={rocket}></RocketCard>
            )
          }
        </div>
      </div>

      <div className="sticky bottom-0">
        <PaginationControls
          currentPage={meta.page}
          itemCount={rockets.length}
          pageCount={meta.limit}
          totalCount={meta.totalDocs}
          totalPages={meta.totalPages ?? []}
          onClickOnPage={page => getRockets()}
        ></PaginationControls>
      </div>
    </section>
  );
}


export default RocketList;
