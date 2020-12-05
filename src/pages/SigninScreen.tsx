import React, { useState } from 'react';
import { Button, Dimensions, Image, StyleSheet, Text, TextInput, View } from 'react-native';
import Header from '../components/auth/Header';
import Footer from '../components/auth/Footer';

export default ({navigation}) => {
    const [showAlert, setShoeAlert] = useState(false);

  return(
    <View style={styles.container}>
        <Header title="Iniciar sesion" desc="Ingresa tu usuario y contraseña para poder utilizar el monedero digital">
            <Image style={styles.imgHeader} source={require('../../assets/img/icon-wallet.svg')}/>
        </Header>
        <View style={styles.body}>
            <View style={styles.form}>
                <View style={styles.inputField}>
                    <Image style={styles.icon} source={require('../../assets/img/user.svg')} />
                    <TextInput style={styles.input} placeholder="Ingresa tu usuario" placeholderTextColor="rgb(190, 190, 190)"/>
                </View>
                <View style={styles.inputField}>
                    <Image style={styles.icon} source={require('../../assets/img/lock.svg')} />
                    <TextInput style={styles.input} placeholder="Ingresa tu contraseña" placeholderTextColor="rgb(190, 190, 190)"/>
                </View>
                {
                    showAlert ? 
                    <Text style={styles.alert}>Credenciales no existen o son incorrectas!</Text>
                    :
                    <Text> </Text>
                }
                <View style={styles.btnSubmit}>
                    <Button title="ingresar" onPress={ () => setShoeAlert(true)}/>
                </View>
            </View>
        </View>
        <Footer desc="¿No tienes una cuenta?" btnTitle="Registrate" onPress={() => navigation.navigate('Signup')}/>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        alignItems: 'center',
        flex: 1,
        justifyContent: 'space-evenly',
        paddingHorizontal: 20
    },
    imgHeader: {
        width: Dimensions.get('window').width - 245,
        height: Dimensions.get('window').width - 245,
    },
    alert: {
        color: 'red',
        textAlign: 'center'
    },
    icon: {
        width: 25,
        height: 25,
    },
    body:{
        alignSelf: 'stretch'
    },
    form:{
        alignItems: 'center'
    },

    inputField: {
        flexDirection: 'row',
        height: 50,
        alignItems: 'center',
        marginBottom: 20,
        with: '80%'
    },
    input: {
        marginLeft: 20,
        borderBottomColor: '#b0b0b0',
        borderBottomWidth: 1,
        width: Dimensions.get('window').width - 100,
        paddingBottom: 10,
        fontSize: 16
    },
    btnSubmit: {
        width: 120,
        marginTop: 20,
    }
})