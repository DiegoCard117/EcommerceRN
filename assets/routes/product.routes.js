
import React from "react";
import ProductsBox from "../../components/ProductsBox";
import PageProducts from "../../components/PageProducts/PageProduct";

import Header from "../../components/Header";

import { createNativeStackNavigator } from '@react-navigation/native-stack'

const AppStack = createNativeStackNavigator()

function ProductsRoutes() {
  return (
    <AppStack.Navigator
      screenOptions={{
        header: ({navigation}) => (
          <Header navigation={navigation}/>
        )
      }}
    >
      <AppStack.Screen
        name="ProductsBox"
        component={ProductsBox}
      />
      <AppStack.Screen
        name="PageProducts"
        component={PageProducts}
      />  
    </AppStack.Navigator>
  )
}

export default ProductsRoutes