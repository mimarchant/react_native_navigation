/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import "react-native-gesture-handler";
import React from "react";
import {Text, View} from "react-native";
import {NavigationContainer} from "@react-navigation/native";
import {StackNavigator} from "./presentation/routes/StackNavigator";

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}

export default App;
