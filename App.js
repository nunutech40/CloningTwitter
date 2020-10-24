import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState, useMemo, useReducer } from 'react';
import { StyleSheet, Text, View, ActivityIndicator, ToastAndroid } from 'react-native';
import RootStackScreen from './src/RootStackScreen';
import { AuthContext } from './src/auth/Context';
import AsyncStorage from '@react-native-community/async-storage';
import FullScreen from './src/Screen/FullScreen';

export default function App({ navigation }) {
  // const [token, setToken] = useState(null);
  // const [isLoading, setIsLoading] = useState(true);

  initialLoginState = {
    isLoading : true,
    userName : null,
    userToken : null,
  }

  const loginReducer = (prevState, action) => {
    switch( action.type ){
      case 'RETRIEVE_TOKEN':
        return {
          ...prevState,
          userToken : action.token,
          isLoading: false
        };
      case 'LOGIN':
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false
        }
      case 'LOGOUT':
        return {
        ...prevState,
        userName: null,
        userToken: null,
        isLoading: false
        }
      case 'REGISTER':
        return {
          ...prevState,
          userName : action.id,
          userToken: action.token,
          isLoading: false
        }
    }
  }

  const [loginState, dispatch] = useReducer(loginReducer, initialLoginState)

  const authContext = useMemo(() => ({
    signIn: async(userName, password) => {
      let userToken;
      userToken = null;
     if(userName == "Nunu" && password == "nunu07"){
       userToken = "r4nd0mt0k3n";
       try {
         await AsyncStorage.setItem('@userToken', userToken)
       } catch(e){
          console.log(e)
       }
     } else {
      ToastAndroid.showWithGravityAndOffset('Username and password yang anda masukan salah.',
      ToastAndroid.LONG,
      ToastAndroid.BOTTOM,
      25,
      50)
     }
     dispatch({ type: "LOGIN",  id: userName, token: userToken})
    },
    signOut: async() => {
      try {
        await AsyncStorage.removeItem('@userToken');
      } catch(e){
         console.log(e)
      }
      dispatch({ type: 'LOGOUT' })
    },
    signUp: () => {
      dispatch({ type: 'REGISTER', token: "jdjdj" })
    },
  }), []);

  useEffect(() => {
    setTimeout(async() => {
      let userToken;
      userToken = null;
      try {
        userToken = await AsyncStorage.getItem('@userToken')
      } catch(e){
         console.log(e)
      }
      dispatch({ type: 'REGISTER', token: userToken })
    }, 1000);
  }, []);

  if (loginState.isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator color="red" size="large" />
      </View>
    );
  }
  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        {loginState.userToken !== null ? (
          <FullScreen/>
        ) : (
          <RootStackScreen />
        )}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
