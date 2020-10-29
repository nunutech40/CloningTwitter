import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import DrawerScreen from './Drawer/DrawerScreen';
import ProfileScreen from './Drawer/ProfileScreen';
import MomenScreen from './Drawer/MomenScreen';
import MarkahScreen from './Drawer/MarkahScreen';
import TopicScreen from './Drawer/TopicScreen';
import DaftarScreen from './Drawer/DaftarScreen';
import SettingScreen from './Drawer/SettingScreen';
import AkunScreen from '../Screen/SettingAndPrivate/AkunScreen';


import { StatusBar } from 'expo-status-bar';

const FullStack = createStackNavigator();
const FullScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1}}>
      <StatusBar style="dark" backgroundColor="#ebebeb"/>
      <FullStack.Navigator headerMode="none">
        <FullStack.Screen name="DrawerScreen" component={DrawerScreen} />
        <FullStack.Screen name="ProfileScreen" component={ProfileScreen} />
        <FullStack.Screen name="MomenScreen" component={MomenScreen} />
        <FullStack.Screen name="MarkahScreen" component={MarkahScreen} />
        <FullStack.Screen name="TopicScreen" component={TopicScreen} />
        <FullStack.Screen name="DaftarScreen" component={DaftarScreen} />
        <FullStack.Screen name="SettingScreen" component={SettingScreen} />

        <FullStack.Screen name="Akun" component={AkunScreen} />
      </FullStack.Navigator>
    </View>
  );
};

export default FullScreen;

const styles = StyleSheet.create({})
