import { Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  }
from "react-native"

import { Ionicons } from '@expo/vector-icons'
import locker from '../img/locker.png'

import React, { useState, useContext } from "react";

import AuthContext from "../contexts/auth";

import { useForm, Controller } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

const schema = yup.object({
  email: yup.string().email("email Invalido").required("Informe seu email"),
  password: yup.string().min(6, "A senha deve conter no minimo 6 digitos").required("Digite sua senha")
})

export default function Login({navigation}) {
  const { control, handleSubmit, formState: {errors} } = useForm({
    resolver: yupResolver(schema)
  })
  const [ hidePass, setHidePass] = useState(true)

  const {signed, user, signIn} = useContext(AuthContext)
  
  //console.log(signed)
  //console.log(user)
  function handleLogin(data) {
    console.log(data)
    if (data.email != '' && data.password != '') {
      signIn()
    }
  }

  return (
    <>
      {/* começo do formulario de login*/}
      <View style={styles.container}>
        <View style={styles.loginTop}>
          <Image
            source={locker}
            alt=""
            width={40}
            height={40}
          />
          <Text style={styles.titleLogin}>Já tem uma conta?</Text>
          <Text style={styles.spanLogin}>Informe seus dados para o login</Text>
        </View>
        <View style={styles.loginMiddle}>
          <SafeAreaView style={styles.formLogin}>
            <Controller
              control={control}
              name="email"
              render={({field:{onChange, value}}) => (
                <TextInput
                  style={styles.TextInput}
                  onChangeText={onChange}
                  value={value}
                  placeholder="Email"
                  placeholderTextColor={'#F1F2F5'}
                />
              )}
            />
            {errors.email && <Text style={styles.errorMessage}>{errors.email.message}</Text>}
            <View style={styles.inputArea}>
            <Controller
              control={control}
              name="password"
              render={({field:{onChange, value}}) => (
                <TextInput
                  style={styles.TextPassword}
                  onChangeText={onChange}
                  value={value}
                  placeholder="Senha"
                  placeholderTextColor={'#F1F2F5'}
                />
              )}
            />
            {errors.password && <Text style={styles.errorMessagePass}>{errors.password.message}</Text>}
              {/* botao de ocultar senha */}
              <TouchableOpacity style={styles.iconPassword} onPress={() => setHidePass(!hidePass)}>
                { hidePass ?
                  <Ionicons name='eye' color='#F1F2F5' size={25}/>
                :
                  <Ionicons name='eye-off' color='#F1F2F5' size={25}/>}
              </TouchableOpacity>
            </View>
            {/* login */}
            <TouchableOpacity
              style={styles.btnSubmit}
              onPress={handleSubmit(handleLogin)}
            >
              <Text style={styles.btnText}>Acessar Conta</Text>
            </TouchableOpacity>

          </SafeAreaView>
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
        <View style={styles.loginBottom}>
          <TouchableOpacity style={styles.forgot}>
            <Text>Esqueci minha senha</Text>
          </TouchableOpacity>
          <View>
            <TouchableOpacity style={styles.newClient} 
              onPress={() => {
                navigation.navigate('Cadastro')
              }}
            >
              <Ionicons name="person" size={40}/>
              <Text style={styles.textNewClient}>Novo Cliente?</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container : {
    alignItems : 'center',
    flex: 1
  },
  loginTop : {
    alignItems: 'center',
    paddingTop : 20,
  },
  titleLogin: {
    fontSize: 24,
  },
  loginMiddle : {
    justifyContent : 'center',
    width: '100%',
    flex: 1 ,
  },
  inputArea : {
    flexDirection : 'row',
    justifyContent : 'center',
    backgroundColor : '#0c0c0c',
    width: '90%',
    padding : 10,
    borderRadius : 5,
  },
  formLogin : {
    alignItems: 'center'
  },
  TextInput : {
    margin: 'auto',
    backgroundColor : '#0c0c0c',
    margin : '5%',
    marginTop: 10,
    padding : 10,
    width: '90%',
    borderRadius: 5,
    color : '#F1F2F5'
  },
  TextPassword : {
    width : '90%',
    color : '#F1F2F5'
  },
  iconPassword: {
    width : '12%',
    justifyContent: 'center',
    alignItems: 'center',
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
  newClient : {
    flexDirection: 'row',
    justifyContent : 'center',
    alignItems : 'center',
  },
  textNewClient : {
    fontSize : 24,
  },
  forgot : {
    paddingBottom : 20
  },
  errorMessage : {
    position : 'absolute',
    top : 25,
    color: '#FFF',
    fontSize: 10
  },
  errorMessagePass : {
    position : 'absolute',
    top : 15,
    color: '#FFF',
    fontSize: 10

  }
})