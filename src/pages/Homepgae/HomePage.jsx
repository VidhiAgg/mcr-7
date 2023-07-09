import React, { useContext } from 'react'
import { AppContext } from '../../context/AppContext'
import "./homepage.css"
import { LocationOn } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
const {dataDsisplay} = useContext(AppContext);
const navigate = useNavigate();
  return (
    <div className='home-container'>
        <div className="header">
          <h1>Welcome to Trip Advisor</h1>
          <h3>Top Continents for your next holidy</h3>
        </div>

        <div className="continent-list">
{
  dataDsisplay.continents?.map(data=>{
    return (
      <div className="continent-card" key={data.id} onClick={(e)=>{
e.stopPropagation();
navigate(`continent/${data.id}`)
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

export default HomePage