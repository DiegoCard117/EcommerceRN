//npx expo start
import React, {useState, useEffect} from 'react';
import ProductsBox from '../../components/ProductsBox.js'
import { View, ScrollView } from 'react-native';

export default function Home({ navigation }) {

  return (
    <View style={{ flexDirection: 'column', backgroundColor: '#F1f2f5', flex: 1 }}>
      <ScrollView>
        <View style={{ flexDirection: 'row', height: '100%' }}>
          <ProductsBox navigation={navigation} />
        </View>
      </ScrollView>
    </View>
  );
}













//<Aside/>

