import { Text, View } from 'react-native'
import React, { Component } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import Home from './Components/Home.js/Home';
import Login from './Components/Auth/Login';
import Register from './Components/Auth/Register';
import Dashboard from './Components/Dashboard/Dashboard';
import ScanScreen from'./Components/ScanQR/ScanScreen'
import StatusScreen from './Components/StatusScreen/StatusScreen';
import VisitHistory from './Components/VisitHistory/VisitHistory';
const Stack = createNativeStackNavigator();


export class Base extends Component {
    render() {
        return (<NavigationContainer>

            <Stack.Navigator screenOptions={{
                headerShown: false,
            }}>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Register" component={Register} />
                <Stack.Screen name="Dashboard" component={Dashboard} />
                <Stack.Screen name="ScanScreen" component={ScanScreen} />
                <Stack.Screen name="StatusScreen" component={StatusScreen} />
                <Stack.Screen name="VisitHistory" component={VisitHistory} />

            </Stack.Navigator>

        </NavigationContainer>
        );
    }
}

export default Base