import { View, Text, StyleSheet, TouchableOpacity, Image, Dimensions } from "react-native";

import visa from '../assets/img/visa.png'
import american from '../assets/img/american.png'
import pix from '../assets/img/pix.png'
import master from '../assets/img/master.png'

export default function Footer() {
  return (
    <>
      <View style={styles.container}>
        <View>
          <Text style={styles.title}>Institucional</Text>
          <TouchableOpacity><Text style={styles.list}>Quem somos?</Text></TouchableOpacity>
          <TouchableOpacity><Text style={styles.list}>Localizaçao</Text></TouchableOpacity>
          <TouchableOpacity><Text style={styles.list}>Nossas Lojas</Text></TouchableOpacity>
        </View>
        <View>
          <Text style={styles.title}>Dúvidas</Text>
          <TouchableOpacity><Text style={styles.list}>Entrega</Text></TouchableOpacity>
          <TouchableOpacity><Text style={styles.list}>Garantia</Text></TouchableOpacity>
          <TouchableOpacity><Text style={styles.list}>Como Comprar?</Text></TouchableOpacity>
          <TouchableOpacity><Text style={styles.list}>Formas de Pagamento</Text></TouchableOpacity>
          <TouchableOpacity><Text style={styles.list}>Sobre Boletos</Text></TouchableOpacity>
        </View>
        <View>
          <Text style={styles.title}>Ajuda</Text>
          <TouchableOpacity><Text style={styles.list}>SAC</Text></TouchableOpacity>
          <TouchableOpacity><Text style={styles.list}>Fale Conosco</Text></TouchableOpacity>
          <TouchableOpacity><Text style={styles.list}>Termos do aceite</Text></TouchableOpacity>
          <TouchableOpacity><Text style={styles.list}>Politicas de Privacidade</Text></TouchableOpacity>
        </View>
        <View style={styles.pagamento}>
          <Text style={styles.title}>Pagamento</Text>
          <View style={styles.imgPay}>
          <Image
            style={styles.pay}
            source={visa}
          />
          <Image
            style={styles.pay}
            source={american}
          />
          <Image
            style={styles.pay}
            source={pix}
          />
          <Image
            style={styles.pay}
            source={master}
          />
          </View>
        </View>
      </View>
    </>
  )
}

let screewidth = Dimensions.get('window').width

const styles = StyleSheet.create({
  container: {
    backgroundColor : '#384359',
    justifyContent: 'space-around',
    padding: 14,
    width : '100%',
  },
  title: {
    fontSize: 24,
    color : '#F1F2F5',
    paddingBottom: 8,
  },
  list: {
    color : '#F1F2F5',
    padding : 2
  },
  pagamento : {
    marginTop: 50,
    padding: 0,
    justifyContent: 'center',
    alignItems : 'center',
  },
  imgPay : {
    flexDirection: 'row',
  },
  pay: {
    margin: 4,
  }
})