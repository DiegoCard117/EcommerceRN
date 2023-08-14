import React from 'react';
import { View, StyleSheet, Dimensions, Text, Image, TouchableOpacity, ScrollView } from 'react-native';

// import { Container } from './styles';

import gpu from '../assets/img/gpu.png'
import mouse from '../assets/img/mouse.png'
import pc from '../assets/img/pc.png'
import upgrade from '../assets/img/upgrade.png'
import monitor from '../assets/img/monitor.png'
import cadeira from '../assets/img/cadeira.png'
import mesa from '../assets/img/mesa.png'
import notebook from '../assets/img/notebook.png'
import console from '../assets/img/console.png'
import roteador from '../assets/img/roteador.png'

const imagens = [
  {id:'1', img: gpu},
  {id:'2', img: mouse},
  {id:'3', img: pc},
  {id:'4', img: upgrade},
  {id:'5', img: monitor},
  {id:'6', img: cadeira},
  {id:'7', img: mesa},
  {id:'8', img: notebook},
  {id:'9', img: console},
  {id:'10', img: roteador}
]

export default function Aside() {
  return (
    <>
      <View style={styles.aside}>
          {imagens.map( (iten)=> (
            <TouchableOpacity key={iten.id}>
              <Image source={iten.img} style={styles.img}/>
            </TouchableOpacity>
          ))}
      </View>
    </>
  )
}

let screenheight = Dimensions.get("window").height
let screewidth = Dimensions.get('window').width

const styles = StyleSheet.create({
  aside: {
    backgroundColor: '#0c0c0c',
    width: 100,
    height: screenheight - 120,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: '5%',
    paddingBottom: '10%',

  },
  title: {
    color: '#F1F2F5',
  },
  img: {
    width: 40,
    height: 40,
  },
})

