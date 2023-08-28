import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import RocketList from "./components/RocketList";

function App() {
  return (
    <div className="bg-slate-800 text-white flex flex-col">
      <Header></Header>

      <RocketList></RocketList>

      <Footer></Footer>
    </div>
  );
}

export default App;
