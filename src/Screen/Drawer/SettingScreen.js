import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, SectionList } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import HeaderBack from '../../../src/auth/componen/HeaderBack';
import { TouchableHighlight } from 'react-native-gesture-handler';

const DataSetting = [
  {
    judul: "@NugrahaRM17",
    data: ["Akun", "Privasi dan keamanan", "Notifikasi", "Preferensi konten"],
  },
  {
    judul: "Umum",
    data: [
      "Tampilan dan suara",
      "Pemakaian data",
      "Aksesbilitas",
      "Proxy",
      "Tentang Twitter",
    ],
  },
];



const SettingScreen = (props) => {
  const [getContent, setContent] = useState(null);

  useEffect(() => {
    clickContent()
  }, [getContent])

  const clickContent = () => {
    if (getContent !== null) {
      if (getContent == "Akun") {
        {props.navigation.navigate('Akun')}
      } else if (getContent == "Privasi dan keamanan") {
        alert("this is privasi dan keamanan");
      } else if (getContent == "Notifikasi") {
        alert("this is   Notifikasi");
      } else if (getContent == "Preferensi konten") {
        alert("this is preferensi konten");
      } else if (getContent == "Tampilan dan suara") {
        alert("this is Tampilan dan suara");
      } else if (getContent == "Pemakaian data") {
        alert("this is Pemakaian data");
      } else if (getContent == "Aksesbilitas") {
        alert("this is aksesbilitas");
      } else if (getContent == "Proxy") {
        alert("this is Proxy");
      } else if (getContent == "Tentang Twitter") {
        alert("this is Tentang twitter");
      }
    }
  };

  renderSeparator = () => (
    <View
      style={{
        backgroundColor: "#687887",
        height: 0.4,
      }}
    />
  );
  const ItemSetting = ({ conten, index }) => (
    <TouchableHighlight
    onPress={() => setContent(conten)}
    underlayColor='#e7ecf0'
    >
    <View style={{ paddingLeft: 12, height: 55, justifyContent: "center" }}>
      <Text>{conten}</Text>
    </View>
    </TouchableHighlight>
  );
  const HeaderItemSetting = ({ tittle }) => (
    <View
      style={{
        backgroundColor: "#e7ecf0",
        justifyContent: "center",
        height: 55,
        paddingLeft: 12,
      }}
    >
      <Text style={{ fontSize: 24, fontWeight: "bold" }}>{tittle}</Text>
    </View>
  );

  return (
    <View style={{ flex: 1, paddingTop: 20 }}>
      <StatusBar style="dark" backgroundColor="#ebebeb" />
      <View style={{ height: 60 }}>
        <HeaderBack
          onPressBack={() => props.navigation.goBack()}
          textHeader="Pengaturan dan privasi"
        />
      </View>
      <SectionList
        sections={DataSetting}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item, index }) => (
          <ItemSetting conten={item} index={index} />
        )}
        renderSectionHeader={({ section: { judul} }) => (
          <HeaderItemSetting tittle={judul} />
        )}
        ItemSeparatorComponent={this.renderSeparator}
      />
      <View
        style={{
          flex: 1,
          paddingLeft: 12,
          justifyContent: "center",
          borderTopColor: "#687887",
          borderTopWidth: 0.4,
          paddingVertical: 20,
        }}
      >
        <Text>
          Pengaturan ini berpengaruh ke semua akun Twitter di perangkat ini.
        </Text>
      </View>
    </View>
  );
};

export default SettingScreen;

const styles = StyleSheet.create({})
