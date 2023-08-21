import React, { useState } from "react"
import { StyleSheet } from "react-native"

function SearchBar() {

  const [ text, onChangeText ] = useState('') 

  return (
    <View style={styles.headerBottom}>
      <SafeAreaView style={styles.SearchAll}>
        <TextInput
          style={styles.searchInput}
          onChangeText={onChangeText}
          value={text}
        />
        <Image
          style={styles.imgsearch}
          source={search}
        />
      </SafeAreaView>
    </View>
  )
}

export default SearchBar

const styles = StyleSheet.create({
  headerBottom: {
    width: screewidth,
    display: 'flex',
  },
  searchInput: {
    padding: 10,
    width: screewidth - 110,
    marginLeft: 30,
    color: '#F1F2F5',
  },
  SearchAll: {
    borderRadius : 5,
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#0c0c0c',
    alignItems: 'center',
  },
  imgsearch: {
    height: 30,
    width: 30,
    marginRight: 10,
    paddingBottom: 1,
  }
})