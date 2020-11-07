import React from 'react'
import { StyleSheet, Text, View, Image, FlatList, Linking, TouchableOpacity, TextInput, SafeAreaView } from 'react-native'
import HeaderMain from '../../auth/componen/HeaderMain';
import IconAD from 'react-native-vector-icons/AntDesign';
import IconMI from 'react-native-vector-icons/MaterialIcons'
import IconMCI  from 'react-native-vector-icons/MaterialCommunityIcons';
import { ScrollView } from 'react-native-gesture-handler';


const DataNotif = [
  {
    id: '1',
    label: "09.00 wib"
  },
  {
    id: '2',
    label: "humar polri"
  },
  {
    id: '3',
    label: "#pilkada2020"
  },
  {
    id: '4',
    label: "#international"
  },
  {
    id: '5',
    label: "presiden jokowi"
  }
]

const DataToFollow = [
  {
    username: '@Cariknalpot',
    name: "Cariknalpotracing",
    userPP: require('../../../assets/OtherAkun/cariknalpot.jpg'),
    whosFollow: '@DepokR15Owners mengikuti',
    aboutme: null
  },
  {
    username: '@galacmytoces',
    name: "Dahan",
    userPP: require('../../../assets/OtherAkun/galacmy.jpg'),
    whosFollow: '@DepokR15Owners mengikuti',
    aboutme: null
  },
  {
    username: '@widi04_',
    name: "Widi",
    userPP: require('../../../assets/OtherAkun/widi.jpg'),
    whosFollow: '@DepokR15Owners mengikuti',
    aboutme: 'Follback? Mention Me'
  }
]

const CellNotif = ({item}) => {
  return (
    <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginRight: 10}}>
      <Text style={{fontWeight: 'bold', fontSize: 16, marginVertical: 20, marginLeft: 10}}>{item.label}</Text>
      <IconMI
        name="keyboard-arrow-down" color="#687887" size={22}
      />
    </View>
  )
}

const CellToFollow = ({ item }) => {
  return (
    <View style={{ marginBottom: 13, paddingHorizontal: 15 }}>
      <View
        style={{ flexDirection: "row", paddingVertical: 8 }}
      >
        <View style={{width: 55,  alignItems: 'flex-end'}}>
          <IconMCI name="account-outline" size={12} color="#687887" />
        </View>
        <Text style={{ fontSize: 12, color: "#687887", marginLeft: 10 }}>
          {item.whosFollow}
        </Text>
      </View>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <View>
          <Image
            style={{ width: 55, height: 55, borderRadius: 55 / 2 }}
            source={item.userPP}
          />
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "flex-start",
            marginLeft: 12,
          }}
        >
          <Text style={{ fontWeight: "bold" }}>{item.name}</Text>
          <Text>{item.username}</Text>
        </View>
        <View
          style={{
            justifyContent: "center",
          }}
        >
          <TouchableOpacity
            style={{
              borderRadius: 25 / 2,
              borderWidth: 1,
              borderColor: "#1ca1f2",
              height: 25,
              width: 80,
            }}
          >
            <Text style={{ color: "#1ca1f2", textAlign: "center" }}>Ikuti</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const footerNotif = () => {
  
  return (
    <View>
       <View
    style={{
      backgroundColor: "#687887",
      height: 0.4,
      marginTop: 0
    }}
    />
      <Text
        style={{
          fontSize: 16,
          marginVertical: 12,
          marginLeft: 10,
          color: "#2093da",
        }}
        onPress={() => Linking.openURL("https://help.twitter.com")}
      >
        Tampilkan lainnya
      </Text>
    </View>
  );
};
const renderSeparator = () => {
  return (
    <View
    style={{
      backgroundColor: "#687887",
      height: 0.4,
      
    }}
  />
  )
}
const SearchScreen = () => {
  return (
    <SafeAreaView>
    <View style={{ paddingBottom: 120 }}>
      <View style={{ height: 60 }}>
        <HeaderMain
          Matery={
            <TextInput
              style={{
                borderRadius: 40 / 2,
                borderColor: "rgba(104, 120, 135, 0.4)",
                borderWidth: 0.5,
                height: 30,
                backgroundColor: "#e6ebef",
                width: "100%",
                height: 40,
                paddingLeft: 20,
              }}
              placeholder="Cari di Twitter"
            />
          }
          Setting={<IconAD name="setting" color="#1ca1f2" size={27} />}
        />
      </View>
      <View
        style={{
          backgroundColor: "white",
          borderBottomColor: "#687887",
          borderBottomWidth: 0.5,
        }}
      >
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 18,
            marginVertical: 15,
            marginLeft: 10,
          }}
        >
          Tren untuk Anda
        </Text>
      </View>
      <ScrollView>
        <View>
          <FlatList
            style={{ backgroundColor: "white" }}
            data={DataNotif}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <CellNotif item={item} />}
            ItemSeparatorComponent={renderSeparator}
            ListFooterComponent={footerNotif}
          />
        </View>
        <View
          style={{
            backgroundColor: "white",
            borderBottomColor: "#687887",
            borderBottomWidth: 0.5,
            marginTop: 10,
          }}
        >
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 18,
              marginVertical: 15,
              marginLeft: 10,
            }}
          >
            Untuk diikuti
          </Text>
        </View>
        <View>
          <FlatList
            style={{ backgroundColor: "white" }}
            data={DataToFollow}
            keyExtractor={(item) => item.username}
            renderItem={({ item }) => <CellToFollow item={item} />}
            ItemSeparatorComponent={renderSeparator}
            ListFooterComponent={footerNotif}
          />
        </View>
        <View style={{ height: 0.4, backgroundColor: "#687887" }}></View>
        <View
          style={{
            height: 60,
            backgroundColor: "white",
            borderBottomColor: "#687887",
            borderWidth: 0.4,
          }}
        ></View>
      </ScrollView>
     
    </View>
    <View style={styles.createDaftar}>
        <IconMI name="playlist-add" color="white" size={27} />
      </View>
    </SafeAreaView>
  );
};

export default SearchScreen

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
