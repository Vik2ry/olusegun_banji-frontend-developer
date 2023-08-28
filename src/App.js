import { useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import RocketList from "./components/RocketList";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRocket, setSelectedRocket] = useState(null);

  return (
    <div className="bg-slate-800 text-white flex flex-col">
      <Header
        searchQuery={searchQuery}
        onSetSearchQuery={(query) => setSearchQuery(query)}
      ></Header>

      <RocketList
        searchQuery={searchQuery}
        onSelectRocket={(rocket) => setSelectedRocket(rocket)}
      ></RocketList>

      <Footer></Footer>
    </div>
  );
}

export default App;
