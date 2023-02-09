import { StatusBar } from 'expo-status-bar';
import React, { Component,useEffect,useState,useRef } from 'react'
import { StyleSheet, Text, View,Image, ImageBackground,TouchableOpacity } from 'react-native';

export default Start = ({navigation}) => {
  const [countdown, setCountdown] = useState(30)
  const timeId = useRef()
  useEffect(()=>{
     timeId.current = setInterval(()=>{
      setCountdown(prevState => prevState-1)
    },1000)

  },[])
  useEffect(()=>{
    if(countdown<=0){
      clearInterval(timeId.current)
      navigation.navigate('Loading')
    }
  },[countdown])
    
  return (
    
    <View style={styles.container}>
      <Image style={styles.text1}  source={require('../IMG/text1.png')}></Image>
      <Text style={styles.txt1}>HÃY CHO CHAI RỖNG VÀO MÁY</Text>
      <View style={styles.bg}>
      <Text style={styles.txtHuongdan} onPress={() =>{navigation.navigate('Huongdan')}}>Xem lại hướng dẫn </Text>
      <Image style={styles.bgstart}  source={require('../IMG/bgstart.png')}></Image>
      <Image style={styles.spstart}  source={require('../IMG/spstart.png')}></Image>
      <Image style={styles.ttsstart}  source={require('../IMG/ttsstart.png')}></Image>
      <Text style={styles.txtlanluot}>Lần lượt bỏ từng chai nhựa rỗng vào ô bên trái</Text>
      <Text style={styles.txttd}>Tự động kết thúc sau:</Text>
      <Text style={styles.txt3}>{countdown} giây nữa </Text>
      </View>
      <TouchableOpacity onPress={() =>{navigation.navigate('Loading')}}>
      <Image style={styles.btn3} source={require('../IMG/btn3.png')}></Image>
     
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      position: "absolute",
      width: 1080,
      height: "100%",
      backgroundColor: "#EAF0F8",
      },
      txt1:{
        position: "absolute",
        fontSize:25,
        marginTop:130,
        color:'#0047BA',
        marginLeft:20,
        fontWeight:'bold'
        },
    text1:{
      position: "absolute",
        width:240,
        height:60,
        marginTop:40,
        marginLeft:90
    },
    bg:{
      position: "absolute",
      width: 380,
      height: 500,
      marginLeft: 15,
      marginTop: 180,
      backgroundColor: "#FFFFFF",
      borderRadius: 40,
    },
    btn3:{
      position: "absolute",
      marginTop:700,
      width:130,
      height:130,
      marginLeft:140
  },
  txt3: {
    position: "absolute",
    width: 300,
    height: 100,
    marginLeft: 125,
    marginTop: 450,
    fontSize: 20,
    fontWeight: "900",
    textAlign: "center",
    color: "#FA4238",
  },
  bgstart:{
    position: 'absolute',
    width: 400,
    height: 500,
  },
  spstart:{
    marginLeft:50,
    marginTop:100,
    position: 'absolute',
    width: 300,
    height: 300,
  },
  txtHuongdan: {
    position: "absolute",
    width: 200,
    height: 50,
    marginTop: 12,
    fontWeight: "450",
    fontSize: 20,
    textAlign: "center",
    textDecorationLine: "underline",
    color: "#1545A5",
  },
  ttsstart:{
    marginLeft:320,
    position: 'absolute',
    width: 50,
    height: 50,
  },
  txtlanluot: {
    position: "absolute",
    width: 300,
    height: 100,
    marginLeft: 30,
    marginTop: 390,
    fontSize: 20,
    fontWeight: "450",
    textAlign: "center",
    color: "#707172",
  },
  txttd:{
    position: "absolute",
    width: 250,
    height: 100,
    marginTop: 450,
    fontSize: 18,
    fontWeight: "450",
    textAlign: "center",
    color: "#707172",
  }
});
