import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Logo from './components/Logo';
import Stysheet from './components/Stysheet';
import TextInputExample from './components/TextinputExample';
const App = () => {
  return (
    <View>
      {<Text style={[styles.title,styles.warning]}>Hello React Native</Text> }
      {<Logo/>}
      <button
      title = 'Click me'
      />
      <Stysheet/> 
    </View> 
  )
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center'
  },
  title: {
    fontSize: 0,
  }
}); 

export default App





