import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React, {useState, useEffect, useContext} from 'react'
import DateTimePicker from '@react-native-community/datetimepicker';
import { StyleSheet,
        Text,
        View,
        Image,
        TextInput,
        TouchableOpacity,
        Platform,
        Button,
        ScrollView } from 'react-native'
import IconAD from "react-native-vector-icons/AntDesign";
import FooterLogin from './componen/FooterLogin';
import { AuthContext } from './Context'

const BuatAkun = ({ navigation }) => {
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");
  const [text3, setText3] = useState("");
  const [maxUsername, setMaxUsername] = useState(50);

  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);
  const [stringDate, setStringDate] = useState('');
  const [focus, setFocus] = useState(false);
  const { signUp } = useContext(AuthContext);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode("date");
  };

  const showTimepicker = () => {
    showMode("time");
  };

  let dateValue = ""
  dateValue = date.getDate() + " " + (Bulan[date.getMonth()]) + " " + date.getFullYear()
  
  useEffect(() => {
    setMaxUsername(50 - text1.length);
    
  }, [text1]);

 return (
    <View style={{ flex: 1 }}>
      <View style={styles.container}>
        <StatusBar style="dark" />
        <HeaderLogin onPress={() => navigation.goBack()} />
        <View
          style={{ flex: 1, width: "100%", justifyContent: "space-between" }}
        >
          <Text
            style={{
              fontSize: 30,
              fontWeight: "bold",
              width: "100%",
              paddingLeft: 25,
              marginTop: 10,
            }}
          >
            Buat Akun
          </Text>
          <View>
            <TextInput
              style={styles.textinput}
              selectionColor="#1da1f3"
              placeholder="Nama"
              placeholderTextColor="#687887"
              onChangeText={(text) => setText1(text)}
              maxLength={50}
              autoFocus={focus}
            />
            {text1 === "" ? (
              <View style={styles.bottomBorder}></View>
            ) : (
              <View style={styles.bottomBorderBlue}></View>
            )}
            <Text
              style={{
                width: "100%",
                textAlign: "right",
                fontSize: 16,
                marginTop: 10,
              }}
            >
              {maxUsername}
            </Text>
            <TextInput
              style={styles.textInput2}
              selectionColor="#1da1f3"
              placeholder="Telepon atau alamat email"
              placeholderTextColor="#687887"
              onChangeText={(text) => setText2(text)}
              maxLength={15}
              dataDetectorTypes="phoneNumber"
              keyboardType="number-pad"
              
            />
            {text2 === "" ? (
              <View style={styles.bottomBorder}></View>
            ) : (
              <View style={styles.bottomBorderBlue}></View>
            )}
            <TouchableOpacity onPress={showDatepicker}>
              <TextInput
                style={styles.textInput3}
                selectionColor="#1da1f3"
                placeholder="Tanggal lahir"
                placeholderTextColor="#687887"
                onChangeText = {(text) => setText3("True")}
                maxLength={50}
                editable={false}
                value={dateValue}
              />
            </TouchableOpacity>
            {text3 === "" ? (
              <View style={styles.bottomBorder}></View>
            ) : (
              <View style={styles.bottomBorderBlue}></View>
            )}
          </View>
          <View style={{ width: "100%" }}>
            {show && (
              <DateTimePicker
                testID="dateTimePicker"
                value={date}
                mode={mode}
                is24Hour={true}
                display="spinner"
                onChange={onChange}
              />
            )
              
            }
          </View>
        </View>
      </View>
      {(text1 && text2 && dateValue) !== "" ? (
        <FooterLogin backgroundColor="#1da1f3"
        txtButton="Lanjut"
        onPress={()=> signUp()}
        />
      ) : (
        <FooterLogin
          backgroundColor="rgba(29, 161, 243, 0.2)"
          txtButton="Lanjut"
        />
      )}
    </View>
  );
};

const Bulan = ['Januari',
              'Februari',
              'Maret',
              'April',
              'Mei',
              'Juni',
              'Juli',
              'Agustus',
              'September',
              'Oktober',
              'November',
              'Desember']

const BottomBorder = (props) => {
  const [text1, setText1] = useState('')

  useEffect(() => {
    setText1(props.text);
  }, [text1])

  return (
    text1 === "" ? (
      <View style={styles.bottomBorder}></View>
    ) : (
      
      <View style={styles.bottomBorderBlue}></View>
    )
  )
}

const HeaderLogin = (props) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
        height: 40,
        paddingHorizontal: 5,
      }}
    >
      <TouchableOpacity onPress={props.onPress}>
        <IconAD name="arrowleft" size={22} color="#1da1f3" />
      </TouchableOpacity>
      <Image
        style={styles.iconTwitter}
        source={require("../../assets/icontwitter.png")}
      />
      <View></View>
    </View>
  );
};
export default BuatAkun

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        paddingTop: 40,
        paddingHorizontal: 20,
      },
      iconTwitter: {
        width: 30,
        height: 30,
      },
      textinput: {
        height: 33,
        width: "100%",
        marginTop: 6,
        fontSize: 18,
      },
      textInput2: {
        height: 33,
        width: "100%",
        marginTop: 26,
        fontSize: 18,
      },
      textInput3: {
        height: 33,
        width: "100%",
        marginTop: 20,
        fontSize: 18,
      },
      bottomBorder: {
        backgroundColor: "rgba(104, 120, 135, 0.5)",
        height: 0.9,
        width: '100%'
      },
      bottomBorderBlue: {
        backgroundColor: "#1da1f3",
        width: '100%',
        height: 2,
      },
})
