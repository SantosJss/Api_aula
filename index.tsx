import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, TextInput } from "react-native";

export default function App() 
{
  return (
    <View style={styles.container}>
      <Text>BREED NAME</Text>
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff700",
    alignItems: "center",
    justifyContent: "center",
  },
})