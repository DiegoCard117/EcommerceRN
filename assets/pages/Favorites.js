import React, { useContext, useState } from 'react';
import { View, ScrollView, Text, StyleSheet, Dimensions, Image, TouchableOpacity, SafeAreaView, TextInput } from 'react-native';

import cart from '../img/cart.png'
import trash from '../img/trashBig.png'
import heart from '../img/heart.png'
import searchContext from '../contexts/search';
import BoxFavorite from '../../components/BoxFavorite';

const Favorites = () => {
  
  const {favorites, setFavorites} = useContext(searchContext)

  const eraseFavorites = () => {
    setFavorites([])
  }

  return (
    <ScrollView style={styles.ScrollView}>
      <View style={styles.boxTop}>
        <View style={styles.boxleft}>
          <Image
            source={heart}
            width={25}
            height={25}
          />
          <Text>Meus Favoritos</Text>
        </View>
        <TouchableOpacity
          style={styles.box}
          onPress={eraseFavorites}
          >
          <Image
            source={trash}
            width={25}
            height={25}
          />
          <Text>Limpar Favoritos</Text>
        </TouchableOpacity>
      </View>
       { favorites.map((favorites) => <BoxFavorite
          key={favorites.id}
          products={favorites}/>
        )}
        
    </ScrollView>
  )
}

export default Favorites;

let screenheight = Dimensions.get("window").height
let screewidth = Dimensions.get('window').width

const styles = StyleSheet.create({
  ScrollView : {
    backgroundColor : '#FFF'
  },
  boxTop : {
    flexDirection :'row',
    justifyContent : 'space-between',
    width: '85%',
    alignSelf: 'center'
  },
  boxleft : {
    flexDirection : 'row',
    justifyContent: 'center',
    alignItems : 'center',
    marginVertical : 10,
    paddingHorizontal : 10,
    paddingVertical : 2,
    backgroundColor : '#D9D9D9',
    borderRadius : 5,
  },
  box : {
    flexDirection : 'row',
    justifyContent: 'center',
    alignItems : 'center',
    marginVertical : 10,
    borderRadius : 5,
    paddingHorizontal : 10,
    paddingVertical : 2,
    backgroundColor : '#F1F2F5',
  },
  img : {
    padding : 10,
    backgroundColor: '#FFF'
  }
})