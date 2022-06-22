import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Logo = () => {
  return (
    <View style={{flex:1,justifyContent:'center',alignContent:'center'}}>
      <Text style={styles.textLogo}>TNI</Text>
    </View>
  )
}

export default Logo

const styles = StyleSheet.create({
    textLogo:{
        color:"yellow",
        fontSize:60

    }

})