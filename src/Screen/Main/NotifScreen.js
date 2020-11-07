import React from 'react'
import { StyleSheet, Text, View, Image, FlatList, Linking, TouchableOpacity } from 'react-native'
import HeaderMain from '../../auth/componen/HeaderMain';
import IconAD from 'react-native-vector-icons/AntDesign';
import IconMI from 'react-native-vector-icons/MaterialIcons'
import IconMCI from 'react-native-vector-icons/MaterialCommunityIcons';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import CellNotifTab from '../../auth/componen/CellNotifTab';

const DataTimeline = [
  {
    idTwit: '001',
    userName: '@Bianconerria',
    name: 'dek Bianca',
    userPP: require('../../../assets/OtherAkun/bianca.jpg'),
    textMessage: 'itulah kita diberikan pilihan untuk menanggapi siapa.',
    timeMessage: new Date('2020-09-18T10:34:23+07:00'), 
    like: 0,
    retwet: 0,
    reply: 0,
    replyTo: ['@NugrahaRM17', '@arya_andrea']
  },
  {
    idTwit: '002',
    userName: '@Bianconerria',
    name: 'dek Bianca',
    userPP: require('../../../assets/OtherAkun/bianca.jpg'),
    textMessage: 'Saya sih kalo nonton pertandingan, bikin kesimpulan aja, timnya main bagus, kurang bagus atau udah baik tp malah lawan bagus banget'
    + 'Abis itu kupas lini perlininya. Ga perlu ngatain org bego.',
    timeMessage: new Date('2020-09-18T10:34:23+07:00'),
    like: 0,
    retwet: 0,
    reply: 0,
    replyTo: ['@NugrahaRM17']
  },
  {
    idTwit: '003',
    userName: '@aryha_andrea',
    name: 'Aryha Aryadi',
    userPP: require('../../../assets/OtherAkun/Aryhahadi.jpg'),
    textMessage: 'Padahal Fans RM harusnya bangga sama pelatihnya yang sekarang, tanpa belanja banyak prestasi ada...'
    + '3x champion loh...'
    + 'Ada kok pelatih yang belanjanya abis ratusan jeti, championnya cuma 1, walau sama2 Botak',
    timeMessage: new Date('2020-09-18T10:34:23+07:00'),
    like: 1,
    retwet: 0,
    reply: 2,
    replyTo: ['@NugrahaRM17', '@Bianconneria', 'Testing']
  },
]

const TopTab = createMaterialTopTabNavigator();

const SemuaTab = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <View style={{ marginBottom: 0, width: "100%" }}>
        <FlatList
          style={{ backgroundColor: "white" }}
          nestedScrollEnabled
          data={DataTimeline}
          keyExtractor={(item) => item.idTwit}
          renderItem={({ item }) => <CellNotifTab item={item} />}
        />
      </View>
    </View>
  );
};

const SebutanTab = () => {
  return(
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
       <View style={{ marginBottom: 5, width: "100%" }}>
        <FlatList
          style={{ backgroundColor: "white" }}
          nestedScrollEnabled
          data={DataTimeline}
          keyExtractor={(item) => item.idTwit}
          renderItem={({ item }) => <CellNotifTab item={item} />}
        />
      </View>
    </View>
  )
}

const NotifScreen = () => {
  return (
    <View style={{backgroundColor: 'green', flex: 1}}>
      <View style={{ height: 60, backgroundColor: 'yellow' }}>
        <HeaderMain
          Matery={
            <View style={{ width: "100%" }}>
              <Text
                style={{
                  fontWeight: "700",
                  fontSize: 20,
                  textAlign: "left",
                }}
              >
                Notifikasi
              </Text>
            </View>
          }
          Setting={<IconAD name="setting" color="#1ca1f2" size={27} />}
        />
      </View>
      
      <View style={{ flex: 1, backgroundColor: 'pink'}}>
      <TopTab.Navigator
          
          tabBarOptions={{
            pressColor:"#1da1f3",
            indicatorStyle : {
              borderBottomWidth: 2,
              borderColor: '#1da1f3',
              }
          }}
          
        >
          <TopTab.Screen
            name="Semua"
            component={SemuaTab}
            
            options={{ tabBarLabel: "Semua"
            
          }}
          />
          <TopTab.Screen
            name="Sebutan"
            component={SebutanTab}
            options={{
              tabBarLabel: "Sebutan"
              
            }}
          />
        </TopTab.Navigator>
      </View>
      <View style={styles.createDaftar}>
        <IconMI name="playlist-add" color="white" size={27} />
      </View>
    </View>
  );
};

{/* <TopTab.Navigator
tabBarOptions={{
  pressColor: "#1da1f3",
  indicatorStyle: {
    borderBottomWidth: 2,
    borderColor: "#1da1f3",
  },
}}
>
<TopTab.Screen
  name="Semua"
  component={SemuaTab}
  options={{ tabBarLabel: "Semua" }}
/>
<TopTab.Screen
  name="Sebutan"
  component={SebutanTab}
  options={{
    tabBarLabel: "Sebutan",
  }}
/>
</TopTab.Navigator> */}

export default NotifScreen;

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
