import React, {useContext} from "react"
import searchContext from "../assets/contexts/search"
import { View, Text, TouchableOpacity, Image, StyleSheet, ScrollView } from "react-native";
import formatCurrency from "../assets/utils/formatCurrency";

import cart from '../assets/img/cart.png'
import heart from '../assets/img/heart.png'

export default function BoxFavorite({products}) {

  const { favorites, setFavorites } = useContext(searchContext)
  const {id, title, thumbnail, price} = products

  const handleRemoveItem = () => {
    const updateItems = favorites.filter((item) => item.id != id)
    setFavorites(updateItems)
  }

  return (
    <View style={styles.container}>
      <View style={styles.boxLeft}>
        <View style={styles.img}>
          <Image
            source={{uri: thumbnail}}
            width={89}
            height={89}
            resizeMode="cover"
          />
        </View>
        <View style={styles.btnCartFav}>
          <Image
            source={cart}
            width={89}
            height={89}
            resizeMode="cover"
          />
          <Image
            source={heart}
            width={89}
            height={89}
            resizeMode="cover"
          />
        </View>
      </View>
      <View>
        <View style={styles.boxName}>
          <Text>{title}</Text>
        </View>
        <View style={[styles.boxName, {marginTop: 10, height: '55%'}]}>
          <Text style={styles.spanRed}>de <Text>{formatCurrency(price)}</Text> por:</Text>
          <Text style={styles.spanGreen}>à vista</Text>
          <Text style={styles.PriceGreen}>{formatCurrency(price)}</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container : {
    flexDirection : 'row',
    width : '90%',
    alignSelf : 'center',
    backgroundColor : '#D9D9D9',
    padding : 20,
    borderRadius : 5,
    height: 200,
    marginBottom : 10
  },
  img : {
    padding: 5,
    backgroundColor: '#FFF',
    borderRadius: 5,
    marginRight: 20,
  },
  boxName : {
    width: '80%',
    height: '40%',
    backgroundColor: '#FFF',
    padding: 5,
    borderRadius: 5,
    marginRight: -5
  },
  btnCartFav : {
    flexDirection: 'row',
    marginRight: 18,
    marginTop: 10
  },
  boxLeft : {
    alignItems : 'center',
  },
  spanRed : {
    color: 'red'
  },
  spanGreen : {
    color: 'green',
    marginTop : 10
  },
  PriceGreen : {
    color: 'green',
    fontSize : 20
  },
})