import React, { createContext, useEffect, useReducer, useState } from 'react'
import { data } from '../data/Data'

export const AppContext = createContext();
const AppContextProvider = ({children}) => {
  const [dataDsisplay,setDataDisplay] = useState(data);
  
  return (
    <AppContext.Provider value={{dataDsisplay}}>
    
        {children}
    </AppContext.Provider>
  )
}

export default AppContextProvider