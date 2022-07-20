import { StyleSheet, Text, View, Button, SafeAreaView } from "react-native";
import React from "react";

const Separator = () => (
    <View style={styles.separator}/>
)

const ButtonExample = () => {
  return (
   <SafeAreaView style={styles.container}>
     <View>
      <Text style={styles.title}>
        The title and onPress handler are required.It is recommended to set   accessigilityLabel to thelp make your app usable by everyone.
      </Text>
      <Button
        title='Press Me'
        onPress={()=>alert('Simple Button pressed')}
      />
    </View>

    
    <Separator/>

    <View>
      <Text style={styles.title}>
        The title and onPress handler are required.It is recommended to set   accessigilityLabel to thelp make your app usable by everyone.
      </Text>
      <Button
      color='red'
        title='Press Me'
        disabled
      />
    </View>

    <Separator/>

    <View>
      <Text style={styles.title}>
        The title and onPress handler are required.It is recommended to set   accessigilityLabel to thelp make your app usable by everyone.
      </Text>
      <Button
      color='pink'
        title='Press Me'
        onPress={()=>alert('Simple Button pressed')}
      />
    </View>

    <Separator/>

    <View style={styles.fixToText}>
      <Text style={styles.title}>
        The title and onPress handler are required.It is recommended to set   accessigilityLabel to thelp make your app usable by everyone.
      </Text>
      <Button
      color='green'
        title='left button'
        onPress={()=>alert('Left Button pressed')}
      />
        <Button
      color='green'
        title='right button'
        onPress={()=>alert('Right Button pressed')}
        />

    </View>

   </SafeAreaView>
  );
};

export default ButtonExample;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginHorizontal: 16,
  },
  title: {
    textAlign: "center",
    marginVertical: 8,
  },
  fixToText: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: "#737373",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});