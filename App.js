//npx expo start
import Header from './components/Header.js'
import Aside from './components/Aside.js'
import ProductsBox from './components/ProductsBox.js'
import { View, StyleSheet } from 'react-native';

export default function App() {

  return (
    <>
      <Header/>
      <View style={{flexDirection: 'row',}}>
        <Aside/>
        <ProductsBox/>
      </View>
    </>
  );
}





