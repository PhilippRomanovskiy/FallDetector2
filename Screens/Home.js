import "react-native-gesture-handler";
import * as React from "react";
import {
  Image,
  SafeAreaView,
  Button,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";



function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={{ 
    width: 300,
    height: 350,
    resizeMode: 'contain' }}
        fadeDuration={1000}
        source={require("../Images/falling.png")}
      />
      <Text style={styles.Text1}> Fall Detector </Text>

      <View style={{ height: "25%", justifyContent: "space-evenly" }}>
        <TouchableOpacity
          onPress={() => navigation.navigate("SensorResult")}
          style={{
            backgroundColor: "#7041EE",
            borderRadius: 24,
          }}
        >
          <Text style={styles.button1}>Get Started</Text>
        </TouchableOpacity>

        
      </View>

      
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
  },
  button1: {
    color: "#FFFFFF",
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
    textAlignVertical: "center",
    paddingVertical: "3.5%",
    paddingHorizontal: "25%",
  },
  button2: {
    color: "black",
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
    textAlignVertical: "center",
    paddingVertical: "3.5%",
    paddingHorizontal: "25%",
  },
  Image: {
    width: "100%",
  },
  Text1: {
    color: "#000",
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
    textAlignVertical: "center",
    paddingVertical: "3.5%",
    paddingHorizontal: "25%",
  }
});
export default HomeScreen;
