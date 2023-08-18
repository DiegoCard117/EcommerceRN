//npx expo start
import React from 'react';
import Header from '../../components/Header.js'
import Aside from '../../components/Aside.js'
import ProductsBox from '../../components/ProductsBox.js'
import { View, ScrollView } from 'react-native';


export default function Home({navigation}) {

  return (
    <>
      <View style={{flexDirection: 'column', backgroundColor: '#F1f2f5'}}>
        <ScrollView>  
          <View style={{flexDirection: 'row', height:'100%'}}>
            <Aside/>
            <ProductsBox navigation={navigation}/>
          </View>
        </ScrollView>
      </View>
    </>
  );
}








