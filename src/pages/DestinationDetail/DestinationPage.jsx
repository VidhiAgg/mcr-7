import React, { useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AppContext } from '../../context/AppContext';

const DestinationPage = () => {
    const {continentID, countryId, destinationId} = useParams()

    const {dataDsisplay} = useContext(AppContext);
    const navigate = useNavigate();
    const getContinent = dataDsisplay?.continents?.filter(data =>data.id === parseInt(continentID))

    const getRequireCountries = getContinent?.countries?.filter( data=>  data.id === parseInt(countryId))
    const getDestinationDetail = getRequireCountries?.destination?.find(data=> data.id === parseInt(destinationId));
//  const {id, name, description, image, ratings, reviews, 
//    location, openingHours,ticketPrice, website} = getDestinationDetail;
    

   return (
    <div>
      { getDestinationDetail ? <div className="header">
            <h1>in estination</h1>
            <h1>{getDestinationDetail.name}</h1> 
        </div> :
        <h1>Loading...</h1>
   }
    </div>
  )
}

export default DestinationPage