import { Route, Routes } from "react-router-dom";

import "./App.css";
import { Continents } from "./pages/Continents/Continents";
import { Countries } from "./pages/Countries/Countries";
import { Destinations } from "./pages/Destinations/Destinations";
import { Detail } from "./pages/Detail/Detail";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Continents />} />
        <Route path="/countries/:continentId" element={<Countries />} />
        <Route
          path="/Destinations/:continentId/:countryId"
          element={<Destinations />}
        />
        <Route
          path="/detail/:continentId/:countryId/:destinationId"
          element={<Detail />}
        />
      </Routes>
    </div>
  );
}

export default App;
