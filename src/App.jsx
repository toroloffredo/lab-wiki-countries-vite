import "./App.css";
import HomePage from "./pages/HomePage";
import CountryDetailsPage from "./pages/CountryDetailsPage";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      
      <h1>LAB | React WikiCountries</h1>
      <Routes>
        <Route path="/:alpha3Code" element={<CountryDetailsPage />} />
        <Route path="/" element={<HomePage />} />

      </Routes>

    </div>
  );
}




export default App;
