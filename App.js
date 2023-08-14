//npx expo start
import Header from './components/Header.js'
import Aside from './components/Aside.js'
import ProductsBox from './components/ProductsBox.js'
import { View, Dimensions, ScrollView } from 'react-native';
import Contacts from './components/Contacts.js';
import Footer from './components/Footer.js';

export default function App() {

  return (
    <>
    <Header/>
      <View style={{flexDirection: 'column'}}>
        <ScrollView>  
          <View style={{flexDirection: 'row', height:'100%'}}>
            <Aside/>
            <ProductsBox/>
          </View>
        </ScrollView>
      </View>
    </>
  );
}

let screenheight = Dimensions.get("window").height






