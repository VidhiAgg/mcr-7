import React, { useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import "../Homepgae/homepage.css"
import { AppContext } from '../../context/AppContext';
import { LocationOn } from '@mui/icons-material';

const CountryDestinationPage = () => {
    const{continentID, countryId} = useParams();
    const {dataDsisplay} = useContext(AppContext);
    const navigate = useNavigate();
    const getCountry = dataDsisplay?.continents?.find(data =>data.id === parseInt(continentID))

    const getRequireCountries = getCountry?.countries?.find( data=>  data.id === parseInt(countryId))
      
  return (
    <div className='home-container'>
         <div className="header">
          
          <h3>Top Countries for your next holidy</h3>
        </div>
        <div className="continent-list">
{
    getRequireCountries?.destinations?.map(data => {
        return (
            <div className="continent-card" key={data.id} onClick={(e)=>{
      e.stopPropagation();
      navigate(`/continent/${continentID}/countries/${countryId}/destination/${data.id}`)
            }}>
      <img src={data.image}  alt ={data.name}/>
      <span className='text-destin'><LocationOn />{data.name}</span>
       
            </div>
          )
    })
}
</div>
    </div>
  )
}

export default CountryDestinationPage