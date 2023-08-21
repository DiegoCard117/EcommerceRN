import React from 'react';
import { View, ScrollView, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

import Footer from '../Footer';
import Contacts from '../Contacts';


import cart from '../../assets/img/cartAdd.png'
import formatCurrency from '../../assets/utils/formatCurrency';

export default function PageProducts({route, navigation}) {
  const { products } = route.params

  const parcelas = Array.from({ length: 12 }, (_, index) => ({
    numero: index + 1,
    valor: index === 0 ? products.price.toFixed(2) : ((products.price * 1.2) / (index + 1)).toFixed(2),
  }));

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.containerImg}>
          <Image
            style={styles.imgProduct}
            source={{uri: products.thumbnail.replace(/\w\.jpg/gi, 'W.jpg')}}
            alt=''
            width={245}
            height={203}
            resizeMode='contain'
          />
        </View>
        <View style={styles.Titleprices}>
          <Text style={styles.nameProduct}>{products.title}</Text>
          <Text style={styles.priceOlder}>de {formatCurrency(products.price * 2)} por:</Text>
          <Text style={styles.spanVista}>à vista</Text>
          <Text style={styles.price}>{formatCurrency(products.price)}</Text>
          <Text>ou</Text>
          <Text style={styles.priceCart}>{formatCurrency((products.price * 1.2).toFixed(2))}</Text>
          <Text style={styles.divisor}>em até 12x de <Text style={styles.diviPrice}>{((products.price / 12) * 1.2).toFixed(2)}</Text> sem juros no cartão</Text>
        </View>
        {/* botao de adicionar no carrinho */}
        <TouchableOpacity style={styles.btn}
        onPress={() => navigation.navigate('Cart', {products})}
        >
          <Image
            source={cart}
          />
          <View style={styles.textBtn}>
            <Text style={styles.buy}>Comprar</Text>
            <Text style={styles.putOnCar}>Colocar no carrinho</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.containerParc}>
          <View>
            <Text style={styles.titleParc}>Parcelamento</Text>
            <Text>(somente no cartão)</Text>
          </View>
          <View style={styles.boxParc}>
            {parcelas.map((parcela) => (
              <Text
                style={styles.textPriceParc}
                key={parcela.numero}>
                {parcela.numero}x de R$ {parcela.valor} sem juros
              </Text>
            ))}
          </View>
        </View>
        {/* components Contacts e Footer abaixo */}
        <Contacts/>
        <View style={styles.footer}>
          <Footer/>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container : {
    flex: 1,
    alignItems : 'center'
  },
  containerImg : {
    backgroundColor : '#FFF',
    width : '80%',
    alignItems: 'center',
    padding: 15,
    borderRadius : 10
  },
  Titleprices : {
    width : '90%',
  },
  nameProduct : {
    fontSize : 20,
    marginVertical : 20,
  },
  priceOlder : {
    color : 'red',
    marginBottom : 5
  },
  spanVista : {
    color : 'green'
  },
  price : {
    fontSize : 20,
    color : 'green',
    marginBottom : 5
  },
  priceCart : {
    marginTop : 5,
    fontSize : 18,
    color : 'red'
  },
  divisor : {
    width : '50%',
  },
  diviPrice : {
    color : 'red'
  },
  btn : {
    width : '80%',
    height : 65,
    backgroundColor : 'green',
    borderRadius : 10,
    flexDirection : 'row',
    alignItems : 'center',
    justifyContent : 'center',
    marginVertical : 25
  },
  buy : {
    fontSize : 20,
    color : '#FFF'
  },
  putOnCar : {
    color : '#FFF',
    fontSize : 14
  },
  textBtn : {
    marginLeft : 5
  },
  footer: {
    width: '100%',
    backgroundColor: '#384359',
    alignItems: 'center'
  },
  containerParc : {
    width : '80%',
  },
  boxParc : {
    padding: 10,
    backgroundColor : '#FFF',
    borderRadius : 10,
    marginVertical : 20
  },
  titleParc : {
    fontSize : 20
  },
  textPriceParc : {
    fontSize : 14,
    margin : 2
  }
})