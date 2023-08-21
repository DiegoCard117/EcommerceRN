//npx expo start
//import Home from './assets/pages/Home'
//import Login from './assets/pages/Login'
//import Cadastro  from './assets/pages/Cadastro'
import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { AuthProvider } from "./assets/contexts/auth";
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Routes from "./assets/routes";

import ProductsBox from "./components/ProductsBox";
import PageProducts from "./components/PageProducts/PageProduct";
import SearchProvider from "./assets/contexts/SearchProvider";


export default function App() {

  return (
    <NavigationContainer>
      <AuthProvider>
        <SearchProvider>
          <Routes/>
        </SearchProvider>
      </AuthProvider>
    </NavigationContainer>
  );
}






