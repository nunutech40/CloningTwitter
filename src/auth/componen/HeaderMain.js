import React, {useState, useEffect} from 'react'
import { StyleSheet,
        Text,
        View,
        TouchableOpacity,
        Image } from 'react-native'


const HeaderMain = (props) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={{width: 80, height: '100%', justifyContent: 'center', alignItems: 'center'}}
                onPress={props.ppOnPress}
            >
            <Image
                    style={{height: 35, width:35, borderRadius: 25}}
                    source={require("../../../assets/potoprofile.jpg")}
                                                   
                />
            </TouchableOpacity>
            <View style={{justifyContent: 'center', flex: 1, alignItems: 'center'}}>
                {
                    props.Matery
                }
            </View>
            <TouchableOpacity style={{width: 50, height: '100%', justifyContent: 'center', alignItems: 'center'}}>
            {
                props.Setting
            }
            </TouchableOpacity>
        </View>
    )
}

export default HeaderMain;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'white',
        width: '100%',
        height: 60,
        borderBottomColor: 'rgba(104, 120, 135, 0.4)',
        borderBottomWidth: 0.5
        
    }
})
