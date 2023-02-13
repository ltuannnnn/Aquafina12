import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Wellcome from '../AquafinaApp/Components/Wellcome'
import Huongdan from '../AquafinaApp/Components/Huongdan'
import Start from '../AquafinaApp/Components/Start'
import Loading from '../AquafinaApp/Components/Loading'
import QRcode from '../AquafinaApp/Components/QRcode'
import QRcodettg from './Components/QRcodettg';

const Stack = createNativeStackNavigator();

export default function App() {
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
