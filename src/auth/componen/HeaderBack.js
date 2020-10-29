import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import { TextInput } from 'react-native-paper';
import IconMI from 'react-native-vector-icons/MaterialIcons';
import IconE from 'react-native-vector-icons/Entypo'

const HeaderBack = (props) => {

    const [hiden, setHiden] = useState(false)
    const [isMenu, setIsMenu] = useState(false)
    const [customHeader, setCustomHeader] = useState(false)

    useEffect(() => {
      setIsMenu(props.isMenu)
      setCustomHeader(props.customHeader)
    }, [])

    useEffect(() => {
       setHiden(props.hideDelete)
    }, [props.hideDelete])

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.container}>
        <TouchableOpacity
          style={{
            height: "100%",
            width: 80,
            justifyContent: "center",
            alignItems: "center",
          }}
          onPress={props.onPressBack}
        >
          <IconMI name="arrow-back" color="#1da1f3" size={25} />
        </TouchableOpacity>
        <View
          style={{
            justifyContent: "center",
            flex: 1,
            alignItems: "flex-start",
          }}
        >
          {!customHeader ?
          <Text style={{ fontSize: 17, fontWeight: "bold" }}>{props.textHeader}</Text>
          :
          props.CustomHeader}
        </View>
        <TouchableOpacity
          style={{
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
            marginRight: 12,
          }}
          onPress={props.onPressMenu}
        >
          {
            isMenu ? <IconE name="dots-three-vertical" color="#1da1f3" size={25} /> : <View></View>
          }
          
        </TouchableOpacity>
      </View>
      {
        hiden ? <TouchableOpacity style={styles.popUpDeleteMarkah}
        onPress={props.onPressHapusMarkah}
      >
        <Text style={{ fontSize: 16 }}>Hapus semua Markah</Text>
      </TouchableOpacity>
      :
      <View></View>
      }
      
      
    </View>
  );
};

export default HeaderBack;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'white',
        width: '100%',
        borderBottomColor: 'rgba(104, 120, 135, 0.4)',
        borderBottomWidth: 0.4,
        height: 60
    },
    popUpDeleteMarkah: {
        justifyContent: "center",
          alignItems: "center",
          paddingHorizontal: 15,
          position: "absolute",
          right: 5,
          height: "75%",
          bottom: 6,
          backgroundColor: 'white',
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
