import React, {useState} from 'react'
import { StyleSheet, Text, View, Linking  } from 'react-native'
import HeaderBack from '../../../src/auth/componen/HeaderBack';
import { StatusBar } from 'expo-status-bar';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const TopTab = createMaterialTopTabNavigator();

const MengikutiTab = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 20,
      }}
    >
      <View
        style={{
          width: "100%",
          borderBottomColor: "rgba(104, 120, 135, 0.4)",
          borderBottomWidth: 0.4,
        }}
      >
        <Text
          style={{
            color: "#687887",
            fontSize: 16,
            marginVertical: 35,
            textAlign: "center",
          }}
        >
          Topik yang Anda ikuti ditampilkan di sini. Untuk melihat semua hal
          yang menurut Twitter menarik unutk Anda, lihat{" "}
          <Text
            style={{ color: "#1da1f3", fontSize: 16 }}
            onPress={() => Linking.openURL("https://help.twitter.com")}
          >
            Data Twitter Anda
          </Text>
          . Anda juga dapat{" "}
          <Text
            style={{ color: "#1da1f3", fontSize: 16 }}
            onPress={() => Linking.openURL("https://help.twitter.com")}
          >
            mempelajari lebih lanjut
          </Text>{" "}
          tentang mengikuti Topik.
        </Text>
      </View>
      <View style={{ flex: 1 }}></View>
    </View>
  );
};

const TidakTertarikTab = () => {
  return(
    <View style={{flex: 1, paddingHorizontal: 20, justifyContent: 'center', alignItems: 'center'}}>
      <Text
          style={{
            fontSize: 23,
            color: "black",
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          Anda belum memberi tahu Topik yang sebaiknya tidak kami rekomendasikan lagi
        </Text>
        <Text style={{ color: "#687887", fontSize: 16, marginVertical: 20, textAlign: 'center' }}>
          Ketika Anda menandai ketidaktertarikan pada Topik tertentu, Topik akan muncul di sini dan kami
          tidak akan merekomendasikan Anda untuk mengikuti Topik tersebut di timeline Beranda
        </Text>
      </View>
  )
}

const TopicScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, paddingTop: 20 }}>
      <StatusBar style="dark" backgroundColor="#ebebeb" />
      <View style={{ height: 60 }}>
        <HeaderBack
          onPressBack={() => navigation.goBack()}
          textHeader="Topik"
        />
      </View>
      <View style={{ flex: 1 }}>
        <TopTab.Navigator
          tabBarOptions={{
            pressColor:"#1da1f3",
            indicatorStyle : {
              // borderBottomColor: 'red',
              borderBottomWidth: 2,
              borderColor: '#1da1f3',
              }
          }}
        >
          <TopTab.Screen
            name="Mengikuti"
            component={MengikutiTab}
            options={{ tabBarLabel: "Mengikuti" }}
          />
          <TopTab.Screen
            name="Tidaktertarik"
            component={TidakTertarikTab}
            options={{
              tabBarLabel: "Tidak Tertarik"
              
            }}
          />
        </TopTab.Navigator>
      </View>
    </View>
  );
};
export default TopicScreen;

const styles = StyleSheet.create({})
