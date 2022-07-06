import { View, Text } from 'react-native'
import React from 'react'

const Greeting = (props) => {
    return(
        <View style={{alignItems:'center'}}>
            <Text> Hello {props.name} {props.date} </Text>
        </View>
    )
};
const LotsofGreetings = () => {
  return (
    <View style={{alignItems:'center' , top : 50}}>
      <Greeting name = 'Marry Christmas' date = '25-Dec'/>
      <Greeting name = 'Happy New Year ' date = '01-Jan'/>
      <Greeting name = 'Songkarn Festival' date = '14-Apr'/>
    </View>
  )
}

export default LotsofGreetings