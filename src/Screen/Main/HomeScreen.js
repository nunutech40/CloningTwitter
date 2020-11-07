import React, { useEffect, useState, useMemo } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  Button,
  Dimensions,
  FlatList
} from "react-native";
import Modal from 'react-native-modal';
import HeaderMain from '../../auth/componen/HeaderMain';
import IconFT from 'react-native-vector-icons/Fontisto';
import IconAD from 'react-native-vector-icons/AntDesign';
import CellTwit from '../../auth/componen/CellTwit';
import IconMI  from 'react-native-vector-icons/MaterialIcons';

const DataTimeline = [
  {
    userName: '@pritada',
    name: 'pake masker di hutan',
    userPP: require('../../../assets/OtherAkun/fanny.jpg'),
    textMessage: 'NP ~ bila nanti saatnya tlah tiba',
    timeMessage: new Date('2020-09-18T10:34:23+07:00'), 
    like: 0,
    retwet: 0,
    reply: 0
  },
  {
    userName: '@burungbalam_',
    name: 'Lee',
    userPP: require('../../../assets/OtherAkun/burungbalam.jpg'),
    textMessage: 'Fiyuh, sweat sweat sweat',
    timeMessage: new Date('2020-09-18T10:34:23+07:00'),
    like: 0,
    retwet: 0,
    reply: 0
  },
  {
    userName: '@mascarpon',
    name: 'Tukang Kue',
    userPP: require('../../../assets/OtherAkun/maskapron.jpg'),
    textMessage: 'Abis workout sedetik, baju langsung lepek kek abis diguyur, Coronces cepatlah berlalu, ku ingin ke gym lagi tanpa rasa khawatir gara2 kopit',
    timeMessage: new Date('2020-09-18T10:34:23+07:00'),
    like: 1,
    retwet: 0,
    reply: 2
  },
  {
    userName: '@Abbiihaxx',
    name: 'Andre saddam. H',
    userPP: require('../../../assets/OtherAkun/abihax.jpg'),
    textMessage: 'Alhamdulillah, Sudah 1 november. Semoga lebih baik, dan tercapai harapan-harapan baik. Aamiin.',
    timeMessage: new Date('2020-09-18T10:34:23+07:00'),
    like: 2,
    retwet: 102,
    reply: 252
  },
  {
    userName: '@chococis_',
    name: 'Icon tas',
    userPP: require('../../../assets/OtherAkun/chococis.jpg'),
    textMessage: '"aku gaakan gitu janji"' +
                  'Lalu dua bulan kemudian' +
                  'Sudah kuduga omongannya tak bisa dipegang',
    timeMessage: new Date('2020-09-18T10:34:23+07:00'),
    like: 0,
    retwet: 0,
    reply: 0
  },
]

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

      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <View style={{ marginBottom: -10, width: "100%" }}>
          <FlatList
            style={{ backgroundColor: "white" }}
            nestedScrollEnabled
            data={DataTimeline}
            keyExtractor={(item) => item.userName}
            renderItem={({ item }) => <CellTwit item={item} />}
          />
        </View>

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
            ></View>
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
            ></View>
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
      <View style={styles.createDaftar}>
        <IconMI name="playlist-add" color="white" size={27} />
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
    },
    createDaftar: {
      backgroundColor: "#1da1f3",
      height: 60,
      width: 60,
      borderRadius: 60 / 2,
      right: 20,
      position: "absolute",
      bottom: 17,
      justifyContent: "center",
      alignItems: "center",
      //this is shadow
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
      //
      
    }
  })