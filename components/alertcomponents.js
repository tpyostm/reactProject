import { Alert, StyleSheet, Text, View,Button,Alert } from 'react-native'
import React from 'react'

const alertcomponents = () => {

    const simpleAlertHanler = () => {
        alert('Hello I am Simple Alert from JavaScript')
    }
        const twoOptionAlertHanler = ()=> 
        //use alert from react native
        Alert.alert(
            //tile
            'Hello',
            //body
            'I am two option alert from React Native',
            [
                { 
                    text:'Yes',
                    onpress:()=> alert ('Yes Pressed')
                },
                {
                 text:'No',
                 onpress:()=> alert ('No pressed'),
                }
            ],
            {cancelable:false}
        )

    return (
        <View style={styles.container}>
        <Button
            title = 'Simple Alert'
            onpress={simpleAlertHanler}
            />
            <Button
            title = 'Alert with two Options'
            onpress={twoOptionAlertHanler}
            />
            </View>
            );
    };

export default alertcomponents

const styles = StyleSheet.create({
    container : {
        flex: 1,
        alignItems : "center",
        justifyContent : "center",
        backgroundColor : "#ecf0f1"
   }
})
