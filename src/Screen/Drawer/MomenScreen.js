import React from 'react'
import { StyleSheet, Text, View, Linking, TouchableOpacity  } from 'react-native'
import HeaderBack from '../../../src/auth/componen/HeaderBack';
import { StatusBar } from 'expo-status-bar';

const MomenScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, paddingTop: 20 }}>
      <StatusBar style="dark" backgroundColor="#ebebeb" />
      <View style={{ height: 60 }}>
        <HeaderBack
          onPressBack={() => navigation.goBack()}
          textHeader="Momen"
        />
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          paddingHorizontal: 20,
        }}
      >
        <Text
          style={{
            fontSize: 23,
            color: "black",
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          Anda belum membuat Momen apa pun
        </Text>
        <Text
          style={{
            color: "#687887",
            fontSize: 16,
            marginVertical: 20,
            textAlign: 'center'
          }}
        >
          Untuk membuat atau mengedit Momen, gunakan twitter.com.{" "}
          <Text
              style={{ color: "#1da1f3", fontSize: 16 }}
              onPress={()=> Linking.openURL('https://help.twitter.com')}
            >
              Pelajari lebih lanjut.
            </Text>
        </Text>
      </View>
    </View>
  );
};

export default MomenScreen

const styles = StyleSheet.create({})
