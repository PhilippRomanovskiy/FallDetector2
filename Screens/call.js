
import React, { Component } from 'react';
import { Text, StyleSheet, View, Linking, Platform, TouchableOpacity,SafeAreaView } from 'react-native';


 function Call() {

   const makeCall = () => {
        let phoneNumber = '';
        if (Platform.OS === 'android') {
          phoneNumber = 'tel:${911}';
        } else {
          phoneNumber = 'telprompt:${911}';
        }
        Linking.openURL(phoneNumber);
      };

      makeCall();
  
  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.container} >
          <Text style={styles.TextStyle}> Calling emergency services</Text>
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
        paddingTop: "50%",
       
      }
  });

export default Call;