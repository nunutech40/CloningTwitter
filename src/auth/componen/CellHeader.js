import React, {useState} from 'react'
import { StyleSheet, Text, View } from 'react-native'

const CellHeader = ({tittle, height}) => {
    return (
        <View style={[styles.container, {paddingTop: height}]}>
           <Text style={{color: '#657686', fontSize: 18, fontWeight: 'bold'}}>{tittle}</Text>
        </View>
    )
}

export default CellHeader

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        flex: 1,
        alignItems: "flex-start",
        paddingLeft: 15,
        paddingVertical: 15,
        backgroundColor: '#e7ecf0'
    }
})
