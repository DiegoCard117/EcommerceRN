//npx expo start
import { useFonts } from 'expo-font';
import { Text, View, Image, TextInput, SafeAreaView } from 'react-native';
import styles from "./assets/scss/global.scss"

import profile from './assets/img/profile.png'
import heart from './assets/img/heart.png'
import contact from './assets/img/contato.png'
import cart from './assets/img/cart.png'

import menu from './assets/img/menu.png'
import { useState } from 'react';


export default function App() {
  const [ text, onChangeText ] = useState('Input aqui') 

  const [loaded] = useFonts({
    Poppins: require('./assets/fonts/Poppins-Light.ttf')
  })

  if(!loaded) {
    return null
  }

  return (
    <>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.headerTop}>
            <Text style={{fontFamily:'Poppins', fontSize: 24}}>Ecommerce</Text>
            <View style={styles.headerTopImg}>
              <Image
                style={styles.imgHeader}
                source={profile}
              />
              <Image
                style={styles.imgHeader}
                source={contact}
              />
              <Image
                style={styles.imgHeader}
                source={heart}
              />
              <Image
                style={styles.imgHeader}
                source={cart}
              />
            </View>
          </View>
          {/*fim do topHeader*/}
          <View style={styles.headerBottom}>
            <Image
              source={menu}
            />
            <SafeAreaView>
              <TextInput
                style={styles.searchInput}
                onChangeText={onChangeText}
                value={text}
              />
            </SafeAreaView>
          </View>
        </View>
          <View style={styles.aside}>

          </View>
      </View>
    </>
  );
}


