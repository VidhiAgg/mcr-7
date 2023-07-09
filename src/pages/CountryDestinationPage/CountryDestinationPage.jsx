import React, { useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import "../Homepgae/homepage.css"
import { AppContext } from '../../context/AppContext';
import { LocationOn } from '@mui/icons-material';

const CountryDestinationPage = () => {
    const{id} = useParams();
    const {dataDsisplay} = useContext(AppContext);
    const navigate = useNavigate();
    const getCountry = dataDsisplay?.continents.find(data =>data.id === id)
    const getRequireCountriesDestination = getCountry?.find( data=> 
      data.id === parseInt(id))
  return (
    <div className='home-container'>
         <div className="header">
          
          <h3>Top Countries for your next holidy</h3>
        </div>
        <div className="continent-list">
{
    getRequireCountriesDestination?.map(data => {
        return (
            <div className="continent-card" key={data.id} onClick={(e)=>{
      e.stopPropagation();
      navigate(`countries/${data.id}`)
            }}>
      <img src={data.image}  alt ={data.name}/>
      <span className='text'><LocationOn />{data.name}</span>
       
            </div>
          )
    })
}
</div>
    </div>
  )
}

export default CountryDestinationPage