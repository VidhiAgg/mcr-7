import React, { createContext, useEffect, useReducer, useState } from 'react'

export const AppContext = createContext();
const AppContextProvider = ({children}) => {
  return (
    <AppContext.Provider>
        {children}
    </AppContext.Provider>
  )
}

export default AppContextProvider