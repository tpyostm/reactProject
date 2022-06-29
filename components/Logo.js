import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Logo = () => {
  const textLogo = "THAI-NICHI";
  const isTH = false;
  return (
    <View>
      <Text style={styles.TextLogo}>TNI</Text>
      <Text>{textLogo}</Text>
    </View>
  )
}

export default Logo

const styles = StyleSheet.create({
    TextLogo:{
        color:"red",
        fontSize:40
    }
})