import React, { useEffect, useState, useContext } from 'react'
import { StyleSheet, Text, View, Linking } from 'react-native'
import { TouchableHighlight } from 'react-native-gesture-handler';
import { set } from 'react-native-reanimated';
import { AuthContext } from '../../auth/Context';

const CellListAkun = ({ data, index, section }) => {
  const [custom, setCustom] = useState(false);
  const { signOut, toggleTheme } = useContext(AuthContext);

  useEffect(() => {
    if (data.custom !== undefined) {
      setCustom(data.custom);
    } else {
      setCustom(false);
    }
  }, []);

  const getlabel = () => {
    alert("get" + data.label);
  };

  return (
    <TouchableHighlight
      onPress={data.label == "Keluar" ? () => signOut() : () => getlabel()}
      underlayColor='#e7ecf0'
    >
    <View style={styles.container}>
      {data.oneLine ? (
       
          <Text
            style={{
              fontSize: 17,
              color: data.label == "Keluar" ? "red" : "black",
            }}
            
          >
            {data.label}
          </Text>
        
      ) : (
        <View
          style={{
            width: "100%",
            flex: 1,
            justifyContent: "center",
            alignItems: "flex-start",
          }}
        >
          <Text style={{ fontSize: 18 }}>{data.label}</Text>
          <Text style={{ color: "#687887", fontSize: 15 }}>{data.isi}</Text>
          {data.custom ? (
            <Text style={{ marginTop: 10 }}>
              {data.other}
              <Text
                style={{ color: "#2093da" }}
                onPress={() => Linking.openURL("https://help.twitter.com")}
              >
                {data.textLink}
              </Text>
            </Text>
          ) : (
            <View></View>
          )}
        </View>
      )}
    </View>
    </TouchableHighlight>
  );
};

export default CellListAkun

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        flex: 1,
        alignItems: "flex-start",
        paddingLeft: 15,
        paddingVertical: 12,
    }
})
