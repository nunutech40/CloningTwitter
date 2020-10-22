import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
const FooterLogin = (props) => {
  return (
    <View
      style={{
        borderTopColor: "rgba(104, 120, 135, 0.5)",
        borderTopWidth: 1,
        width: "100%",
        justifyContent: "center",
        alignItems: "flex-end",
        height: 50,
      }}
    >
      <TouchableOpacity
        style={{
          backgroundColor: props.backgroundColor,
          height: 30,
          borderRadius: 30 / 2,
          justifyContent: "center",
          marginRight: 15,
        }}
        onPress={props.onPress}
      >
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 16,
            color: "white",
            textAlign: "center",
            marginHorizontal: 15,
          }}
        >
          {props.txtButton}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default FooterLogin;