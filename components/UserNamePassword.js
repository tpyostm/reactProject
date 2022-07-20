import { StyleSheet, Text, View ,TextInput} from 'react-native'
import React,{useState} from 'react'
import { Button } from 'react-native-web';

const UserNamePassword = () => {
    
    const [userName, setUserName] =useState('');
    const [passWord, setPassWord] =useState('');
   

    const checkTextInput = () => {
        if (!userName.setUserName()) {
            alert ('Please Enter Name');
            return;
        }
    };

 
    return (
    <View style={{flex:1,marginTop:20,alignItems:'center'}}>
      <TextInput
      value={userName}
      onChangeText = {(userName)=>{setUserName(userName)}}
      style = {styles.TextInput}
      placeholder='Email'
      />
      
      <TextInput
      value={passWord}
      onChangeText = {(passWord)=>{setPassWord(passWord)}}
      style = {styles.TextInput}
      placeholder='Password'
      />

        <Button 
        onPress = {checkTextInput}
         title='Submit'
        />
    </View>
  )
}



export default UserNamePassword

const styles = StyleSheet.create({
    container : {
        paddingTop:23,
    },
    TextInput:{
        height:40,
        margin:15,
        backgroundColor:'#e8e8e8',
        borderColor:'#7a42f4',
        borderWidth:1
        },
        
    Button:{
        backgroundColor:'#e8e847'  
    }
    })
