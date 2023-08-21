import React, { useContext } from "react";

import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";

import trash from '../assets/img/trash.png'
import formatCurrency from "../assets/utils/formatCurrency";
import searchContext from "../assets/contexts/search";

export default function CartItem({products}) {


  const { cartItems, setCartItems } = useContext(searchContext)
  const {id, title, thumbnail, price} = products

  const handleRemoveItem = () => {
    const updateItems = cartItems.filter((item) => item.id != id)
    setCartItems(updateItems)
  }

  return (
    <View style={styles.cartBox}>
      <View style={styles.boxImg}>
        <Image
          style={styles.imgProduct}
          source={{uri: thumbnail}}
          alt=''
          width={90}
          height={100}
        />
      </View>
      <View style={styles.rightCartBox}>
        <View style={styles.nameBox}>
          <Text
            numberOfLines={3}
            style={styles.nameProduct}>{title}
          </Text>
        </View>
          <Text
            numberOfLines={3}
            style={styles.price}>{formatCurrency(price)}
          </Text>
        {/* botao de add */}
        <View style={styles.add}>
          <View style={{flexDirection: 'row'}}>

            <TouchableOpacity>
              <Text style={styles.spanBtnAdd}>-</Text>
            </TouchableOpacity>

            <Text style={styles.spanBtnAdd}>1</Text>

            <TouchableOpacity>
              <Text style={styles.spanBtnAdd}>+</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={handleRemoveItem}
            >
              <Image
                source={trash}
                alt=''
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  cartBox : {
    width : '100%',
    flexDirection : 'row',
    backgroundColor : '#D9D9D9',
    marginVertical: 10,
    justifyContent : 'space-between',
    paddingHorizontal : 20,
    paddingVertical: 10,
    borderRadius: 5
  },
  rightCartBox : {
    flexDirection : 'column'
  },
  boxImg : {
    width : '35%',
    padding: 5,
    backgroundColor: '#FFF',
    borderRadius : 5
  },
  rightCartBox : {
    width : '60%',
  },
  nameBox : {
    padding : 5,
    borderRadius : 5,
    backgroundColor: '#FFF',
    marginBottom : 10
  },
  add : {
    width : '45%',
    backgroundColor: '#FFF',
    alignSelf: 'center',
    alignItems : 'center',
    justifyContent : 'center',
    borderRadius : 5
  },
  spanBtnAdd : {
    fontSize: 14,
    marginHorizontal : 5
  },
  price : {
    alignSelf : 'center',
    marginBottom : 10,
    fontSize : 20,
    color : 'green'

  }
})