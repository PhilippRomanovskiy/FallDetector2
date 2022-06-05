import "react-native-gesture-handler";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./Screens/Home";
import { TouchableOpacity, StyleSheet } from "react-native";
import SensorResult from "./Components/Sensors";
import AlertUser from "./Screens/alert";
import Call from "./Screens/call";


TouchableOpacity.defaultProps = { activeOpacity: 0.1 };

class Hidden extends React.Component {
  render() {
    //return null;
  }
}

const Stack = createStackNavigator();

function App() {
  

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{ headerShown: false }}
          styles={stylesApp.title}
          name="Home"
          component={HomeScreen}
        />
        
        <Stack.Screen
          options={{ headerShown: false }}
          styles={stylesApp.title}
          name="SensorResult"
          component={SensorResult}
        />

        <Stack.Screen
          options={{ headerShown: false }}
          styles={stylesApp.title}
          name="AlertUser"
          component={AlertUser}
        />

        <Stack.Screen
          options={{ headerShown: false }}
          styles={stylesApp.title}
          name="Call"
          component={Call}
        />
        
       
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}

const stylesApp = StyleSheet.create({
  title: {
    marginTop: 50,
  },
});
export default App;
