import React, { useState } from 'react';
import { View, StyleSheet, Dimensions, Text, Image, TouchableOpacity, ScrollView } from 'react-native';

// import { Container } from './styles';

import gpu from '../assets/img/gpu.png'
import mouse from '../assets/img/mouse.png'
import pc from '../assets/img/pc.png'
import upgrade from '../assets/img/upgrade.png'
import monitor from '../assets/img/monitor.png'
import cadeira from '../assets/img/cadeira.png'
import notebook from '../assets/img/notebook.png'
import console from '../assets/img/console.png'
import roteador from '../assets/img/roteador.png'

const imagens = [
  {id:'1', img: gpu, name: 'Hardware'},
  {id:'2', img: mouse, name: 'Perifericos'},
  {id:'3', img: pc, name: 'Computadores'},
  {id:'4', img: upgrade, name: 'Kit Upgrade'},
  {id:'5', img: monitor, name: 'Monitores'},
  {id:'6', img: cadeira, name: 'Cadeiras e Mesas Gamer'},
  {id:'7', img: notebook, name: 'Notebooks'},
  {id:'8', img: console, name: 'Consoles'},
  {id:'9', img: roteador, name: 'Redes e Wireless'}
]

export default function Aside() {

  const [menuStyle, setMenuStyle] = useState(styles.aside);
  const [listStyle, setListStyle] = useState(styles.namelistClose)
  
  const updateMenu = () => {
    setMenuStyle(menuStyle === styles.aside ? styles.asideOpen : styles.aside);
    setListStyle(listStyle === styles.namelistClose ? styles.namelist : styles.namelistClose)
  }

  return (
    <>
      <View style={menuStyle} >
        {imagens.map( (iten)=> (
          <TouchableOpacity key={iten.id} style={styles.menulist} onPress={updateMenu}>
            <Image source={iten.img} style={styles.img}/>
            <Text style={listStyle}>{iten.name}</Text>
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
  asideOpen: {
    backgroundColor: '#0c0c0c',
    width: screewidth,
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
  namelistClose: {
    display: 'none',
  },
  namelist: {
    color: '#F1F2F5',
  },
  menulist: {
    width: '50%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-bettween'
  }
})

