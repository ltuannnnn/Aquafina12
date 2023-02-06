import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image, ImageBackground,TouchableOpacity } from 'react-native';

export default Huongdan= ({navigation}) =>{
    
  return (
    
    <View style={styles.container}>
      <Image style={styles.text1}  source={require('../IMG/text1.png')}></Image>
      <Text style={styles.txt1}>HƯỚNG DẪN THAM GIA</Text>
      <Image style={styles.bg} source={require('../IMG/bg.png')}></Image>
      <TouchableOpacity onPress={() =>{navigation.navigate('Start')}}>
      <Image style={styles.btn2} source={require('../IMG/btn2.png')}></Image>
      </TouchableOpacity>
    
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        width:1080,
        height:1920,
        backgroundColor: '#EAF0F8',
      },
      bg:{
        marginTop:30,
        width:390,
        height:450,
        marginLeft:10
      },
    text1:{
        width:240,
        height:60,
        marginTop:40,
        marginLeft:90
    },
    txt1:{
    fontSize:30,
    marginTop:30,
    color:'#0047BA',
    marginLeft:40,
    fontWeight:'bold'
    },
    btn2:{
        marginTop:60,
        width:130,
        height:130,
        marginLeft:140
    }

});
