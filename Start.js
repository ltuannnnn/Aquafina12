import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image, ImageBackground, } from 'react-native';

export default Start = function App() {
    
  return (
    
    <View style={styles.container}>
      <Image style={styles.text1}  source={require('../bai2/IMG/text1.png')}></Image>
      <Text style={styles.txt1}>HÃY CHO CHAI RỖNG VÀO MÁY</Text>
      <Image style={styles.bg2} source={require('../bai2/IMG/bg2.png')}></Image>
      <Image style={styles.btn3} source={require('../bai2/IMG/btn3.png')}></Image>
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
        marginLeft:20,
        fontWeight:'bold'
        },
    text1:{
        width:240,
        height:60,
        marginTop:40,
        marginLeft:90
    },
    bg2:{
      marginTop:30,
      width:390,
      height:450,
      marginLeft:10
    },
    btn3:{
      marginTop:60,
      width:130,
      height:130,
      marginLeft:140
  }
});
