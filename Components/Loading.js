import React, { useState } from 'react'
import { Text, StyleSheet, View, Image, TouchableOpacity ,Modal,Pressable, ImageBackground} from 'react-native'

export default Loading = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modal2, setModal2] = useState(false);

  return (


    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Bạn có muốn tích điểm đổi quà không?</Text>
            <Text style={styles.txtcode}>Bật camera trên điện thoại để quét QR code</Text>
            <TouchableOpacity style={styles.btnT}onPress={() =>{setModalVisible(!modalVisible)&navigation.navigate('QRcode')}}>
              <Text style={styles.txtT}>TÍCH ĐIỂM</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnK}  onPress={() =>setModalVisible(!modalVisible)&setModal2(!modal2) }>
              <Text style={styles.txtK}>KHÔNG</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <Modal animationType="slide"
        transparent={true}
        visible={modal2}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModal2(!modal2);
        }}>
            <View style={styles.centeredView}>
            <View style={styles.modalView2}>
            
               <ImageBackground style={styles.Popup}  source={require('../IMG/Popup.png')}>
               <TouchableOpacity onPress={() =>{navigation.navigate('Wellcome')}}>
            <Image style={styles.btn2}  source={require('../IMG/btn2.png')}></Image>
               </TouchableOpacity>
               </ImageBackground>
            </View>
            </View>
      </Modal>

      <Image style={styles.text1} source={require('../IMG/text1.png')}></Image>
      <Text style={styles.txt1}>CHAI NHỰA ĐANG ĐƯỢC XỬ LÝ...</Text>
      <ImageBackground style={styles.bg3} source={require('../IMG/bg3.png')}>
      <TouchableOpacity onPress={() =>{navigation.navigate('Huongdan')}}>
      <Image style={styles.back}  source={require('../IMG/back.png')}></Image>
      </TouchableOpacity>
      </ImageBackground>
      <TouchableOpacity   onPress={() => setModalVisible(!modalVisible)}>
        <Image style={styles.btn4} source={require('../IMG/btn4.png')}></Image>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 1080,
    height: 1920,
    backgroundColor: '#EAF0F8',
  },
  txt1: {
    fontSize: 25,
    marginTop: 30,
    color: '#0047BA',
    marginLeft: 20,
    fontWeight: 'bold'
  },
  text1: {
    width: 240,
    height: 60,
    marginTop: 40,
    marginLeft: 90
  },
  bg3: {
    marginTop: 30,
    width: 390,
    height: 450,
    marginLeft: 10
  },
  btn4: {
    marginTop: 60,
    width: 130,
    height: 130,
    marginLeft: 140
  },
  bck: {
    position: "absolute",
    width: 1080,
    height: "100%",
    backgroundColor: "#EAF0F8",
  },
  centeredView: {
        
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,
  },
  modalView: {
    position:"absolute",
    width:400,
    height:400,
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
  modalView2: {
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
  modalText: {
    width:250,
    height:150,
    position:"absolute",
    marginTop:20,
    fontSize:25,
    fontStyle:"normal",
    fontWeight:"700",
    display:"flex",
    textAlign:"center",
    alignItems:"center",
    textAlign: 'center',
    color:"#1545A5"
  },
  txtcode:{
    width:250,
    height:150,
    position:"absolute",
    marginTop:80,
    fontSize:20,
    fontStyle:"normal",
    fontWeight:"400",
    display:"flex",
    textAlign:"center",
    alignItems:"center",
    textAlign: 'center',
    color:"#707172"
},
btnT:{
  position: "absolute",
  width: 120,
  height: 120,
  marginLeft: 150,
  marginTop: 160,
  backgroundColor: "#0047BA",
  borderRadius: 100,
  boxShadow: "0px 0px 17.8665px #C3CEDF",
  shadowColor: "rgba(155, 192, 255, 0.77)",
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.25,
  shadowRadius: 3.84,

  elevation: 5,
},
txtT:{
  position: "absolute",
  width: 130,
  height: 120,
  fontStyle: "normal",
  fontWeight: "500",
  fontSize: 25,
  paddingRight:8,
  marginTop: 30,
  fontStyle:"normal",
  alignItems:"center",
  textAlign: "center",
  color: "#FFFFFF",
  display:"flex",
  fontWeight: "900",
},
btnK: {
  position: "absolute",
  width: 100,
  height: 100,
  marginLeft: 150,
  marginTop: 450,
  backgroundColor: "#F2F4F5",
  borderRadius: 100,
  boxShadow: "0px 0px 20px #C3CEDF",
  shadowColor: "radial-gradient(121.14% 387.79% at 16.35% -42.71%, #DADADA 0%, #DADADA 93.31%)",
  shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  txtK:{
      position: "absolute",
      width: 130,
      height: 120,
      fontStyle: "normal",
      fontWeight: "500",
      fontSize: 20,
      paddingRight:25,
      marginTop: 40,
      fontStyle:"normal",
      alignItems:"center",
      textAlign: "center",
      color: "#1545A5",
      display:"flex",
      fontWeight: "900",
  },
  back:{
    marginLeft:10,
    marginTop:10,
    position: 'absolute',
    width:40,
    height:40,
  },
  Popup:{
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
  }

});
