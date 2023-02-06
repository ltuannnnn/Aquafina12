import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image, ImageBackground,TouchableOpacity } from 'react-native';

export default Wellcome = ({navigation}) => {
    
  return (
    
    <View style={styles.container}>
       <View>
      <Image style={styles.text1}  source={require('../IMG/text1.png')}></Image>
      <Image style={styles.text2} source={require('../IMG/text2.png')}></Image>
      <ImageBackground style={styles.mau} source={require('../IMG/mau.png')}>
      <ImageBackground style={styles.mau2} source={require('../IMG/mau2.png')}>
      <Image style={styles.chai} source={require('../IMG/chai.png')}></Image>
        <TouchableOpacity onPress={() =>{navigation.navigate('Huongdan')}}>
        <Image style={styles.btn} source={require('../IMG/btn.png')}></Image>
        </TouchableOpacity>
      </ImageBackground>
      </ImageBackground>
    <Text style={styles.txt1}>*Hoạt động nằm trong Chiến dịch</Text>
    <Text style={styles.txt2}>Sải bước phong cách Xanh của Aquafina</Text>
    <Image style={styles.end} source={require('../IMG/end.png')}></Image>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width:1080,
    height:1920,
    backgroundColor: '#EAF0F8',
  },
  text1: {
    width:240,
    height:60,
    marginTop:40,
    marginLeft:90
  },
  text2: {
    width:320,
    height:150,
    marginTop:30,
    marginLeft:35
  },
  mau: {
    width:400,
    height:500,
    marginTop:30,
  },
  mau2: {
    width:380,
    height:330,
    marginTop:170,
    marginLeft:20,
    flexDirection:'row',
    flex:1
  },
  chai:{
    width:75,
    height:270,
    marginTop:20,
    marginLeft:30
  },
  btn:{
    marginTop:125,
    width:130,
    height:130,
    marginLeft:20
  },
  txt1:{
    marginLeft:90
  },
  txt2:{
    marginLeft:70,
    color:"#1545A5"
  },
  end:{
    marginTop:15,
    width:420,
    height:20
  }

});
