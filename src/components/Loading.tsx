import React from 'react';
import { View, Modal, ActivityIndicator, StyleSheet, Text } from 'react-native';

export default ({visible}: {visible: boolean}) => {
    return(
      <Modal visible={visible} transparent={true} style={styles.modal}>
        <View style={styles.modal}>
          <ActivityIndicator size="large" color="#0000ff" />
            <Text style={styles.title}>Loading...</Text>
        </View>
      </Modal>
    )
}

const styles = StyleSheet.create({
    modal:{
        backgroundColor: 'rgba(0,0,0,.8)',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title:{
        color: '#fff',
        fontWeight: 'bold',
        marginTop: 10
    }
})