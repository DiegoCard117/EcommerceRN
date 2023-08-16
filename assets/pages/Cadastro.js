import { Text, ScrollView, StyleSheet, View, TextInput, Image } from "react-native"

import SelectDropdown from 'react-native-select-dropdown'

import Header from "../../components/Header"
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";

import arrow from '../img/arrow.png'

export default function Cadastro({navigation}) {
  const [name, setName] = useState('')
  const [sobrenome, setSobrenome] = useState('')
  const [number, setNumber] = useState('')

  return (
    <ScrollView>
      <Header
        navigation={navigation}
      />
      <View style={styles.container}>
        <View style={styles.loginBack}>
          <Text
            style={styles.spanLoginBack}
            onPress={() => {
              navigation.navigate('Login')
            }}
          >Ja possui uma conta?</Text>
        </View>
        <View style={styles.contentNewClient}>
          <Text style={styles.TextTitle}>Novo Cliente?</Text>
          <Text style={styles.TextSecond}>
            É novo por aqui?
            {'\n'}
            Informe seus dados e uma senha para aproveitar todos os benefícios de ter uma conta.
          </Text>
        </View>
        <View style={styles.InputForm}>
          <SafeAreaView style={styles.AreaForm}>
            {/* nome */}
            <Text style={styles.textInput}>Nome</Text>
            <TextInput
              style={styles.Input}
              onChangeText={setName}
              value={name}
              placeholder="Digite seu primeiro nome"
              placeholderTextColor={'#F1F2F5'}
            />
            {/* sobrenome */}
            <Text style={styles.textInput}>Sobrenome</Text>
            <TextInput
              style={styles.Input}
              onChangeText={setSobrenome}
              value={sobrenome}
              placeholder="Digite seu segundo nome"
              placeholderTextColor={'#F1F2F5'}
            />
            {/* numero */}
            <Text style={styles.textInput}>Celular</Text>
            <TextInput
              style={styles.Input}
              onChangeText={setNumber}
              value={number}
              placeholder="(XX)X XXXX XXXX"
              placeholderTextColor={'#F1F2F5'}
              keyboardType="numeric"
            />
            {/* genero */}
            <Text style={styles.textInput}>Gênero</Text>
            <View style={styles.selectDropdown}>
              <SelectDropdown
                buttonStyle ={styles.dropdown}
                buttonTextStyle= {styles.textDropdown}
                data={[
                  "Masculino",
                  "Feminino",
                  "Transgenero",
                  "Não Binário",
                  "Outro"
                ]}
                buttonTextAfterSelection={(item, index) => {
                  <View style={styles.textInput}>
                    <Text style={styles.textDropdown}>{item}</Text>
                  </View>
                  return item
                }}
               />
               <Image
                source={arrow}
                width={25}
                height={25}
               />
            </View>
          </SafeAreaView>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container : {
    flex: 1,
    alignItems : 'center',
  },
  contentNewClient : {
    alignItems : 'center',
    width : '55%',
  },
  TextTitle : {
    fontSize : 32,
    paddingBottom: 20
  },
  TextSecond : {
    textAlign : 'center',
  },
  loginBack : {
    width: '100%',
    alignItems: 'flex-end',
    padding: 10,
    paddingBottom: 20
  },
  InputForm : {
    width : '100%',
  },
  AreaForm : {
    alignItems : 'start',
    marginLeft : '5%'
  },
  Input : {
    backgroundColor : '#0c0c0c',
    width : '95%',
    padding : 10,
    borderRadius : 5,
    color : '#f1f2f5',
    marginBottom : 20
  },
  textInput : {
    fontSize : 20,
    position: 'relative',
  },
  dropdown : {
    backgroundColor : '#0c0c0c',
    width : '90%',
    borderRadius : 5,
  },
  textDropdown : {
    color :'#F1F2F5'
  },
  selectDropdown : {
    backgroundColor :'#0c0c0c',
    width : '95%',
    flexDirection : 'row',
    alignItems :'center',
    borderRadius : 5
  }
})