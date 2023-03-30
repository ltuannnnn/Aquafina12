import {Component} from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Wellcome from '../TS/Components/Wellcome'
import Huongdan from '../TS/Components/Huongdan'
import Start from '../TS/Components/Start'
import Loading from '../TS/Components/Loading'
import QRcode from '../TS/Components/QRcode'
import QRcodettg from '../TS/Components/QRcodettg';

const Stack = createNativeStackNavigator();

type RootStackParamList = {
  Welcome: undefined;
  Huongdan: undefined;
  Start: undefined;  
  Loading: undefined;
  QrTime: undefined;
  QrCode: undefined;
  QRcodettg: undefined;

};

export default function App(): JSX.Element {
  return ( 
      <NavigationContainer>
       <Stack.Navigator initialRouteName="Wellcome" screenOptions={{headerShown:false}}>
        <Stack.Screen name="Wellcome" component={Wellcome}></Stack.Screen>
        <Stack.Screen name="Huongdan" component={Huongdan}></Stack.Screen>
        <Stack.Screen name="Start" component={Start}></Stack.Screen>
        <Stack.Screen name="Loading" component={Loading}></Stack.Screen>
        <Stack.Screen name="QRcode" component={QRcode}></Stack.Screen>
        <Stack.Screen name="QRcodettg" component={QRcodettg}></Stack.Screen>

       </Stack.Navigator>
       </NavigationContainer>
  );
}