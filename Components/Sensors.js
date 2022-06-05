import React, { Alert, useState, useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import NotificationPopup from 'react-native-push-notification-popup';
import { Gyroscope } from 'expo-sensors';
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import AlertUser from '../Screens/alert';
import { render } from 'react-dom';
import { SafeAreaView } from 'react-native-safe-area-context';


 function SensorResult({navigation, props}) {
  const [data, setData] = useState({
    x: 0,
    y: 0,
    z: 0,
  });
  const [subscription, setSubscription] = useState(null);

  const _subscribe = () => {
    setSubscription(
      Gyroscope.addListener(gyroscopeData => {setData(gyroscopeData);})
    );
  };

  const _unsubscribe = () => {
    subscription && subscription.remove();
    setSubscription(null);
  };

  useEffect(() => {
    _subscribe();
    return () => _unsubscribe();
  }, []);

  const { x, y, z } = data;

  useEffect(() => {
  const Notify = () => {
    if(x > 5 || y > 5 || z > 5){
       navigation.navigate("AlertUser");
    }
  }
  return ()=> Notify();
  }, [x, y, z]);
   
  
 
  return (
    <SafeAreaView>
    <View style={styles.container}>
      <Text style={styles.text}>x: {Math.round(x)} y: {Math.round(y)} z: {Math.round(z)}</Text>
      <View style={styles.buttonContainer}>
      </View>
    </View>
    </SafeAreaView>
  );
}



export default SensorResult;

const styles = StyleSheet.create({
  container: {
    paddingTop: "90%",
    justifyContent: 'center',
    paddingHorizontal: 10,
    
  },
  text: {
    textAlign: 'center',
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
    textAlignVertical: "center",
    paddingVertical: "3.5%",
    paddingHorizontal: "25%",
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'stretch',
    marginTop: 15,
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eee',
    padding: 10,
  },
  middleButton: {
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: '#ccc',
  },
  Alert: {
    flex: 1,
  },
  
  


  });
