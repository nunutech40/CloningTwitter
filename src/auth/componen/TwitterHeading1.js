import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const TwitterHeading1 = (props) => {
    return <Text style={styles.heading1}>{props.text}</Text>
}

export default TwitterHeading1;

const styles = StyleSheet.create({
    heading1: {
        color: 'black',
        fontSize: 23,
        fontWeight: 'bold',
        
    }
})
