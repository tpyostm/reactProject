
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import User from './components/User'
import LotsofGreetings from './components/LotsofGreetings'
import MyCustomTextWith from './components/MyCustomTextWith'
import Count from './components/Count'
import ButtonExample from './components/ButtonExample'
import Touchable_Example from './components/TouchableExample'

const App = () => {
  return (
    <View style={styles.container}>
     <Touchable_Example></Touchable_Example>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent : 'center' ,
    alignItems:'center'   
  }
  }
)