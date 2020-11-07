import React from 'react'
import { StyleSheet, Text, View,FlatList, Image } from 'react-native'
import { Button } from 'react-native-paper'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import CellTwit from '../../auth/componen/CellTwit';
import CellNotifTab from '../../auth/componen/CellNotifTab';
import IconMI from 'react-native-vector-icons/MaterialIcons';
import IconE from 'react-native-vector-icons/Entypo'
import IconMCI from 'react-native-vector-icons/MaterialCommunityIcons';
import IconFI from 'react-native-vector-icons/Fontisto';
import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity } from 'react-native-gesture-handler';

const TopTab = createMaterialTopTabNavigator();

const TwitScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ marginBottom: 0, flex: 1, backgroundColor: "green" }}>
        <FlatList
          style={{ backgroundColor: "white" }}
          nestedScrollEnabled
          data={DataTwit}
          keyExtractor={(item) => item.idTwit}
          renderItem={({ item }) => <CellTwit item={item} />}
        />
      </View>
    </View>
  );
};

const TwitAndReplyScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ marginBottom: 0, flex: 1, backgroundColor: "green" }}>
        <FlatList
          style={{ backgroundColor: "white" }}
          nestedScrollEnabled
          data={DataTwitandRepply}
          keyExtractor={(item) => item.idTwit}
          renderItem={({ item }) => <CellNotifTab item={item} />}
        />
      </View>
    </View>
  );
};

const MediaScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ marginBottom: 0, flex: 1, backgroundColor: "green" }}>
        <FlatList
          style={{ backgroundColor: "white" }}
          nestedScrollEnabled
          data={DataTwit}
          keyExtractor={(item) => item.idTwit}
          renderItem={({ item }) => <CellTwit item={item} />}
        />
      </View>
    </View>
  );
};

const LikeScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ marginBottom: 0, flex: 1, backgroundColor: "green" }}>
        <FlatList
          style={{ backgroundColor: "white" }}
          nestedScrollEnabled
          data={DataLike}
          keyExtractor={(item) => item.idTwit}
          renderItem={({ item }) => <CellNotifTab item={item} />}
        />
      </View>
    </View>
  );
};

const ProfileScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, paddingTop: 20}}>
        <StatusBar style="dark" backgroundColor="#ebebeb" />
      <View style={{ height: 415, }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingHorizontal: 10,
            
            paddingTop: 15,
            paddingBottom: 105,
            backgroundColor: 'green'
          }}
        >
          <View
            style={{
              height: 30,
              width: 30,
              backgroundColor: "black",
              borderRadius: 30/2,
              opacity: 0.4,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <IconMI name="arrow-back" color="white" size={25}
            onPress={()=> navigation.goBack()}
            />
          </View>
          <View
            style={{
              height: 30,
              width: 30,
              backgroundColor: "black",
              borderRadius: 30/2,
              opacity: 0.4,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <IconE name="dots-three-vertical" color="white" size={22} />
          </View>
        </View>
        <View style={{backgroundColor: 'white', flex: 1, marginTop: 0, paddingHorizontal: 10}}>
            <Text style={{fontWeight: 'bold', fontSize: 22, marginTop: 50}}>Nunu Nugraha</Text>
            <Text style={{fontSize: 16, color: "#687887"}}>@NugrahaRM</Text>
            <Text style={{marginVertical: 8, fontSize: 16, }}>Fans Real Madrid - Madridisa Garis Lucu | IOS Dev tapi gak punya Iphone</Text>
            <View style={{flexDirection: 'row', alignItems: 'center', marginBottom: 7}}>
                <IconMCI
                    name="map-marker-outline" size={20}  color="#687887"
                />
                <Text style={{color: "#687887", fontSize: 16, marginLeft: 5}}>Yogyakarta, Indonesia</Text>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center', marginBottom: 7}}>
                <IconFI
                    name="date" size={16}  color="#687887"
                />
                <Text style={{color: "#687887", fontSize: 16, marginLeft: 5}}>Bergabung Januari 2016</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
                <Text style={{fontSize: 16}}><Text style={{fontWeight: 'bold', marginLeft: 15}}>1100 </Text>Mengikuti</Text>
                <Text style={{marginLeft: 15, fontSize: 16}}><Text style={{fontWeight: 'bold'}}>393 </Text>Pengikut</Text>
            </View>
        </View>
        <View style={{height: 95, width: 95, backgroundColor: 'white', position: 'absolute', left: 20, top: 107, borderRadius: 100/2, alignItems: 'center', justifyContent: 'center'}}>
            <Image style={{width: '90%', height: '90%', borderRadius: 90/2}}
                source={require('../../../assets/potoprofile.jpg')}
            />
          </View>
        <View style={{backgroundColor: 'white', paddingHorizontal: 10, right: 5, position: 'absolute', paddingVertical: 5, top: 160, borderRadius: 36/2, borderWidth: 1, borderColor: "#687887"}}>
            <Text style={{fontSize: 16, fontWeight: 'bold', color: "#687887"}}>Edit profile</Text>
        </View>
        
      </View>
      <View style={{ flex: 1 }}>
        <TopTab.Navigator
          tabBarOptions={{
            pressColor: "#1da1f3",
            indicatorStyle: {
              borderBottomWidth: 2,
              borderColor: "#1da1f3",
            },
          }}
        >
          <TopTab.Screen
            name="Tweet"
            component={TwitScreen}
            options={{ tabBarLabel: "Tweet" }}
          />
          <TopTab.Screen
            name="Twitandreply"
            component={TwitAndReplyScreen}
            options={{
              tabBarLabel: "Tweet & balasan",
            }}
          />

          <TopTab.Screen
            name="Media"
            component={MediaScreen}
            options={{
              tabBarLabel: "Media",
            }}
          />
          <TopTab.Screen
            name="Like"
            component={LikeScreen}
            options={{
              tabBarLabel: "Suka",
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
export default ProfileScreen

const styles = StyleSheet.create({
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

const DataLike = [
  {
    idTwit: '001',
    userName: '@TheElla',
    name: 'The Dodo & Mamacita',
    userPP: require('../../../assets/OtherAkun/mamacita.jpg'),
    textMessage: 'No one loves masks. People who wear masks love others, not just themselves.',
    timeMessage: new Date('2020-09-18T10:34:23+07:00'), 
    like: 680,
    retwet: 27,
    reply: 28,
    replyTo: ['@theRealKiyosaki']
  },
  {
    idTwit: '002',
    userName: '@zettt_',
    name: 'zaharamadani',
    userPP: require('../../../assets/OtherAkun/zaharamadani.jpg'),
    textMessage: 'A Very Yuppy Wedding.. inget bgt lagi pusing skripsi, terus ke togamas, liat cover sama blurbnya, kok menarik.. beli.. ga lgsg baca.. tapi begitu baca, aaak sukaaa.. penasaran sama buku Kak Ika yg laen deh.. lengkap semua deh skrg bukunya Kak Ika hehe',
    timeMessage: new Date('2020-09-18T10:34:23+07:00'),
    like: 0,
    retwet: 1,
    reply: 4,
    replyTo: ['@ikkanatassa']
  },
  {
    idTwit: '003',
    userName: 'f_aida',
    name: 'White Rose',
    userPP: require('../../../assets/OtherAkun/whiterose.jpg'),
    textMessage: 'Ga masalah sbnernya. krn itu salah 1 bentuk cinta kpd Tuhan (habluminallah). Tapi.... Selain habluminallah jg ada yg namanya Habluminannaas. Lagian kalau dipakein pengeras suara, apa gk kasian sma org2 yg butuh ketenangan? Masa iya beribadah hrs sekejam itu',
    timeMessage: new Date('2020-09-18T10:34:23+07:00'),
    like: 1,
    retwet: 0,
    reply: 2,
    replyTo: ['@bgzd_', '@MuhammaidiyinGL']
  },
]


const DataTwit = [
  {
      idTwit: '001',
      userName: '@NugrahaRM',
      name: 'Nugraha Nunu',
      userPP: require('../../../assets/OtherAkun/potoprofile.jpg'),
      textMessage: 'NP ~ bila nanti saatnya tlah tiba',
      timeMessage: new Date('2020-09-18T10:34:23+07:00'), 
      like: 0,
      retwet: 0,
      reply: 0
    },
    {
      idTwit: '002',
      userName: '@NugrahaRM',
      name: 'Nugraha Nunu',
      userPP: require('../../../assets/OtherAkun/potoprofile.jpg'),
      textMessage: 'Fiyuh, sweat sweat sweat' +
      'cuma nambahin buat test scroll'+
      'cuma nambahin buat test scroll',
      timeMessage: new Date('2020-09-18T10:34:23+07:00'),
      like: 0,
      retwet: 0,
      reply: 0
    },
    {
      idTwit: '003',
      userName: '@NugrahaRM',
      name: 'Nugraha Nunu',
      userPP: require('../../../assets/OtherAkun/potoprofile.jpg'),
      textMessage: 'Abis workout sedetik, baju langsung lepek kek abis diguyur, Coronces cepatlah berlalu, ku ingin ke gym lagi tanpa rasa khawatir gara2 kopit',
      timeMessage: new Date('2020-09-18T10:34:23+07:00'),
      like: 1,
      retwet: 0,
      reply: 2
    },
    {
      idTwit: '004',
      userName: '@NugrahaRM',
      name: 'Nugraha Nunu',
      userPP: require('../../../assets/OtherAkun/potoprofile.jpg'),
      textMessage: 'Alhamdulillah, Sudah 1 november. Semoga lebih baik, dan tercapai harapan-harapan baik. Aamiin.',
      timeMessage: new Date('2020-09-18T10:34:23+07:00'),
      like: 2,
      retwet: 102,
      reply: 252
    },
    {
      idTwit: '005',
      userName: '@NugrahaRM',
      name: 'Nugraha Nunu',
      userPP: require('../../../assets/OtherAkun/potoprofile.jpg'),
      textMessage: '"aku gaakan gitu janji"' +
                    'Lalu dua bulan kemudian' +
                    'Sudah kuduga omongannya tak bisa dipegang' + 
                    'cuma nambahin buat test scroll',
      timeMessage: new Date('2020-09-18T10:34:23+07:00'),
      like: 0,
      retwet: 0,
      reply: 0
    },
]
 const DataTwitandRepply = [
  {
    idTwit: '001',
    userName: '@NugrahaRM',
    name: 'Nugraha Nunu',
    userPP: require('../../../assets/OtherAkun/potoprofile.jpg'),
    textMessage: 'itulah kita diberikan pilihan untuk menanggapi siapa.',
    timeMessage: new Date('2020-09-18T10:34:23+07:00'), 
    like: 0,
    retwet: 0,
    reply: 0,
    replyTo: ['@NugrahaRM17', '@arya_andrea']
  },
  {
    idTwit: '002',
    userName: '@NugrahaRM',
    name: 'Nugraha Nunu',
    userPP: require('../../../assets/OtherAkun/potoprofile.jpg'),
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
    userName: '@NugrahaRM',
    name: 'Nugraha Nunu',
    userPP: require('../../../assets/OtherAkun/potoprofile.jpg'),
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