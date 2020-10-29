import React, {useState} from 'react'
import { StyleSheet, View } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer';
import MainScreen from '../MainScreen';
import DrawerContent from './DrawerContent';
import { Text } from 'react-native-paper';


const SideDrawer = createDrawerNavigator();
const DrawerScreen = () => {
    return (
        <View style={{flex: 1}}>
            <SideDrawer.Navigator drawerContent={props => <DrawerContent {...props}/>}
            style={styles.container}
            drawerStyle={{
                backgroundColor: 'white',
                width:"83%"
            }}
        >
            <SideDrawer.Screen
                name="MainScreen"
                component={MainScreen}
                backgroundColor="white"
                
                options={{
                    drawerLabel: 'white',
                    activeColor:"white",
                    backgroundColor:"white",
                    
                }}
            />
        </SideDrawer.Navigator>

        
        </View>
    )
}

export default DrawerScreen;

const styles = StyleSheet.create({
    
})
