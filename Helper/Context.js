"use client"
import React, { createContext } from 'react'
export const MyContext = createContext()  // Yaha par context banaya.

const Context = ({children}) => {
    const username = "PSA1103"
  return (
    // Context ke value dedi gay.
    <div>
        <MyContext.Provider value = {username}>
            {children}
        </MyContext.Provider>
    </div>
  )
}

export default Context