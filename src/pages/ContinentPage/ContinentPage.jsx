import React, { useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import "../Homepgae/homepage.css"
import "./countries.css"
import { AppContext } from '../../context/AppContext';
import { LocationOn } from '@mui/icons-material';

const ContinentPage = () => {
    const{id} = useParams();
    const {dataDsisplay} = useContext(AppContext);
    const navigate = useNavigate();
    const getRequireContinet = dataDsisplay?.continents?.find( data=> data.id === parseInt(id))
  return (
    <div className='home-container'>
         <div className="header">
          
          <h3>Top Countries for your next holidy</h3>
        </div>
        <div className="continent-list">
{
    getRequireContinet?.countries?.map(data => {
        return (
            <div className="continent-card" key={data.id} onClick={(e)=>{
      e.stopPropagation();
      navigate(`/continent/${id}/countries/${data.id}`)
            }}>
      <img src={data.image}  alt ={data.name}/>
      <div className='text-name'><LocationOn />{data.name}</div>
       
            </div>
          )
    })
}
</div>
    </div>
  )
}

export default ContinentPage