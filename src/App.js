import './App.css';
import "react-toastify/dist/ReactToastify.css";
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from "react-toastify";
import HomePage from './pages/Homepgae/HomePage';
import ContinentPage from './pages/ContinentPage/ContinentPage';
import CountryDestinationPage from './pages/CountryDestinationPage/CountryDestinationPage';
import DestinationPage from './pages/DestinationDetail/DestinationPage';
function App() {
  return (
    <div className="App">
     <Routes>
<Route path="/" element={<HomePage />} />
<Route path="/continent/:id" element={<ContinentPage />} />
<Route path="/continent/:continentID/countries/:countryId" element={<CountryDestinationPage />} />
<Route 
path="/continent/:continentID/countries/:countryId/destination/:destinationId"
 element={<DestinationPage />} />

     
     </Routes>
     <ToastContainer />
    </div>
  );
}

export default App;
