import RocketCard from "./RocketCard";
import RocketDetail from "./RocketDetail";
import PaginationControls from "./PaginationControls";

function RocketList() {
  return (
    // <div className="container">
    //     <RocketCard>

    //     </RocketCard>

    //     <RocketDetail>

    //     </RocketDetail>
    // </div>

    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          <RocketCard></RocketCard>
          <RocketCard></RocketCard>
          <RocketCard></RocketCard>
          <RocketCard></RocketCard>
          <RocketCard></RocketCard>
          <RocketCard></RocketCard>
          <RocketCard></RocketCard>
          <RocketCard></RocketCard>
          <RocketCard></RocketCard>
        </div>
      </div>

      <div className="sticky bottom-0">
        <PaginationControls></PaginationControls>
      </div>
    </section>
  );
}

export default RocketList;
