import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image, ImageBackground, } from 'react-native';

export default QRcode = function App() {
    
  return (
    
    <View style={styles.container}>
      <Image style={styles.text1}  source={require('../IMG/text1.png')}></Image>
      <Text style={styles.txt1}>TRẠM TÁI SINH ngu</Text>
      <Image style={styles.bg3} source={require('../IMG/bg3.png')}></Image>
      <Image style={styles.btn4} source={require('../IMG/btn4.png')}></Image>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        width:1080,
        height:1920,
        backgroundColor: '#EAF0F8',
      },
      txt1:{
        fontSize:25,
        marginTop:30,
        color:'#0047BA',
        marginLeft:55,
        fontWeight:'bold'
        },
    text1:{
        width:240,
        height:60,
        marginTop:40,
        marginLeft:90
    },
    bg3:{
      marginTop:30,
      width:390,
      height:450,
      marginLeft:10
    },
    btn4:{
      marginTop:60,
      width:130,
      height:130,
      marginLeft:140
  }
});
