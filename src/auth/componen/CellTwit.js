import React, {useState} from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import Moment from 'moment';
import IconMI  from 'react-native-vector-icons/MaterialIcons';
import IconE from 'react-native-vector-icons/EvilIcons';

const ActivityTwit = () => {
  return (
    <View
      style={{ flexDirection: "row", justifyContent: "space-between" }}
    ></View>
  );
};

const CellTwit = ({ item }) => {
  const [countRT, setCountRT] = useState(item.retwet)
  const [countLike, setCountLike] = useState(item.like)
  const [countReply, setCountReply] = useState(item.reply)

  const makeCountRT = () => {
    setCountRT(item.retwet += 1)
  }
  const makeCountLike = () => {
    setCountLike(item.like += 1)
  }
  const makeCountReply = () => {
    setCountReply(item.countReply += 1)
  }

  // useEffect(() => {
    
  // }, [countLike])

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
      <View style={{ flex: 1 }}>
        <View
          style={{
            flexDirection: "row",
            width: "100%",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "flex-start",
              paddingLeft: 12,
              flex: 1,
            }}
          >
            <Text style={{ fontWeight: "bold", fontSize: 16 }}>{item.name}</Text>
            <Text style={{ marginLeft: 2, fontSize: 16 }}>{item.userName}</Text>
            <Text numberOfLines={1} ellipsizeMode="middle">
              {Moment(item.timeMessage).format("HH")}
            </Text>
          </View>
          <View
            style={{
              width: "20%",
              marginRight: 5,
              flexDirection: "row",
              justifyContent: "flex-end",
            }}
          >
            <TouchableOpacity>
              <IconMI name="keyboard-arrow-down" color="#687887" size={27} />
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <Text style={{ marginRight: 30, marginLeft: 13, fontSize: 16 }}>
            {item.textMessage}
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginLeft: 13,
            marginTop: 15,
            
            alignItems: "center",
          }}
        >
           <View style={{flexDirection: 'row', justifyContent: 'flex-start', flex: 1}}>
            <IconE
              name="comment"
              color="#687887"
              size={22}
              onPress={() => alert("Cant reply")}
            />
             <Text style={{marginLeft: 7}}>
             {
              countReply !== 0 ?
              countReply : <View></View>
            }
             </Text>
            
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'flex-start', flex: 1}}>
            <IconE name="retweet" color="#687887" size={25}
              onPress={() => makeCountRT()}
            />
            <Text style={{marginLeft: 7}}>{
              countRT !== 0 ?
              countRT : <View></View>
            }</Text>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'flex-start', flex: 1}}>
            <IconE name="heart" color="#687887" size={22}
              onPress={() => makeCountLike()}
            />
        <Text style={{marginLeft: 7}}>{
              countLike !== 0 ?
              countLike : <View></View>
            }</Text>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'flex-start', flex: 1}}>
            <IconE name="share-google" color="#687887" size={23} />
          </View>
        </View>
      </View>
    </View>
  );
};

export default CellTwit

const styles = StyleSheet.create({})
