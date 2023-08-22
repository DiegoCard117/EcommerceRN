//npx expo start
import React, { useContext, useState } from 'react';
import { useFonts } from 'expo-font';
import { Text, View, Image, TextInput, SafeAreaView, Dimensions, StyleSheet, TouchableOpacity, StatusBar } from 'react-native';

import profile from '../assets/img/profile.png'
import heart from '../assets/img/heart.png'
import menu from '../assets/img/menu.png'
import cart from '../assets/img/cart.png'
import logout from '../assets/img/logout.png'

import search from '../assets/img/search.png'

import AuthContext from '../assets/contexts/auth';
import fetchProducts from '../assets/services/Api/fetchProducts';

import gpu from '../assets/img/gpu.png'
import mouse from '../assets/img/mouse.png'
import pc from '../assets/img/pc.png'
import upgrade from '../assets/img/upgrade.png'
import monitor from '../assets/img/monitor.png'
import cadeira from '../assets/img/cadeira.png'
import notebook from '../assets/img/notebook.png'
import console from '../assets/img/console.png'
import roteador from '../assets/img/roteador.png'

const imagens = [
  {id:'1', img: gpu, name: 'Placa de Video'},
  {id:'2', img: mouse, name: 'Perifericos'},
  {id:'3', img: pc, name: 'Computadores'},
  {id:'4', img: upgrade, name: 'Kit Upgrade'},
  {id:'5', img: monitor, name: 'Monitores'},
  {id:'6', img: cadeira, name: 'Cadeiras e Mesas Gamer'},
  {id:'7', img: notebook, name: 'Notebooks'},
  {id:'8', img: console, name: 'Consoles'},
  {id:'9', img: roteador, name: 'Roteador'}
]

import searchContext from '../assets/contexts/search';


export default function Header({navigation}) {
  const [ text, onChangeText ] = useState('') 

  const { signOut } = useContext(AuthContext)

  const { cartItems } = useContext(searchContext)

  const [loaded] = useFonts({
    Poppins: require('../assets/fonts/Poppins-Light.ttf')
  })

  const { setProducts } = useContext(searchContext)
  const [menuStyle, setMenuStyle] = useState(styles.aside);
  const [listStyle, setListStyle] = useState(styles.namelistClose)
  
  const updateMenu = () => {
    setMenuStyle(menuStyle === styles.aside ? styles.asideOpen : styles.aside);
    setListStyle(listStyle === styles.namelistClose ? styles.namelist : styles.namelistClose)
  }

  if(!loaded) {
    return null
  }

  function handleSignOut() {
    signOut()
  }

  const handleSearch = async () => {
    const products = await fetchProducts(text)
    setProducts(products)
  }

  const handleSearchMenu = async (category) => {
    const products = await fetchProducts(category)
    setProducts(products)
    setMenuStyle(menuStyle === styles.aside ? styles.asideOpen : styles.aside);
    setListStyle(listStyle === styles.namelistClose ? styles.namelist : styles.namelistClose)
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
                {cartItems.length > 0 && <Text style={styles.spanCartTotal}>{cartItems.length}</Text>}
                
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
          <TouchableOpacity
            style={styles.menuIcon}
            onPress={updateMenu}
          >
            <Image
              source={menu}
              alt=''
            />
          </TouchableOpacity>
          <SafeAreaView style={styles.SearchAll}>
              <TextInput
                style={styles.searchInput}
                onChangeText={onChangeText}
                value={text}
              />
              <TouchableOpacity
                onPress={handleSearch}
              >
                <Image
                  style={styles.imgsearch}
                  source={search}
                />
              </TouchableOpacity>
            </SafeAreaView>
          </View>
        </View>
      </View>
      <View style={menuStyle} >
          {imagens.map( (iten)=> (
            <TouchableOpacity
              key={iten.id}
              style={styles.menulist}
              onPress={() => {
                  handleSearchMenu(iten.name);
                  navigation.navigate('Home')
              }}
            >
              <Image source={iten.img} style={styles.img}/>
              <Text style={listStyle}>{iten.name}</Text>
            </TouchableOpacity>
          ))}
      </View>
    </>
  );
}

let screenheight = Dimensions.get("window").height
let screewidth = Dimensions.get('window').width

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    backgroundColor: '#F1F2F5',
    height : 140,
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
    color: '#0c0c0c',
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
    width: '60%',
    color: '#F1F2F5',
    marginHorizontal: 10,
  },
  SearchAll: {
    borderRadius : 5,
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#0c0c0c',
    alignItems: 'center',
    justifyContent : 'space-around'
  },
  imgsearch: {
    height: 30,
    width: 30,
    paddingBottom: 1,
  },
  menuIcon : {
    marginRight : 10
  },
  spanCartTotal : {
    position: 'absolute',
    top: -3,
    left: -2,
    backgroundColor : '#FFF',
    borderColor : '#0c0c0c',
    borderWidth : 1,
    borderRadius : 50,
    width: 18,
    height : 18,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  aside: {
    display:'none',
    position : 'absolute'
  },
  asideOpen: {
    position : 'absolute',
    top : 140,
    backgroundColor: '#0c0c0c',
    width: '100%',
    height: screenheight - 140,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: '5%',
    paddingBottom: '10%',
  },
  img: {
    width: 40,
    height: 40,
    marginRight : 40
  },
  namelistClose: {
    display: 'none',
  },
  namelist: {
    color: '#F1F2F5',
  },
  menulist: {
    width: '80%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-bettween'
  }
})


