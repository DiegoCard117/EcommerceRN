import React from 'react';
import { View, ScrollView, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

import Footer from '../Footer';
import Contacts from '../Contacts';

import cart from '../../assets/img/cartAdd.png'
// import { Container } from './styles';

export default function PageProducts({route, navigation}) {
  const { data } = route.params

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.containerImg}>
          <Image
            style={styles.imgProduct}
            source={{uri: data.img}}
            alt=''
            width={245}
            height={203}
          />
        </View>
        <View style={styles.Titleprices}>
          <Text style={styles.nameProduct}>{data.name}</Text>
          <Text style={styles.priceOlder}>de R$ {data.price * 2} por:</Text>
          <Text style={styles.spanVista}>à vista</Text>
          <Text style={styles.price}>R$ {data.price}</Text>
          <Text>ou</Text>
          <Text style={styles.priceCart}>R$ {(data.price * 1.2).toFixed(2)}</Text>
          <Text style={styles.divisor}>em até 12x de <Text style={styles.diviPrice}>{((data.price / 12) * 1.2).toFixed(2)}</Text> sem juros no cartão</Text>
        </View>
        <TouchableOpacity style={styles.btn}>
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
    height : 400,
    backgroundColor : '#FFF',
    borderRadius : 10,
    marginVertical : 20
  },
  titleParc : {
    fontSize : 20
  }
})