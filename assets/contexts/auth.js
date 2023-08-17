import React, { createContext, useState } from "react";
import { signIn } from "../services/auth"; // Importar a função signIn corretamente

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [ user, setUser] = useState(null)

  async function handleSignIn() {
    const response = await signIn(); // Chamar a função signIn corretamente

    setUser(response.user)
  }

  function handleSignOut() {
    setUser(null)
  }
// dois ! ou !! é pra verificar se é verdadeiro ou nao
  return (
    <AuthContext.Provider value={{ signed: !!user, user, signIn: handleSignIn, signOut: handleSignOut }}> 
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;










/*
const [signed, setSigned] = useState(false)

function login() {
  //const response = await authService()
  //console.log(response)
  setSigned(true)
}
*/