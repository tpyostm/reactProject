import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const User = () => {
    const users = [
        { id: 1,name:"Johhn"},
        { id: 1,name:"Mary"}
    ];
  return (
    <View>
      <Text></Text>
      {
        users.map((user,index)=>{
            return <text key={user.id}>{index+1}.{user.name}
            </text>

        })
    }
    </View>
  )
}

export default User

const styles = StyleSheet.create({})