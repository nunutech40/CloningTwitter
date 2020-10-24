import React, {useContext} from 'react';
import {View, Text, StyleSheet, ScrollView, Image, TouchableOpacity} from 'react-native';
import { TextInput } from 'react-native-paper';
import HeaderMain from '../../auth/componen/HeaderMain';
import { AuthContext } from '../../auth/Context';


const HomeScreen = () => {
  const { signOut } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <View style={{ height: 60 }}>
        <HeaderMain
          Matery={
            <Image
              style={{ height: 27, width: 27 }}
              source={require("../../../assets/icontwitter.png")}
            />
          }
          Setting = {
            <Image
                    style={{height: 27, width: 27}}
                    source={require("../../../assets/poptwitter.png")}
                />
          }
        />
      </View >
          
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TouchableOpacity onPress={() => signOut()}>
            <Text>Log Out</Text>
          </TouchableOpacity>
      </View>
    </View>
  );
};
  
  export default HomeScreen;

  const styles = StyleSheet.create({
      container: {
        flex: 1,
      }
  })