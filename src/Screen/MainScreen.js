import React, {useEffect, useState, Component, useContext} from 'react';
import { StyleSheet,TextInput, View, Modal, Text } from 'react-native';
import {  TouchableOpacity } from 'react-native-gesture-handler';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import IconF from 'react-native-vector-icons/Feather';
import IconAD from 'react-native-vector-icons/AntDesign';
import IconII from 'react-native-vector-icons/Ionicons';
import IconMCI from 'react-native-vector-icons/MaterialCommunityIcons';
import IconMI from 'react-native-vector-icons/MaterialIcons';
import { StatusBar } from 'expo-status-bar';
import HomeScreen from './Main/HomeScreen';
import SearchScreen from './Main/SearchScreen';
import NotifScreen from './Main/NotifScreen';
import MessageScreen from './Main/MessageScreen';
import { color } from 'react-native-reanimated';
import iconHomeOutline from '../../assets/home-outline.png';
import iconHome from '../../assets/home.png';

const HomeBottomNavigation = createMaterialBottomTabNavigator();

const MainScreen = () => {

  return (
    <View style={{flex: 1, paddingTop: 20}}>
      <StatusBar style="dark"/>
      <HomeBottomNavigation.Navigator
      initialRouteName="Home"
      barStyle={{backgroundColor: 'white'}}
      labeled={false}
    >
      <HomeBottomNavigation.Screen
        name="Home"
        component={HomeScreen}
        options={{
          
          tabBarIcon: ({focused}) => (
            <IconMCI
              name={focused ? "home-minus" :"home-outline"} color={focused ? "#1ca1f2" : "#687887"}  size={27}
            />
          )
        }}
      />
      <HomeBottomNavigation.Screen
        name="Search"
        component={SearchScreen}
        options={{
          activeColor:"blue",
          tabBarIcon: ({ focused }) => (
            <IconAD
              name="search1" color={focused ? "#1ca1f2" : "#687887"} size={22}
            />
          )
        }}
      />
      <HomeBottomNavigation.Screen
        name="Notif"
        component={NotifScreen}
        activeColor=''
        options={{
          
          tabBarIcon: ({ focused }) => (
            <IconII
              name={focused ? "md-notifications" : "ios-notifications-outline"} color={focused ? "#1ca1f2" : "#687887"} size={27}
            />
          )
        }}
      />
      <HomeBottomNavigation.Screen
        name="Message"
        component={MessageScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <IconMI
              name={focused ? "mail" : "mail-outline"} color={focused ? "#1ca1f2" : "#687887"}  size={22}
            />
          )
        }}
      />
    </HomeBottomNavigation.Navigator>
    </View>
  );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,
    },
    textInput: {
      height: 35,
      borderWidth: 1,
      width: '100%'
    }
})

export default MainScreen;