import React from 'react'
import { StyleSheet,
        Text,
        View,
        Image,
        TextInput } from 'react-native'
import HeaderMain from '../../auth/componen/HeaderMain';
import IconAD from 'react-native-vector-icons/AntDesign';

const SearchScreen = () => {
  return (
    <View style={styles.container}>
      <View style={{ height: 60 }}>
        <HeaderMain
          Matery={
            <TextInput
              style={{
                borderRadius: 40 / 2,
                borderColor: "rgba(104, 120, 135, 0.4)",
                borderWidth: 0.5,
                height: 30,
                backgroundColor: "#e6ebef",
                width: "100%",
                height: 40,
                paddingLeft: 20,
              }}
              placeholder="Cari di Twitter"
            />
          }
          Setting={<IconAD name="setting" color="#1ca1f2" size={27} />}
        />
      </View>

      <View style={{ flex: 1 }}></View>
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
      }
})
