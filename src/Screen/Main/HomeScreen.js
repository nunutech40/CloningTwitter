import React, { useEffect, useState, useMemo } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  Button,
  Dimensions
} from "react-native";
import Modal from 'react-native-modal';
import { TextInput } from 'react-native-paper';
import HeaderMain from '../../auth/componen/HeaderMain';
import IconFT from 'react-native-vector-icons/Fontisto';
import IconAD from 'react-native-vector-icons/AntDesign';

const deviceWidth = Dimensions.get("window").width;
const HomeScreen = (props) => {
  const [modalVisible, setModalVisible] = useState(false);
  const handleTwitPopuler = () => {
    setModalVisible(!modalVisible);
  };

  return (
    
      <View style={styles.container}>
        <View style={{ height: 60 }}>
          <HeaderMain
            Matery={
              <Image
                style={{ height: 27, width: 27 }}
                source={require("../../../assets/icontwitter.png")}
              />
            }
            Setting={
              <TouchableOpacity onPress={() => handleTwitPopuler()}>
                <Image
                  style={{ height: 27, width: 27 }}
                  source={require("../../../assets/poptwitter.png")}
                />
              </TouchableOpacity>
            }
            ppOnPress={() => props.navigation.openDrawer()}
          />
        </View>

        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Modal
            transparent={true}
            isVisible={modalVisible}
            animationOut="slideOutDown"
            animationIn="slideInUp"
            statusBarTranslucent={true}
            onSwipeComplete={() => setModalVisible(false)}
            swipeDirection="down"
            onBackdropPress={() => setModalVisible(false)}
            coverScreen={true}
          >
            <View style={styles.viewModal}>
              <View
                style={{
                  height: 5,
                  backgroundColor: "#687887",
                  width: 38,
                  marginTop: 5,
                  borderRadius: 2,
                  marginBottom: 30,
                }}
              >

                
              </View>
              <Image
                style={{ height: 40, width: 40 }}
                source={require("../../../assets/poptwitter.png")}
              />
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: "bold",
                  marginHorizontal: 20,
                  textAlign: "center",
                  marginTop: 15,
                }}
              >
                Beranda menampilkan Tweet populer terlebih dahulu
              </Text>
              <View
                style={{
                  backgroundColor: "#687887",
                  height: 0.4,
                  width: "100%",
                  marginVertical: 17,
                }}
              >
                
              </View>
              <View style={{ flexDirection: "row" }}>
                <View style={{ width: 70, alignItems: "center" }}>
                  <IconFT name="arrow-swap" size={24} color="#687887" />
                </View>
                <Text
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    textAlign: "left",
                    fontSize: 19,
                    color: "#687887",
                  }}
                >
                  Lihat Tweet terbaru saja
                </Text>
              </View>
              <View style={{ flexDirection: "row" }}>
                <View style={{ width: 70, alignItems: "center" }}></View>
                <Text
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    textAlign: "left",
                    fontSize: 13,
                    color: "#687887",
                  }}
                >
                  Anda akan dialihkan kembali ke Beranda setelah tidak aktif
                  selama beberapa saat.
                </Text>
              </View>
              <TouchableOpacity style={{ flexDirection: "row", marginTop: 20 }}>
                <View style={{ width: 70, alignItems: "center" }}>
                  <IconAD name="setting" color="#687887" size={24} />
                </View>
                <Text
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    textAlign: "left",
                    fontSize: 19,
                    color: "#687887",
                  }}
                >
                  Lihat preferensi konten
                </Text>
              </TouchableOpacity>
            </View>
          </Modal>
                <Text>{props.passDataFromDrawer}</Text>
        </View>
      </View>
  );
};
  
  export default HomeScreen;

  const styles = StyleSheet.create({
      container: {
        flex: 1,
      },
      viewModal: {
        backgroundColor: 'white',
        borderTopRightRadius: 12,
        borderTopLeftRadius: 12,
        height: 320,
        alignItems: "center",
        bottom: -20,
        left: -20,
        right: -20,
        position: 'absolute'
    }
  })