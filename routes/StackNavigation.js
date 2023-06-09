import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "../src/screens/HomeScreen";
import LoginScreen from "../src/screens/LoginScreen";
import RegisterScreen from "../src/screens/RegisterScreen";

const Stack = createStackNavigator();

function StackNavigation() {
    return (
        <Stack.Navigator initialRouteName="Login" screenOptions={{headerShown:false}}>
            <Stack.Screen name="Home" component={HomeScreen}/>
            <Stack.Screen name="Login" component={LoginScreen}/>
            <Stack.Screen name="Register" component={RegisterScreen}/>
        </Stack.Navigator>
    );
}

export default StackNavigation;