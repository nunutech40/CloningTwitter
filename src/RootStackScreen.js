import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

import CreateAccountScreen from './auth/CreateAccountScreen';
import LoginScreen from './auth/LoginScreen';
import BuatAkun from './auth/BuatAkun';

const RootStack = createStackNavigator();

const RootStackScreen = ({navigation}) => {
    return(
        <RootStack.Navigator headerMode='none'>
        <RootStack.Screen
          name="CreateAkun"
          component={CreateAccountScreen}
        />
        <RootStack.Screen
          name="Login"
          component={LoginScreen}
        />
        <RootStack.Screen
          name="BuatAkun"
          component={BuatAkun}
        />
      </RootStack.Navigator>
    )
}

export default RootStackScreen;