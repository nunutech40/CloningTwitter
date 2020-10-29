import React from 'react'
import { StyleSheet, Text, View, Image, FlatList } from 'react-native'
import HeaderMain from '../../auth/componen/HeaderMain';
import IconAD from 'react-native-vector-icons/AntDesign';
import IconMCI  from 'react-native-vector-icons/MaterialCommunityIcons';
import CellMessage from '../../auth/componen/CellMessage';

const DataMessage = [
  {
    userName: '@cimotyy',
    name: 'Fanny',
    userPP: require('../../../assets/OtherAkun/fanny.jpg'),
    textMessage: 'RATE CARD FOR ENDORSMENT: 1x posting twitter IDR 250k 1x Posting dll',
    dateMessage: new Date('2020-09-18') //T10:34:23+07:00
  },
  {
    userName: '@TokopediaCare',
    name: 'TokopediaCare',
    userPP: require('../../../assets/OtherAkun/tokopedia.jpg'),
    textMessage: 'Mengirimi anda tautan: tokopedia Twitter Survey',
    dateMessage: new Date('2020-08-29') //T10:34:23+07:00
  },
  {
    userName: '@antariksa',
    name: 'Antariksa Sanjaya',
    userPP: require('../../../assets/OtherAkun/antariksa.jpg'),
    textMessage: 'Bisa wa saya 087831025167',
    dateMessage: new Date('2020-07-27') //T10:34:23+07:00
  },
  {
    userName: '@heydianprasetya',
    name: "Nairobi's son",
    userPP: require('../../../assets/OtherAkun/nairobi.jpg'),
    textMessage: 'twitter.com/heysksksksk',
    dateMessage: new Date('2020-07-22') //T10:34:23+07:00
  },
  {
    userName: '@Jejejeje',
    name: "Daun",
    userPP: require('../../../assets/OtherAkun/jejeje.jpg'),
    textMessage: 'Anda mengirimi foto: Yang ini 2,3 juta mas Jeje',
    dateMessage: new Date('2020-06-24') //T10:34:23+07:00
  },
  {
    userName: '@scorpicgxg',
    name: "Kenia",
    userPP: require('../../../assets/OtherAkun/kenia.jpg'),
    textMessage: 'Masing2',
    dateMessage: new Date('2020-09-18') //T10:34:23+07:00
  },
  {
    userName: '@ongeskies',
    name: "ekawati",
    userPP: require('../../../assets/OtherAkun/ekawati.jpg'),
    textMessage: 'Udah yaa',
    dateMessage: new Date('2020-06-24') //T10:34:23+07:00
  },
  {
    userName: '@scorpicgxg1',
    name: "Kenia",
    userPP: require('../../../assets/OtherAkun/kenia.jpg'),
    textMessage: 'Masing2',
    dateMessage: new Date('2020-09-18') //T10:34:23+07:00
  },
  {
    userName: '@ongeskies1',
    name: "ekawati",
    userPP: require('../../../assets/OtherAkun/ekawati.jpg'),
    textMessage: 'Udah yaa testing testing tesing testing testing tesintg tesinti g lagi testing keluar gak',
    dateMessage: new Date('2020-06-24') //T10:34:23+07:00
  },
  {
    userName: '@scorpicgxg2',
    name: "Kenia",
    userPP: require('../../../assets/OtherAkun/kenia.jpg'),
    textMessage: 'Masing2',
    dateMessage: new Date('2020-09-18') //T10:34:23+07:00
  },
  {
    userName: '@ongeskies2',
    name: "ekawati",
    userPP: require('../../../assets/OtherAkun/ekawati.jpg'),
    textMessage: 'Udah yaa',
    dateMessage: new Date('2020-06-24') //T10:34:23+07:00
  },
]

const MessageScreen = (props) => {
  const renderSeparator = () => (
    <View
      style={{
        backgroundColor: "#687887",
        height: 0.4,
      }}
    />
  );
  return (
    <View>
      <View>
        <View style={{ height: 60 }}>
          <HeaderMain
            Matery={
              <View style={{ width: "100%" }}>
                <Text
                  style={{
                    fontWeight: "600",
                    fontSize: 20,
                    textAlign: "left",
                  }}
                >
                  Pesan
                </Text>
              </View>
            }
            Setting={<IconAD name="setting" color="#1ca1f2" size={27} />}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            paddingLeft: 13,
            borderBottomColor: "rgba(104, 120, 135, 0.9)",
            borderBottomWidth: 0.4,
            backgroundColor: "white",
            paddingVertical: 12,
          }}
        >
          <IconMCI name="email-edit-outline" color="#687887" size={22} />
          <Text style={{ marginLeft: 13 }}>Permintaan pesan</Text>
        </View>
        <View style={{ marginBottom: 210 }}>
          <FlatList
            style={{ backgroundColor: "white" }}
            nestedScrollEnabled
            data={DataMessage}
            keyExtractor={(item) => item.userName}
            renderItem={({ item }) => <CellMessage item={item} />}
          />
        </View>
      </View>
      <View style={styles.createDaftar}>
        <IconMCI name="email-plus-outline" color="white" size={27} />
      </View>
    </View>
  );
};

export default MessageScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
      },
      createDaftar: {
        backgroundColor: "#1da1f3",
        height: 60,
        width: 60,
        borderRadius: 60 / 2,
        right: 20,
        position: "absolute",
        bottom: 120,
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
