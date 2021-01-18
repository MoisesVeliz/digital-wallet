import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native';
import { connect } from 'react-redux';
import { signout } from '../redux/actions';

const HomeScreen = ({navigation, signout}: any) => {
    return(
        <View style={styles.container}>
            <Text>Hola home</Text>
            <Button title="cerrar sesion" onPress={ () => signout()}/>
        </View>
    )
}

const mapDispatchToProps = ( dispatch: any) => {
    return{
        signout: () => dispatch(signout())
    }
}

export default connect(null, mapDispatchToProps)(HomeScreen)

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})