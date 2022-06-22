import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Logo from './components/Logo';
import Stysheet from './components/Stysheet';

const App = () => {
  return (
    <View style={styles.container}>
      {/* <Text style={[styles.title,styles.warning]}>Hello React Native</Text> */}
      {/*g <Logo /> */}
      <Stysheet/>
    </View>
  )
}

export default App

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