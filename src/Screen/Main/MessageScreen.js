import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import HeaderMain from '../../auth/componen/HeaderMain';
import IconAD from 'react-native-vector-icons/AntDesign';

const MessageScreen = () => {
  return (
    <View>
      <View style={{ height: 60 }}>
        <HeaderMain
          Matery={
            <View style={{ width: "100%" }}>
              <Text
                style={{
                  fontWeight: "600",
                  fontSize: 20,
                  textAlign: "left",
                }}
              >
                Pesan
              </Text>
            </View>
          }
          Setting={<IconAD name="setting" color="#1ca1f2" size={27} />}
        />
      </View>

      <View style={{ flex: 1 }}></View>
    </View>
  );
};

export default MessageScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
      }
})
