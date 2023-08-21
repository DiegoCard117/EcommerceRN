//npx expo start
import React, { useContext, useState } from 'react';
import { useFonts } from 'expo-font';
import { Text, View, Image, TextInput, SafeAreaView, Dimensions, StyleSheet, TouchableOpacity, StatusBar } from 'react-native';

import profile from '../assets/img/profile.png'
import heart from '../assets/img/heart.png'
import contact from '../assets/img/contato.png'
import cart from '../assets/img/cart.png'
import logout from '../assets/img/logout.png'

import search from '../assets/img/search.png'

import AuthContext from '../assets/contexts/auth';
import fetchProducts from '../assets/services/Api/fetchProducts';


export default function Header({navigation}) {
  const [ text, onChangeText ] = useState('') 

  const { signOut } = useContext(AuthContext)

  const [loaded] = useFonts({
    Poppins: require('../assets/fonts/Poppins-Light.ttf')
  })

  if(!loaded) {
    return null
  }

  function handleSignOut() {
    signOut()
  }

  const handleSearch = async () => {
    const products = await fetchProducts(text)
    onChangeText('')
  }

  return (
    <>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.headerTop}>
            <Text 
              onPress={() => {
                navigation.navigate('Home')
              }}
              style={styles.title}>
              Ecommerce
            </Text>
            <View style={styles.headerTopImg}>
              <TouchableOpacity
              //onPress={() => {
              //  navigation.navigate('Login')
              //}}
              >
                <Image
                  style={styles.imgHeader}
                  source={profile}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image
                  style={styles.imgHeader}
                  source={heart}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('Cart')
                }}>
                <Image
                  style={styles.imgHeader}
                  source={cart}
                />
              </TouchableOpacity>
              <TouchableOpacity 
                onPress={handleSignOut}
              >
                <Image
                  style={styles.imgHeader}
                  source={logout}
                />
              </TouchableOpacity>
            </View>
          </View>
          {/*fim do topHeader*/}
          <View style={styles.headerBottom}>
            <SafeAreaView style={styles.SearchAll}>
              <TextInput
                style={styles.searchInput}
                onChangeText={onChangeText}
                //={() => handleSearch()}
                value={text}
              />
              <TouchableOpacity>
                <Image
                  style={styles.imgsearch}
                  source={search}
                  onPress={() => handleSearch}
                />
              </TouchableOpacity>
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
    paddingTop: 10,
    backgroundColor: '#F1F2F5',
    height : 140
  },
  header: {
    display: 'flex',
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
    color: '#F1F2F5',
  },
  SearchAll: {
    borderRadius : 5,
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


