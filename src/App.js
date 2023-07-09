import './App.css';
import "react-toastify/dist/ReactToastify.css";
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from "react-toastify";
import HomePage from './pages/Homepgae/HomePage';
import ContinentPage from './pages/ContinentPage/ContinentPage';
import CountryDestinationPage from './pages/CountryDestinationPage/CountryDestinationPage';
function App() {
  return (
    <div className="App">
      <h1>Hi</h1>
     <Routes>
<Route path="/" element={<HomePage />} />
<Route path="/continent/:id" element={<ContinentPage />} />
<Route path="/countries/:id" element={<CountryDestinationPage />} />
     </Routes>
     <ToastContainer />
    </div>
  );
}

export default App;
