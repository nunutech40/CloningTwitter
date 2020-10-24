import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Alert  } from 'react-native'
import HeaderBack from '../../../src/auth/componen/HeaderBack';
import { StatusBar } from 'expo-status-bar';
import { TabRouter } from '@react-navigation/native';

const MarkahScreen = ({ navigation }) => {
  const [hiden, setHiden] = useState(false)

  const handleHapusMarkah = () => {
    setHiden(!hiden)
    Alert.alert(
      "Yakin?",
      "Ini akan menghapus semua Tweet yang telah Anda tambahkan ke Markah.",
      [
        {
          text: 'BATAL',
          onPress: () => console.log("Cancel Pressed"),
          style: "default"
        },
        { text: "YA, SAYA YAKIN", onPress: () => console.log("OK Pressed") }
      ],
      { cancelable: false }
    );
  }

  return (
    <View style={{ flex: 1, paddingTop : 20 }}>
      <StatusBar style="dark" backgroundColor="#ebebeb"/>
      <View style={{ height: 60 }}>
        <HeaderBack
          onPressBack={()=>navigation.goBack()}
          onPressMenu={() => setHiden(!hiden)}
          onPressHapusMarkah = {handleHapusMarkah}
          hideDelete={hiden}
          textHeader='Markah'
          isMenu={true}
        />
      </View>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center", paddingHorizontal: 20 }}>
        <Text
          style={{
            fontSize: 23,
            color: "black",
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          Anda belum menambahkan Tweet apa pun ke Markah Anda
        </Text>
        <Text style={{ color: "#687887", fontSize: 16, marginVertical: 20 }}>
          Bila dilakukan, anda akan melihatnya di sini.
        </Text>
      </View>
    </View>
  );
};

export default MarkahScreen;

const styles = StyleSheet.create({})
