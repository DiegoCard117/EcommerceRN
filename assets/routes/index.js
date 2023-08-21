import React, { useContext } from "react";

import AuthContext from "../contexts/auth";

import AppRoutes from "./app.routes";
import AuthRoutes from "./auth.routes";
import searchContext from "../contexts/search";


export default function Routes() {
  const {signed} = useContext(AuthContext)

  

  //return signed ? <AppRoutes/>  : <AuthRoutes/>
  return <AppRoutes />

}