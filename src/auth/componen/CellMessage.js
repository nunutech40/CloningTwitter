import React, {useState} from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import Moment from 'moment';

const CellMessage = ({ item }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        paddingLeft: 12,
        paddingVertical: 15,
        borderBottomWidth: 0.4,
        borderBottomColor: "#687887",
      }}
    >
      <Image
        style={{ width: 55, height: 55, borderRadius: 55 / 2 }}
        source={item.userPP}
      />
      <View style={{flex: 1}}>
        <View
          style={{
            flexDirection: "row",
            width: '100%',
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "flex-start",
              paddingLeft: 12,
              flex: 1
            }}
          >
            <Text style={{ fontWeight: "bold" }}>{item.name}</Text>
            <Text style={{ marginLeft: 2 }}>{item.userName}</Text>
          </View>
          <View style={{width:'20%', marginRight: 5, flexDirection: 'row', justifyContent: 'flex-end'}}>
          <Text numberOfLines={1} ellipsizeMode="middle">
            {Moment(item.dateMessage).format("D MMM")}
          </Text>
          </View>
          
        </View>
        <View>
          <Text style={{ marginRight: 30, marginLeft: 13, fontSize: 16 }}>
            {item.textMessage}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default CellMessage

const styles = StyleSheet.create({})
