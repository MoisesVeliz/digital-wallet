import React from 'react'
import { StyleSheet, Text, View, Dimensions } from 'react-native';

export default ({title, desc, children}) =>{

    return(
    <View style={styles.header}>
        <Text style={styles.titleH1}>{title}</Text>
        <View  style={styles.imgHeaderContainer}>
            {children}
        </View>
        <Text style={styles.desc}>{desc}</Text>
    </View>
    )
}

const styles = StyleSheet.create({
    titleH1:{
        fontSize: 30,
        fontWeight: '600'
    },
    imgHeaderContainer:{
        paddingVertical: 15
    },
    imgHeader: {
        width: Dimensions.get('window').width - 245,
        height: Dimensions.get('window').width - 245,
    },
    desc:{
        textAlign: 'center',
        fontSize: 17
    },
    header: {
        alignItems: 'center',
        
    }
})