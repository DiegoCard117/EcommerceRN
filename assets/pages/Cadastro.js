import React from "react";
import { Text, ScrollView, StyleSheet, View, TextInput, Image, TouchableOpacity, Dimensions } from "react-native"

import SelectDropdown from 'react-native-select-dropdown'

import Header from "../../components/Header"
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";

import { Ionicons } from '@expo/vector-icons'

import arrow from '../img/arrow.png'

export default function Cadastro({navigation}) {
  const [name, setName] = useState('')
  const [sobrenome, setSobrenome] = useState('')
  const [number, setNumber] = useState('')

  const [email, setEmail] = useState('')
  const [confirmEmail, setConfirmEmail] = useState('')

  const [senha, setSenha] = useState('')
  const [confirmSenha, setConfirmSenha] = useState('')

  return (
    <ScrollView>
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
            {/* email */}
            <Text style={styles.textInput}>Email</Text>
            <TextInput
              style={styles.Input}
              onChangeText={setEmail}
              value={email}
              placeholder="Digite seu Email"
              placeholderTextColor={'#F1F2F5'}
            />
            <Text style={styles.textInput}>Confirme seu Email</Text>
            <TextInput
              style={styles.Input}
              onChangeText={setConfirmEmail}
              value={confirmEmail}
              placeholder="Confirme seu Email"
              placeholderTextColor={'#F1F2F5'}
            />
            {/* senhas */}
            <View style={styles.containerPassword}>
                <Text style={styles.textInput}>Senha</Text>
              <View style={styles.contentPassword}>
                <TextInput
                  style={styles.InputPass}
                  onChangeText={setSenha}
                  value={senha}
                  placeholder="Digite sua senha"
                  placeholderTextColor={'#F1F2F5'}
                />
                <TextInput
                  style={styles.InputPass}
                  onChangeText={setConfirmSenha}
                  value={confirmSenha}
                  placeholder="Confirme sua senha"
                  placeholderTextColor={'#F1F2F5'}
                />
              </View>
            </View>
          </SafeAreaView>
            <View style={styles.btnArea}>
              <TouchableOpacity style={styles.btnSubmit}>
                <Text style={styles.btnText}>Criar Conta</Text>
              </TouchableOpacity>
            </View>
          {/* logar com redes sociais */}
          <View style={styles.loginSocial}>
            <TouchableOpacity>
              <Ionicons style={styles.iconSocial} name="logo-google" color='#0c0c0c' size={25}/>
            </TouchableOpacity>
            <TouchableOpacity>
              <Ionicons style={styles.iconSocial} name="logo-facebook" color='#0c0c0c' size={25}/>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

let screenwidth = Dimensions.get("window").width

const styles = StyleSheet.create({
  container : {
    flex: 1,
    alignItems : 'center',
    marginBottom : 50
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
    borderRadius : 5,
    marginBottom: 20
  },
  contentPassword : {
    flexDirection : 'row',
    
  },
  InputPass : {
    backgroundColor : '#0c0c0c',
    padding : 10,
    width : '45%',
    marginRight : '5%',
    color : '#F1F2F5'
  },
  btnSubmit : {
    backgroundColor : '#0c0c0c',
    padding : 10,
    width : '50%',
    alignItems: 'center',
    justifyContent : 'center',
    marginTop : 20,
    borderRadius : 5,
  },
  btnText : {
    color : '#F1F2F5',
  },
  loginSocial : {
    flexDirection : 'row',
    justifyContent : 'center',
  },
  iconSocial : {
    padding : 15
  },
  loginBottom : {
    justifyContent : 'center',
    alignItems : 'center',
    padding : 20,
  },
  btnArea : {
    width : '100%',
    alignItems: 'center',
  },

})