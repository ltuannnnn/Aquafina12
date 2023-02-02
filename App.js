import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Wellcome from '../bai2/Wellcome'
import Huongdan from '../bai2/Huongdan'
import Start from '../bai2/Start'
import Loading from '../bai2/Loading'
import QRcode from '../bai2/QRcode'
export default function App() {
  return (
    <View >
      <QRcode></QRcode>
    </View>
  );
}
