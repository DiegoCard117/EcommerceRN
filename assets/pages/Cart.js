import React, { useContext, useState } from 'react';
import { View, ScrollView, Text, StyleSheet, Dimensions, Image, TouchableOpacity, SafeAreaView, TextInput } from 'react-native';

// import { Container } from './styles';

import cart from '../img/cart.png'
import trash from '../img/trash.png'
import truck from '../img/truck.png'
import searchContext from '../contexts/search';
import CartItem from '../../components/CartItem';
import formatCurrency from '../utils/formatCurrency';

const Cart = () => {
  
  const [cep, setCep] = useState('')

  const {cartItems , setCartItems} = useContext(searchContext)
  {/* somar o valor dos produtos no carrinho */}
  const totalPrice = cartItems.reduce((acc, item) => item.price + acc, 0)

  const eraseCart = () => {
    setCartItems([])
  }

  return (
    <ScrollView style={styles.ScrollView}>
      <View style={styles.container}>
        <View style={styles.boxCart}>
          <Image
            source={cart}
          />
          <Text>Meu Carrinho</Text>
        </View>
        <TouchableOpacity style={styles.buyBtn}>
          <Text style={styles.textBtn}>Finalizar Pedido</Text>
        </TouchableOpacity>
        <View style={styles.boxResume}>
          <Text style={styles.subTotal}>Resumo</Text>
          <View style={styles.subTotalBox}>
            <Text style={styles.subTotal}>Subtotal</Text>
            <Text style={styles.subTotal}>{formatCurrency(totalPrice)}</Text>
          </View>
        </View>
        <View style={styles.TotalBox}>
          <Text style={styles.Total}>Total</Text>
          <Text style={styles.Total}>{formatCurrency(totalPrice)}</Text>
        </View>
        <View style={styles.boxResume}>
          <Text style={{color: 'green', fontSize : 12}}>à vista</Text>
          <Text style={{color: 'green', fontSize : 20}}>{formatCurrency(totalPrice)}</Text>
          <Text style={{fontSize : 12}}>ou</Text>
          <Text style={{fontSize : 18 , color : 'red'}}>{formatCurrency(totalPrice * 1.2)}</Text>
          <Text style={styles.spanParc}>em até 12x de <Text style={{color: 'red'}}>{formatCurrency((totalPrice / 12) * 1.2) }</Text> sem juros no cartão</Text>
        </View>
        {/* componente que gera os cards no carrinho */}
        { cartItems.map((cartItems) => <CartItem
          key={cartItems.id}
          products={cartItems}/>
        )}
        
        <TouchableOpacity
          style={styles.btnClear}
          onPress={eraseCart}
          >
          <Image
            source={trash}
            alt=''
          />
          <Text>Limpar Carrinho</Text>
        </TouchableOpacity>
        {/* cep */}
        <View style={styles.cepBox}>
            <View style={styles.Frete}>
              <Text>Frete e Prazos</Text>
            </View>
            {/* calcular frete */}
          <SafeAreaView style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
            <TextInput
              placeholder='Cep *'
              placeholderTextColor={'#F1F2F5'}
              style={styles.input}
              value={cep}
              onChangeText={setCep}
            />
            <TouchableOpacity style={styles.btnCalcFrete}>
              <Image
              source={truck}
              alt=''
              />
              <Text style={{color: '#FFF'}}>Calcular</Text>
            </TouchableOpacity>
          </SafeAreaView>
        </View>
        {/* botao finalizar */}
        <TouchableOpacity style={styles.buyBtn}>
          <Text style={styles.textBtn}>Finalizar Pedido</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

export default Cart;

let screenheight = Dimensions.get("window").height
let screewidth = Dimensions.get('window').width

const styles = StyleSheet.create({
  ScrollView : {
    backgroundColor : '#FFF'
  },
  container : {
    alignSelf: 'center',
    width : '90%',
    marginBottom: 20
  },
  boxCart : {
    backgroundColor : '#D9D9D9',
    width : '50%',
    flexDirection : 'row',
    alignItems : 'center',
    justifyContent : 'center',
    borderRadius : 5,
    marginTop : 10
  },
  buyBtn : {
    backgroundColor : 'green',
    padding : 10,
    borderRadius: 5,
    justifyContent : 'center',
    alignItems : 'center',
    marginVertical : 10
  },
  textBtn : {
    fontSize : 15,
    color : '#F1F2F5'
  },
  boxResume : {
    backgroundColor : '#D9D9D9',
    borderRadius : 5,
    paddingHorizontal: 25,
    paddingVertical : 10,
    alignItems : 'center',
  },
  subTotalBox : {
    width: '95%',
    flexDirection : 'row',
    justifyContent : 'space-between'
  },
  TotalBox : {
    alignSelf : 'center',
    backgroundColor : '#FFF',
    width: '80%',
    flexDirection : 'row',
    justifyContent : 'space-between',
  },
  subTotal : {
    fontSize : 20,
    marginVertical: 3
  },
  Total : {
    fontSize : 24,
    paddingVertical : 30
  },
  btnClear : {
    flexDirection : 'row',
    backgroundColor: '#D9D9D9',
    width : '50%',
    paddingVertical: 4,
    borderRadius : 5,
    alignItems : 'center',
    justifyContent : 'center',
    alignSelf : 'flex-end',
    marginTop : 5,
  },
  cepBox : {
    backgroundColor : '#D9D9D9',
    marginTop : 10,
    borderRadius : 5,
  },
  input : {
    backgroundColor : '#0c0c0c',
    width : '55%',
    padding : 2,
    paddingHorizontal: 10,
    margin : 5,
    borderRadius : 5,
    color: '#FFF'
  },
  Frete : {
    paddingHorizontal : 15,
    paddingTop : 5,
  },
  btnCalcFrete : {
    backgroundColor : '#0c0c0c',
    flexDirection : 'row',
    marginRight: 5,
    padding: 6,
    paddingHorizontal: 20,
    borderRadius: 5
  },
})