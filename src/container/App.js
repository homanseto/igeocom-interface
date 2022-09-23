import { Route, Switch, Router } from "react-router-dom";
import Navbar from "../components/Layout/Navbar/Navbar";
import Taps from "../components/Taps/Taps";
import "./App.css";
import { ShopProvider } from "../context/ShopContext";

function App() {
  return (
    <div className="App">
      <ShopProvider>
        <Navbar />
        <Taps />
      </ShopProvider>
    </div>
  );
}

export default App;
