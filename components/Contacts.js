import { View, StyleSheet, Image, Text } from "react-native";
import clock from '../assets/img/clock.png'
import phone from '../assets/img/phone.png'
import email from '../assets/img/email.png'

import home from '../assets/img/home.png'

export default function Contacts() {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.content}>
          <View style={styles.box}>
            <Image
              source={clock}
              alt=''
            />
            <Text style={styles.text}>
              Atendimento Loja Virtual
              {'\n'}
              Segunda a sexta 8h às 12h e das 14h às 18h
              </Text>
          </View>
          <View style={styles.box}>
            <Image
              source={phone}
              alt=''
            />
            <Text style={styles.text}>(12)345678910</Text>
          </View>
          <View style={styles.box}>
            <Image
              source={email}
              alt=''
            />
            <Text style={styles.text}>lorem@ipslum.com</Text>
          </View>
        </View>
      </View>
      <View style={styles.container}>
        <View style={styles.contentBottom}>
          <View style={styles.box}>
            <Image
              source={home}
              alt=''
            />
            <Text style={styles.textLoja}>
            Loja física
              </Text>
          </View>
          <View style={styles.box}>
            <Text style={styles.text}>Segunda a sexta das 9h as 19h Sábado das 9h as 13h</Text>
          </View>
        </View>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'collum',
    width: '77%',
    margin: '4%',
    marginRight: 14,
    marginTop : 14,  backgroundColor : '#0c0c0c', borderWidth: 2,
    backgroundColor: '#0c0c0c',
    borderRadius : 10
  },
  content : {
    height : 300 ,
    alignItems : 'center',
    justifyContent : 'space-around'
  },
  contentBottom : {
    height : 200 ,
    alignItems : 'center',
    justifyContent : 'space-around'
  },
  box: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  text: {
    color: '#F1F2F5',
    width : '60%',
    textAlign : 'center',
  },
  textLoja: {
    color: '#F1F2F5',
    width : '40%',
    textAlign : 'center',
    fontSize: 18,
  },
})