
import { StyleSheet, Text, TouchableOpacity, View, useEffect} from 'react-native';
import "react-native-gesture-handler";
import CountDown from 'react-native-countdown-component';
import "react-native-gesture-handler";
import * as React from "react";
import {
  Image,
  SafeAreaView,
  Button,

} from "react-native";
import * as Speech from 'expo-speech';

 function AlertUser({navigation, props}) {

    const speak = () => {
        const thingToSay = 'Plase say Yes if u need help or No if u dont need help';
        Speech.speak(thingToSay);
        
    };

    speak();

    


    // const sound = new Sound();
    // playSound = () => {
    //     this.sound.play()
    // }

        // useEffect(() => {
        // const call = () => {
        //     if(remainingTime <= 0){
        //       navigation.navigate("Call");
        //     }
        // }
        // return ()=> call();
        // }, [remainingTime]);
  
  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.container2}>
        <CountDown
        until={300}
        size={30}
        onFinish={() => navigation.navigate("Call")}
        digitStyle={{backgroundColor: '#FFF'}}
        digitTxtStyle={{color: '#1CC625'}}
        timeToShow={['M', 'S']}
        timeLabels={{m: 'Minutes', s: 'Seconds'}}
      />
    </View>
    <View style={styles.container3}>
    <TouchableOpacity
          onPress={() => navigation.navigate("SensorResult")}
          style={{
            backgroundColor: "#7041EE",
            borderRadius: 24,
          }}
        >
          <Text style={styles.button1}>Stop Countdown</Text>
        </TouchableOpacity>
    </View>
    <View style={styles.container4}>
    <TouchableOpacity
          onPress={() => navigation.navigate("Call")}
          style={{
            backgroundColor: "#A30000",
            borderRadius: 24,
          }}
        >
          <Text style={styles.button2}>Call emergency services</Text>
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
      container2: {
        flex: 1,
        paddingTop: "30%",
       
      },
      container3: {
        flex: 1,
        paddingBottom: "0%",
      },
      container4: {
        flex:1,
        paddingBottom: "20%",
        
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
      },
      timer: {
        flex:1,
      }
    
  
  

    });
export default AlertUser;