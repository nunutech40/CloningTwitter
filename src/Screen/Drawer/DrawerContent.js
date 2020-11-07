import React, {useState} from 'react'
import { StyleSheet, View,  TouchableOpacity, TouchableHighlight, Text, Dimensions } from 'react-native'
import { DrawerItem, DrawerContentScrollView } from '@react-navigation/drawer'
import {
    useTheme,
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    
} from 'react-native-paper';

import Modal from 'react-native-modal';
import { RadioButton } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconMI from 'react-native-vector-icons/MaterialIcons';
import IconAD from 'react-native-vector-icons/AntDesign';
import IconII from 'react-native-vector-icons/Ionicons';
import IconF from 'react-native-vector-icons/Feather';
import IconFA from 'react-native-vector-icons/FontAwesome';
import IconFA5 from 'react-native-vector-icons/FontAwesome5';
import IconFon from 'react-native-vector-icons/Foundation'
import { createStackNavigator } from '@react-navigation/stack';
const ProfilStack = createStackNavigator();
const deviceWidth = Dimensions.get("window").width;
const DataMode = [
  {
    judul: null,
    data: ['Mati', 'Nyala', 'Otomatis saat senja']
  },
  {
    judul: 'Tema gelap',
    data: ['Temaram', 'Lampu Mati']
  }
]

const DrawerContent = (props) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [checked, setChecked] = React.useState("mati");
  const paperTheme = useTheme();

  const handleLight = () => {
    props.navigation.closeDrawer();
    setModalVisible(true);
  };

  const handleMode = (mode) => {
    setChecked(mode)
    setModalVisible(false);
  }

  const handleTheme = () => {
    passDataFromDrawer = "pass value from drawer";
  };
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <View style={{ flex: 1, alignItems: "flex-start", marginTop: 15 }}>
              <Avatar.Image
                source={require("../../../assets/potoprofile.jpg")}
                size={50}
              />
            </View>
            <View
              style={{ flexDirection: "row", justifyContent: "space-around" }}
            >
              <View
                style={{
                  flexDirection: "column",
                  alignItems: "flex-start",
                  flex: 1,
                }}
              >
                <Title style={styles.title}>Nunu Nugraha</Title>
                <Caption style={styles.caption}>@NugrahaNunu</Caption>
              </View>
              <TouchableOpacity style={{ marginRight: 15 }}>
                <IconMI name="keyboard-arrow-down" color="#1ca1f2" size={27} />
              </TouchableOpacity>
            </View>
            <View style={styles.row}>
              <View style={styles.section}>
                <Paragraph style={[styles.paragraph, styles.caption]}>
                  80
                </Paragraph>
                <Caption style={styles.caption}>Following</Caption>
              </View>
              <View style={styles.section}>
                <Paragraph style={[styles.paragraph, styles.caption]}>
                  100
                </Paragraph>
                <Caption style={styles.caption}>Followers</Caption>
              </View>
            </View>
          </View>

          <Drawer.Section style={styles.drawerSection}>
            <DrawerItem
              icon={({ color, size }) => (
                <Icon name="account-outline" color={color} size={size} />
              )}
              label="Profile"
              labelStyle={styles.labelDrawerTab}
              onPress={() => {
                props.navigation.navigate("ProfileScreen");
              }}
            ></DrawerItem>
            <DrawerItem
              icon={({ color, size }) => (
                <IconAD name="profile" color={color} size={size} />
              )}
              label="Daftar"
              labelStyle={styles.labelDrawerTab}
              onPress={() => {
                props.navigation.navigate("DaftarScreen");
              }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <Icon name="android-messages" color={color} size={size} />
              )}
              label="Topik"
              labelStyle={styles.labelDrawerTab}
              onPress={() => {
                props.navigation.navigate("TopicScreen");
              }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <IconFA name="bookmark-o" color={color} size={size} />
              )}
              label="Markah"
              labelStyle={styles.labelDrawerTab}
              onPress={() => {
                props.navigation.navigate("MarkahScreen");
              }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <IconFA name="flash" color={color} size={size} />
              )}
              label="Momen"
              labelStyle={styles.labelDrawerTab}
              onPress={() => props.navigation.navigate("MomenScreen")}
            />
          </Drawer.Section>
          <Drawer.Section>
            <DrawerItem
              icon={({ color, size }) => (
                <IconFA5
                  name="external-link-square-alt"
                  color={color}
                  size={size}
                />
              )}
              label="Iklan Twitter"
              labelStyle={styles.labelDrawerTab}
              onPress={() => alert("belum wait ya")}
            />
          </Drawer.Section>
          <Drawer.Section>
            <DrawerItem
              label="Pengaturan dan privasi"
              labelStyle={styles.labelDrawerTab}
              onPress={() => props.navigation.navigate("SettingScreen")}
            />
            <DrawerItem
              label="Pusat Bantuan"
              labelStyle={styles.labelDrawerTab}
              onPress={() => alert("belum wait ya")}
            />
          </Drawer.Section>
          {/* <Drawer.Section title="Preferences">
                        <TouchableRipple onPress={() => {toggleTheme()}}>
                            <View style={styles.preference}>
                                <Text>Dark Theme</Text>
                                <View pointerEvents="none">
                                    <Switch value={paperTheme.dark}/>
                                </View>
                            </View>
                        </TouchableRipple>
                    </Drawer.Section> */}
        </View>
      </DrawerContentScrollView>

      <View
        style={{
          height: 50,
          width: "100%",
          borderTopColor: "rgba(104, 120, 135, 0.4)",
          borderTopWidth: 0.4,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingHorizontal: 10,
        }}
      >
        <IconFon
          name="lightbulb"
          size={27}
          color="#1ca1f2"
          onPress={() => handleLight()}
        />
        <IconFA
          name="qrcode"
          size={27}
          color="#1ca1f2"
          onPress={() => alert("test alert icon1")}
        />
      </View>
      <Modal
        transparent={true}
        isVisible={modalVisible}
        animationOut="slideOutDown"
        animationIn="slideInUp"
        statusBarTranslucent={true}
        onSwipeComplete={() => setModalVisible(false)}
        swipeDirection="down"
        onBackdropPress={() => setModalVisible(false)}
        coverScreen={true}
      >
        <View style={styles.viewModal}>
          <View
            style={{
              height: 65,
              width: deviceWidth,
              alignItems: "center",
              borderBottomColor: "#687887",
              borderBottomWidth: 0.4,
              justifyContent: 'space-between',
              paddingVertical: 8,
              borderTopLeftRadius: 15,
              borderTopRightRadius: 15
            }}
          >
            <View
              style={{
                height: 5,
                backgroundColor: "#687887",
                width: 38,
                borderRadius: 2,
                
              }}
            ></View>
            <Text style={{ fontSize: 18, fontWeight: "bold" }}>Mode gelap</Text>
          </View>
          <TouchableHighlight
            underlayColor="#e7ecf0"
            onPress={() => handleMode("mati")}
            style={{ flex: 1, justifyContent: "center" }}
          >
            <View
              style={{
                paddingLeft: 20,
                width: deviceWidth,
                height: "100%",
                justifyContent: "space-between",
                alignItems: "center",
                borderBottomColor: "#687887",
                borderBottomWidth: 0.4,
                flexDirection: "row",
              }}
            >
              <Text style={{ fontSize: 18 }}>Mati</Text>
              <RadioButton
                value={"mati"}
                status={checked === "mati" ? "checked" : "unchecked"}
              />
            </View>
          </TouchableHighlight>
          <TouchableHighlight
            underlayColor="#e7ecf0"
            onPress={() => handleMode("nyala")}
            style={{ flex: 1, justifyContent: "center" }}
          >
            <View
              style={{
                paddingLeft: 20,
                width: deviceWidth,
                height: "100%",
                justifyContent: "space-between",
                alignItems: "center",
                borderBottomColor: "#687887",
                borderBottomWidth: 0.4,
                flexDirection: "row",
              }}
            >
              <Text style={{ fontSize: 18 }}>Nyala</Text>
              <RadioButton
                value={"nyala"}
                status={checked === "nyala" ? "checked" : "unchecked"}
              />
            </View>
          </TouchableHighlight>
          <TouchableHighlight
            underlayColor="#e7ecf0"
            onPress={() => handleMode("senja")}
            style={{ flex: 1, justifyContent: "center" }}
          >
            <View
              style={{
                paddingLeft: 20,
                width: deviceWidth,
                height: "100%",
                justifyContent: "space-between",
                alignItems: "center",
                borderBottomColor: "#687887",
                borderBottomWidth: 0.4,
                flexDirection: "row",
              }}
            >
              <Text style={{ fontSize: 18 }}>Otomatis saat senja</Text>
              <RadioButton
                value={"senja"}
                status={checked === "senja" ? "checked" : "unchecked"}
              />
            </View>
          </TouchableHighlight>
          <View
            style={{
              backgroundColor: "#e7ecf0",
              justifyContent: "center",
              height: 55,
              paddingLeft: 10,
              width: deviceWidth,
            }}
          >
            <Text style={{ fontSize: 18, fontWeight: "bold" }}>Tema Gelap</Text>
          </View>
          <TouchableHighlight
            underlayColor="#e7ecf0"
            onPress={() => handleMode("temaram")}
            style={{ flex: 1, justifyContent: "center" }}
          >
            <View
              style={{
                paddingLeft: 20,
                width: deviceWidth,
                height: "100%",
                justifyContent: "space-between",
                alignItems: "center",
                borderBottomColor: "#687887",
                borderBottomWidth: 0.4,
                flexDirection: "row",
              }}
            >
              <Text style={{ fontSize: 18 }}>Temaram</Text>
              <RadioButton
                value={"temaram"}
                status={checked === "temaram" ? "checked" : "unchecked"}
              />
            </View>
          </TouchableHighlight>
          <TouchableHighlight
            underlayColor="#e7ecf0"
            onPress={() => handleMode("lampumati")}
            style={{ flex: 1, justifyContent: "center" }}
          >
            <View
              style={{
                paddingLeft: 20,
                width: deviceWidth,
                height: "100%",
                justifyContent: "space-between",
                alignItems: "center",
                flexDirection: "row",
              }}
            >
              <Text style={{ fontSize: 18 }}>Lampu mati</Text>
              <RadioButton
                value={"lampumati"}
                status={checked === "lampumati" ? "checked" : "unchecked"}
              />
            </View>
          </TouchableHighlight>
        </View>
      </Modal>
    </View>
  );
};

export default DrawerContent;

const styles = StyleSheet.create({
    drawerContent: {
        flex: 1,
      },
      userInfoSection: {
        paddingLeft: 20,
      },
      title: {
        fontSize: 16,
        marginTop: 3,
        fontWeight: 'bold',
      },
      caption: {
        fontSize: 14,
        lineHeight: 14,
      },
      row: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
      },
      section: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15,
      },
      paragraph: {
        fontWeight: 'bold',
        marginRight: 3,
      },
      drawerSection: {
        marginTop: 15,
      },
      bottomDrawerSection: {
          marginBottom: 15,
          borderTopColor: '#f4f4f4',
          borderTopWidth: 1
      },
      preference: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16,
      },
      labelDrawerTab: {
          fontSize: 18,
          fontWeight: '600',
          color: 'black'
      },
      viewModal: {
        backgroundColor: 'white',
        borderTopRightRadius: 15,
        borderTopLeftRadius: 15,
        height: 400,
        alignItems: "center",
        bottom: -20,
        left: -20,
        right: -20,
        position: 'absolute',
      }
})
