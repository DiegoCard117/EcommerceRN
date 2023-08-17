import React, { createContext } from "react";
import * as auth from "../services/auth";

const AuthContext = createContext({})

export const AuthProvider = ({children}) => {
  async function signIn() {
    const response = await auth.signIn()

    console.log(response)
  }

  return (
    <AuthContext.Provider value={{signed: false, user: {}, signIn}}>
      {children}
    </AuthContext.Provider>
  )   
}

export default AuthContext









/*
const [signed, setSigned] = useState(false)

function login() {
  //const response = await authService()
  //console.log(response)
  setSigned(true)
}
*/