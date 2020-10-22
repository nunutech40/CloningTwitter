import React, {useState} from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity, KeyboardAvoidingViewComponent } from 'react-native'
import IconEt from "react-native-vector-icons/Entypo";

const InputAuth = (props) => {
  const isNull = () => {
    return props.isNull;
  };

  return (
    <View style={{ marginTop: 20 }}>
      <Text
        style={{
          color: "#687887",
          fontSize: 16,
          marginRight: 3,
        }}
      >
        {props.text}
      </Text>
      <TextInput
        style={styles.textinput}
        onChangeText={props.onChangeText}
        selectionColor="#1da1f3"
        secureTextEntry={props.secureTextEntry}
      />

      <TouchableOpacity
        style={{ right: 5, top: 40, position: "absolute" }}
        onPress={props.onPress}
      >
        
      </TouchableOpacity>
      {isNull() ? (
        <View style={styles.bottomBorder}></View>
      ) : (
        <View style={styles.bottomBorderBlue}></View>
      )}
      <Text></Text>
    </View>
  );
};

export default InputAuth

const styles = StyleSheet.create({
  textinput: {
    height: 33,
    width: "100%",
    marginTop: 6,
    fontSize: 18,
  },
  bottomBorder: {
    backgroundColor: "rgba(104, 120, 135, 0.5)",
    height: 0.9,
  },
  bottomBorderBlue: {
    backgroundColor: "#1da1f3",
    height: 2,
  },
});
