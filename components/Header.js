//npx expo start
import { useFonts } from 'expo-font';
import { Text, View, Image, TextInput, SafeAreaView, Dimensions, StyleSheet } from 'react-native';

import profile from '../assets/img/profile.png'
import heart from '../assets/img/heart.png'
import contact from '../assets/img/contato.png'
import cart from '../assets/img/cart.png'

import search from '../assets/img/search.png'
import { useState } from 'react';

export default function Header() {
  const [ text, onChangeText ] = useState('') 

  const [loaded] = useFonts({
    Poppins: require('../assets/fonts/Poppins-Light.ttf')
  })

  if(!loaded) {
    return null
  }

  return (
    <>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.headerTop}>
            <Text style={styles.title}>Ecommerce</Text>
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
            <SafeAreaView style={styles.SearchAll}>
              <TextInput
                style={styles.searchInput}
                onChangeText={onChangeText}
                value={text}
              />
              <Image
                style={styles.imgsearch}
                source={search}
              />
            </SafeAreaView>
          </View>
        </View>
      </View>
    </>
  );
}

//let screenheight = Dimensions.get("window").height
let screewidth = Dimensions.get('window').width

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    backgroundColor: '#F1F2F5',
  },
  header: {
    display: 'flex',
    height:130 ,
    padding:20 ,
  },
  headerTop: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontFamily:'Poppins',
     fontSize: 24,
  },
  headerTopImg: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerBottom: {
    width: screewidth,
    display: 'flex',
    flexDirection: 'row',
  },
  searchInput: {
    padding: 10,
    width: screewidth - 110,
    marginLeft: 30,
    color: '#F1F2F5'
  },
  SearchAll: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#0c0c0c',
    alignItems: 'center',
  },
  imgsearch: {
    height: 30,
    width: 30,
    marginRight: 10,
    paddingBottom: 1,
  }
})


