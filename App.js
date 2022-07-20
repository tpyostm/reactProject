
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import User from './components/User'
import LotsofGreetings from './components/LotsofGreetings'
import MyCustomTextWith from './components/MyCustomTextWith'
import Count from './components/Count'
import InputText from './components/InputText'
import UserNamePassword from './components/UserNamePassword'


const App = () => {
  return (
    <View style={styles.container}>
     <UserNamePassword></UserNamePassword>
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