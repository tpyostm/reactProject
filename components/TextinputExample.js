import {View , TextInput , Button } from 'react-native'
import React from 'react';

const TextInputExample = () => {
    return (
        <View stle ={{padding:50}}>
            <View style={{
                flex:1,
                flexDirection:'row',
                justifyContent:'space-between',
                alignItems:'center'
            }}>
<TextInput
placeholder='Course Goal'
style ={{width:'80%',borderColor:'black', borderWidth: 1,padding: 10}}
/>
<button title='ADD'/>
        </View>
        </View>
        )
    }
    export default TextInputExample;