import { StatusBar } from "expo-status-bar";
import React,{useEffect, useState} from "react";
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";

const CreateAccountScreen = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <StatusBar style="dark" backgroundColor="#ebebeb" />
      <Image
        style={styles.iconTwitter}
        source={require("../../assets/icontwitter.png")}
      />
      <View>
        <Text style={{ fontSize: 35, color: "black", fontWeight: "bold" }}>
          Ketahui peristiwa yang sedang terjadi di dunia saat ini.
        </Text>
        <TouchableOpacity style={styles.btnCreateAccount}
          onPress={()=> navigation.navigate('BuatAkun')}>
          <Text style={styles.lblBuatAkun}>Buat akun</Text>
        </TouchableOpacity>
      </View>
      <View style={{ flexDirection: "row", width: "100%" }}>
        <Text style={{ color: "#687887", fontSize: 16, marginRight: 3 }}>
          Sudah punya akun?
        </Text>
        <TouchableOpacity
          onPress={()=> navigation.navigate('Login')}
        >
          <Text style={{ color: "#2093da", fontSize: 16 }}>Masuk</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CreateAccountScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 35,
    paddingTop: 30,
    paddingBottom: 20,
  },
  iconTwitter: {
    height: 25,
    width: 25,
  },
  btnCreateAccount: {
    marginTop: 30,
    height: 35,
    borderRadius: 35 / 2,
    backgroundColor: "#1da1f3",
    justifyContent: "center",
  },
  lblBuatAkun: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
});
