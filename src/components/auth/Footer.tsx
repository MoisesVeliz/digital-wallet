import React from 'react'
import { StyleSheet, Text, View, Pressable } from 'react-native'

export default ({btnTitle, desc, onPress}: {btnTitle: string, desc: string, onPress: any}) => {

    return(
        <View style={styles.footer}>
            <Text>{desc}</Text>
            <Pressable onPress={onPress}>
                <Text style={styles.link}>{btnTitle}</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    link: {
        color: '#0000ff'
    },
    footer:{
        alignItems: 'center'
    },
})