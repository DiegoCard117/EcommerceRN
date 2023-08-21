import React, { useState } from "react";
import searchContext from "./search";

const SearchProvider = ({children}) => {

  const [ products, setProducts] = useState([])

  const value = {
    products,
    setProducts
  }

  return (
    <searchContext.Provider value={value}>
      {children}
    </searchContext.Provider>
  )
}

export default SearchProvider;