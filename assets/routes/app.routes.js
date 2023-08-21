//logado

import React, {useContext} from "react";
import Home from "../pages/Home";
import PageProduct from "../../components/PageProducts/PageProduct";
import Cart from "../pages/Cart";

import Header from "../../components/Header";

import { createNativeStackNavigator } from '@react-navigation/native-stack'

const AppStack = createNativeStackNavigator()

function AppRoutes() {

  return (
    <AppStack.Navigator
      screenOptions={{
        header: ({navigation}) => (
          <Header navigation={navigation}
          />
          )
        }}
        >
      <AppStack.Screen
        name="Home"
        component={Home}
      />
      <AppStack.Screen
        name="PageProduct"
        component={PageProduct}
      />
      <AppStack.Screen
        name="Cart"
        component={Cart}
      />
    </AppStack.Navigator>
  )
}

export default AppRoutes