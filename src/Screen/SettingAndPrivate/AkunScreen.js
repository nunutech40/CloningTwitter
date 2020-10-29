import React from 'react'
import { StyleSheet, Text, View, SectionList } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import HeaderBack from '../../auth/componen/HeaderBack';
import CellListAkun from '../../auth/componen/CellListAkun';
import CellHeader from '../../auth/componen/CellHeader';
import { ScrollView } from 'react-native-gesture-handler';


const DataSetting = [
  {
    judul: "Proses masuk dan keamanan",
    height: 15,
    data: [
      { oneLine: false, label: "Nama Pengguna", isi: "@nugrahaRM" },
      {
        oneLine: false,
        label: "Ponsel",
        isi: "087-831-025-157",
      },
      {
        oneLine: false,
        label: "Email",
        isi: "nunu.nugraha@gmail.com",
      },
      {
        oneLine: true,
        label: "Kata sandi",
      },
      {
        oneLine: true,
        label: "Keamanan",
      },
    ],
  },
  {
    judul: "Data dan izin",
    height: 33,
    data: [
      {
        oneLine: false,
        custom: true,
        label: "Negara",
        isi: "Indonesia",
        other: "Pilih negara tempat tinggal Anda.",
        textLink: "Pelajari lebih lanjut",
        link: "https:\\google.com",
      },
      {
        oneLine: true,
        label: "Data Twitter Anda",
      },
      {
        oneLine: true,
        label: "Aplikasi dan sesi",
      },

      {
        oneLine: true,
        label: "Keluar",
      },
    ],
  },
  {
    judul: '',
    height: -18,
    data: [
      {
        oneLine: true,
        label: 'Nonaktifkan akun Anda'
      }
    ]
  }
];

const AkunScreen = (props) => {
  renderSeparator = () => (
    <View
      style={{
        backgroundColor: "#687887",
        height: 0.4,
      }}
    />
  );

  return (
    <View style={{flex: 1}}>
      <View style={{ flex: 1, paddingTop: 20}}>
        <StatusBar style="dark" backgroundColor="#ebebeb" />
        <View style={{ height: 60 }}>
          <HeaderBack
            customHeader={true}
            onPressBack={() => props.navigation.goBack()}
            CustomHeader={
              <View
                style={{
                  width: "100%",
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "flex-start",
                  backgroundColor: "#ffffff",
                }}
              >
                <Text style={{ fontWeight: "bold", fontSize: 18 }}>Akun</Text>
                <Text style={{ color: "#687887", fontSize: 15 }}>
                  @NugrahaRM
                </Text>
              </View>
            }
          />
        </View>
        <View style={{ marginBottom: 60}}>
          <SectionList
            nestedScrollEnabled
            sections={DataSetting}
            keyExtractor={(item, index) => item + index}
            renderItem={({ item, index, section: { judul } }) => (
              <CellListAkun data={item} />
            )}
            renderSectionHeader={({ section: { judul, height } }) => (
              <CellHeader tittle={judul} height={height} />
            )}
            ItemSeparatorComponent={this.renderSeparator}
          />
        </View>
      </View>
      
    </View>
  );
};

export default AkunScreen

const styles = StyleSheet.create({})
