import { View, Text } from 'react-native'
import React from 'react'

const MyFriend = (props) => {
  return (
    <View style={{alignItems:'center'}}>
      <Text> Your First name is {props.fname} 
      and Last name is {props.lname}</Text>
    </View>
  )
}
const MyCustomTextWith = () => {
  return (
    <View style={{alignItems:'center' , top : 417}}>
      <MyFriend fname = 'Piyapol' 
      lname = 'Soontrarachun'/> 
      <MyFriend fname = 'Aksarapak' 
      lname = 'Pornpanawa'/> 
      </View>
  )
}

export default MyCustomTextWith