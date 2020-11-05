import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "../screens/StackScreens/HomeScreen";
import NewOrderScreen from '../screens/StackScreens/NewOrderScreen'

const Stack = createStackNavigator();
const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name='New Order Screen' component={NewOrderScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
