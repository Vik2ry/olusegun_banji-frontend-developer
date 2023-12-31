import RocketCard from "./RocketCard";
// import RocketDetail from "./RocketDetail";
import PaginationControls from "./PaginationControls";
import { useEffect, useState } from "react";
import axios from "axios";

function RocketList({ searchQuery, onSelectRocket }) {
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
  const rocketsToDisplay = searchQuery ? onSelectRocket : rockets;

  // const fetchRockets = useCallback(async () => {
  //   try {
  //     let queryParams = {
  //       id: rocketIds.join(','),
  //     };

  //     // Apply filters if provided
  //     if (filterOptions) {
  //       queryParams = { ...queryParams, ...filterOptions };
  //     }

  //     const response = await axios.get('https://api.spacexdata.com/v4/rockets', {
  //       params: queryParams,
  //     });
  //     setRockets(response.data);
  //     setMeta(response.data)

  //   } catch (error) {
  //     console.error('Error fetching rockets:', error);
  //   }
  // }, [rocketIds, filterOptions]);

  // useEffect(() => {

  //   fetchRockets();
  // }, [fetchRockets]);

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          {rocketsToDisplay.map((rocket) => (
            <RocketCard key={rocket.id} rocket={rocket} />
          ))}
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
