import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState, useRef } from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, Modal, TouchableOpacity } from 'react-native';
import { NavigationScreenProp } from 'react-navigation';

interface Props {
  navigation: NavigationScreenProp<any, any>;
}

const QRcode = ({ navigation }: Props) => {
  const [countdown, setCountdown] = useState(20);
  const timeId = useRef<NodeJS.Timeout>();
  const [modal2, setModal2] = useState(false);

  useEffect(() => {
    timeId.current = setInterval(() => {
      setCountdown((prevState) => prevState - 1);
    }, 1000);

    return () => clearInterval(timeId.current);
  }, []);

  useEffect(() => {
    if (countdown <= 0) {
      clearInterval(timeId.current);
      navigation.navigate('Wellcome');
    }
  }, [countdown, navigation]);

  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modal2}
        onRequestClose={() => {
          alert('Modal has been closed.');
          setModal2(!modal2);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView2}>
            <ImageBackground style={styles.Popup1} source={require('../IMG/Popup.png')}>
              <TouchableOpacity onPress={() => navigation.navigate('Wellcome')}>
                <Image style={styles.btn2} source={require('../IMG/btn2.png')}></Image>
              </TouchableOpacity>
            </ImageBackground>
          </View>
        </View>
      </Modal>

      <Image style={styles.text1} source={require('../IMG/text1.png')}></Image>
      <Text style={styles.txt1}>QUET QR TICH DIEM</Text>
      <Image style={styles.QRdiem} source={require('../IMG/QRdiem.png')}></Image>
      <View style={styles.bg}>
        <Image style={styles.QRtext} source={require('../IMG/QRtext.png')}></Image>
        <Image style={styles.code} source={require('../IMG/code.png')}></Image>
        <Image style={styles.ttsstart} source={require('../IMG/ttsstart.png')}></Image>
        <Text style={styles.txttd}>Thời gian quét QR còn:</Text>
        <Text style={styles.txt3}>{countdown} giây nữa </Text>
      </View>
      <TouchableOpacity onPress={() => setModal2(!modal2)}>
        <Image style={styles.btn4} source={require('../IMG/btn2.png')}></Image>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
    container: {
      width: 1080,
      height: '100%',
      backgroundColor: '#EAF0F8',
    },
    txt1: {
      fontSize: 25,
      marginTop: 30,
      color: '#0047BA',
      marginLeft: 80,
      fontWeight: 'bold'
    },
    text1: {
      width: 240,
      height: 60,
      marginTop: 40,
      marginLeft: 90
    },
    QRdiem: {
      position: 'absolute',
      marginTop: 200,
      width: 375,
      height: 100,
      marginLeft: 20
    },
    btn4: {
      marginTop: 550,
      width: 130,
      height: 130,
      marginLeft: 140
    },
    bg: {
      backgroundColor: '#FFFFFF',
      position: 'absolute',
      marginTop: 320,
      width: 375,
      height: 350,
      marginLeft: 20
    },
    code: {
      position: 'absolute',
      marginTop: 130,
      marginLeft: 110,
      width: 150,
      height: 150,
    },
    QRtext: {
      position: 'absolute',
      marginTop: 15,
      marginLeft: 75,
      width: 220,
      height: 80,
    },
    ttsstart: {
      marginLeft: 320,
      position: 'absolute',
      width: 50,
      height: 50,
    },
    txttd: {
      position: "absolute",
      width: 250,
      height: 100,
      marginTop: 300,
      fontSize: 18,
      fontWeight: "450",
      textAlign: "center",
      color: "#707172",
    },
    txt3: {
      position: "absolute",
      width: 300,
      height: 100,
      marginLeft: 125,
      marginTop: 300,
      fontSize: 20,
      fontWeight: "900",
      textAlign: "center",
      color: "#FA4238",
    },
    centeredView: {
  
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 5,
    },
    modalView: {
      position: "absolute",
      width: 400,
      height: 400,
      margin: 20,
      backgroundColor: 'white',
      borderRadius: 20,
      padding: 35,
     
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 2,
      shadowRadius: 4,
      elevation: 5,
    },
    Popup: {
      position: "absolute",
      width: 70,
      height: 70,
      marginLeft:150
    },
    txttd1: {
      position: "absolute",
      width: 250,
      height: 100,
      marginTop: 250,
      marginLeft:30,
      fontSize: 18,
      fontWeight: "450",
      color: "#707172",
    },
    txt31: {
      position: "absolute",
      width: 400,
      height: 100,
      marginLeft: 100,
      marginTop: 250,
      
      fontSize: 20,
      fontWeight: "900",
      textAlign: "center",
      color: "#FA4238",
    },
    Popuptext1: {
      position: "absolute",
      fontSize:100,
      width: 350,
      height: 300,
      marginTop: 100  ,
    
      marginLeft:20,
      fontWeight: 'bold',
      textAlign: "center",
      color: "#1545A5",
    },
    Popuptext2:{
      position: "absolute",
      width: 320,
      height: 100,
      marginTop: 150,
      marginLeft:30,
      fontSize: 18,
      fontWeight: "450",
      textAlign: "center",
      color: "#707172",
    },
    btnttg:{
      position: "absolute",
      width: 150,
      height: 50,
      marginTop: 320,
      marginLeft:220,
    },
    btnmhc:{
      position: "absolute",
      width: 150,
      height: 50,
      marginTop: 280,
     
    }, modalView2: {
      position:"absolute",
      width:400,
      height:500,
      margin: 20,
      backgroundColor: 'white',
      borderRadius: 20,
      padding: 35,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity:2,
      shadowRadius: 4,
      elevation: 5,
    },
    popup:{
      position:"absolute",
      width:360,
      height:490,
    },
    btn2:{
      marginLeft:119,
      marginTop:372,
      position:"absolute",
      width:120,
      height:120,
    },
    Popup1:{
      position:"absolute",
      width:360,
      height:490,
    },
    
  }
  );

export default QRcode;