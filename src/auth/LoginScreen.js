import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect, useContext } from "react";
import IconAD from "react-native-vector-icons/AntDesign";
import IconEt from "react-native-vector-icons/Entypo";
import { StyleSheet,
          Text,
          View,
          Image,
          TouchableOpacity,
          ToastAndroid,
          ActivityIndicator  } from "react-native";
import TwitterHeading1 from "./componen/TwitterHeading1";
import InputAuth from "./componen/InputAuth";
import FooterLogin from "./componen/FooterLogin";
import { AuthContext } from "./Context"

const LoginScreen = ({navigation}) => {
  const [isNull1, setIsNull1] = useState(true);
  const [isNull2, setIsNull2] = useState(true);
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");
  const [isShowPass, setIsShowPass] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const { signIn } = useContext(AuthContext);

  handleChangeText1 = (text) => {
    setUsername(text)
  } 

  handleChangeText2 = (text) => {
    setPassword(text)
  } 

  handleOnPress = (isShowPass) => {
    setIsShowPass(!isShowPass)  
  }

  useEffect(() => {
    
  }, [])

  const onpressBtnLogin = (user, pass) => {
    signIn(user, pass);
  };

  return (
    <View style={{flex: 1}}>
      <View style={styles.container}>
        <StatusBar style="dark" />
        <HeaderLogin
          onPress={()=> navigation.goBack()}
        />
        <View style={{ width: "100%", flex: 1 }}>
          <TwitterHeading1 text="Masuk ke Twitter." />
          <InputAuth text="Ponsel, email, atau nama pengguna"
            onChangeText={this.handleChangeText1}
            isNull = {isNull1} 
            
          />
          <InputAuth text="Kata sandi"
            onChangeText={this.handleChangeText2}
            isNull = {isNull2} 
            secureTextEntry={true}
            onPress = {this.handleOnPress}
            />
          <TouchableOpacity>
            <Text
              style={{  
                color: "#687887",
                marginRight: 3,
                textAlign: "center",
                marginTop: 20,
              }}
            >
              Lupa kata sandi?
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      {
        (username && password) !== "" ?
        <FooterLogin backgroundColor="#1da1f3"
          txtButton="Masuk"
          onPress={()=> onpressBtnLogin(username, password)}
        />:
        <FooterLogin backgroundColor="rgba(29, 161, 243, 0.2)"
          txtButton="Masuk"
        />
      }
      
    </View>
  );
};



const HeaderLogin = (props) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
        height: 40,
        paddingHorizontal: 5
      }}
    >
      <TouchableOpacity
        onPress={props.onPress}
      >
        <IconAD name="arrowleft" size={22} color="#1da1f3" />
      </TouchableOpacity>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          width: "45%",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <TouchableOpacity>
            <Image
              style={styles.iconTwitter}
              source={require("../../assets/icontwitter.png")}
            />
          </TouchableOpacity>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              width: "50%",
            }}
          >
            <TouchableOpacity>
              <Text
                style={{ fontSize: 15, fontWeight: "bold", color: "#2093da" }}
              >
                Daftar
              </Text>
            </TouchableOpacity>
            <IconEt name="dots-three-vertical" size={22} color="#1da1f3" />
          </View>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  iconTwitter: {
    height: 25,
    width: 25,
  },
  typografi1: {
    marginTop: 10
  }
});
