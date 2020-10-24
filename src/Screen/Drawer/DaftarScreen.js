import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import IconAD from 'react-native-vector-icons/AntDesign';

const DaftarScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text
          style={{
            fontSize: 23,
            color: "black",
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          Anda belum membuat atau berlangganan Daftar apa pun
        </Text>
        <Text style={{ color: "#687887", fontSize: 16, marginVertical: 20 }}>
          Bila sudah, akan muncul di sini
        </Text>
        <TouchableOpacity
          style={styles.btnCreateAccount}
          onPress={() => navigation.navigate("BuatAkun")}
        >
          <Text style={styles.lblBuatAkun}>Buat Daftar</Text>
        </TouchableOpacity>
      </View>
      <View
        style={styles.createDaftar}
      >
        <IconAD name="profile" color="white" size={27} />
      </View>
    </View>
  );
};

export default DaftarScreen

const styles = StyleSheet.create({
  btnCreateAccount: {
    height: 35,
    borderRadius: 35 / 2,
    backgroundColor: "#1da1f3",
    justifyContent: "center",
    paddingHorizontal: 12
  },
  lblBuatAkun: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
  createDaftar: {
    backgroundColor: "#1da1f3",
    height: 60,
    width: 60,
    borderRadius: 60 / 2,
    right: 20,
    position: "absolute",
    bottom: 20,
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
