//Provider do contexto 

import React, { useState } from "react";
import searchContext from "./search";

const SearchProvider = ({children}) => {

  const [ products, setProducts] = useState([])
  const [ cartItems, setCartItems] = useState([])
  const [ favorites, setFavorites] = useState([])

  const value = {
    products,
    setProducts,
    cartItems,
    setCartItems,
    favorites,
    setFavorites
  }

  return (
    <searchContext.Provider value={value}>
      {children}
    </searchContext.Provider>
  )
}

export default SearchProvider;