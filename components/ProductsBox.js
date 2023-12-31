import React, { useContext } from 'react';
import { useState, useEffect } from 'react';
import {
    ScrollView,
    View,
    StyleSheet,
    Image,
    Text,
    Dimensions,
    TouchableOpacity,
    SafeAreaView
   }
from 'react-native';

import Contacts from './Contacts';
import Footer from './Footer';

import PageProduct from '../components/PageProducts/PageProduct'
import fetchProducts from '../assets/services/Api/fetchProducts';
import formatCurrency from '../assets/utils/formatCurrency';
import searchContext from '../assets/contexts/search';

import Loading from './Loading';


export default function ProductsBox({navigation}) {

  const {products, setProducts} = useContext(searchContext)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchProducts('iphone').then((response) => {
      setProducts(response)
      setLoading(false)
    })
  }, [])

  return (
    <>
      {(loading && <Loading/>) || (
        <SafeAreaView style={styles.safeArea}>
          <View style={styles.containerbig}>
            <ScrollView style={styles.ScrollView}>
              {products.slice(0, 20).map((products) => (
                <TouchableOpacity
                  style={styles.container}
                  key={products.id}
                  onPress={() => navigation.navigate('PageProduct', {products})}
                  >
                  <View style={styles.imgProduct}>
                    <Image
                      style={{width:190, height:167}}
                      source={{uri : products.thumbnail.replace(/\w\.jpg/gi, 'W.jpg')}}
                      alt=''
                      resizeMode='contain'
                    />
                    

                  </View>
                  <Text style={styles.titleProduct}>{products.title}</Text>
                  <Text style={styles.spanPriceOlder}>de {formatCurrency(products.price * 2)} por:</Text>
                  <Text style={styles.spanVista}>à vista</Text>
                  <Text style={styles.price}>{formatCurrency(products.price)}</Text>
                  <Text style={styles.divisor}>em até 12x de {((products.price / 12) * 1.2).toFixed(2)} sem juros no cartão</Text>
              </TouchableOpacity>
              ))}
              <Contacts/>
              <Footer/>
            </ScrollView>
          </View>
        </SafeAreaView>
      )}
    </>
  );
}

let screenheight = Dimensions.get("window").height


const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  containerbig : {
    flexDirection: 'collum',
    height: '100%'
  },
  ScrollView: {
  },
  container: {
    backgroundColor: '#FFF',
    height: 470,
    width: '75%',
    margin: '5%',
    padding: 10,

    shadowColor: '#0c0c0c',
    shadowOpacity: 0.2,
    shadowRadius: 3,

    elevation: 5,
    borderRadius : 5,
    alignSelf : 'center'
  },
  imgProduct: {
    alignItems: 'center',
  },
  titleProduct: {
    fontSize: 18,
  },
  spanPriceOlder: {
    textAlign: 'left',
    color: 'red',
    marginTop: 15,
    fontSize: 12,
  },
  spanVista: {
    color: 'green',
    marginTop: 20,
    fontSize: 12,
  },
  price: {
    color: 'green',
    marginBottom: 20,
    fontSize: 20,
  },
  divisor : {
    fontSize: 12,
    width: 150,
  },

})

/*
<View style={styles.container}>
  <View style={styles.imgProduct}>
    <Image
      source={gpu}
      alt=''
    />
  </View>
  <Text style={styles.titleProduct}>PLACA DE VIDEO MSI GEFORCE RTX 3050 GAMING X, 8GB, GDDR6, 128-BIT, 912-V397-423</Text>
  <Text style={styles.spanPriceOlder}>de R$ 3.203,74 por:</Text>
  <Text style={styles.spanVista}>à vista</Text>
  <Text style={styles.price}>R$ 1.599,99</Text>
  <Text style={styles.divisor}>em até 12x de 159,99 sem juros no cartão</Text>
</View>
 */