//logado

import React from "react";
import Login from "../pages/Login";
import Cadastro from "../pages/Cadastro";
import Home from "../pages/Home";

import Header from "../../components/Header";

import { createNativeStackNavigator } from '@react-navigation/native-stack'

const AppStack = createNativeStackNavigator()

function AppRoutes() {
  return (
    <AppStack.Navigator
      screenOptions={{
        header: ({navigation}) => (
          <Header navigation={navigation}/>
        )
      }}
    >
      <AppStack.Screen
        name="Home"
        component={Home}
        /> 
    </AppStack.Navigator>
  )
}

export default AppRoutes