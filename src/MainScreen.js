import React, {useEffect, useState, Component, useContext} from 'react';
import { StyleSheet,TextInput, Text, View, Modal } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { AuthContext } from './auth/Context';

const MainScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const { signOut } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <Text>Mainnn
        show pass: {username}
        show pass: {password}
      </Text>
      <TouchableOpacity onPress={() => signOut()}>
        <Text>Log Out</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 25
    },
    textInput: {
      height: 35,
      borderWidth: 1,
      width: '100%'
    }
})

export default MainScreen;