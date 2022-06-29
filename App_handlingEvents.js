import { View, Text, StyleSheet ,Button} from "react-native";
import React from "react";

const App = () => {
  
  const showData=() => {
    alert("Hello")
  }
  
  return (
    <View style={styles.container}>
      <Text>Hello React Native</Text>
      <Button onPress={showData}
      title='click me'
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    alignItems: "center", 
    justifyContent: "center" },
});
export default App;
