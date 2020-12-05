import React, { useState } from 'react';
import { Button, Dimensions, ImageBackground, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

export default function LoginScreen(){
    const [showAlert, setShoeAlert] = useState(false);

  return(
    <View style={styles.container}>
        <View style={styles.header}>
            <Text style={styles.titleH1}>Iniciar Sesión</Text>
            <View  style={styles.imgHeaderContainer}>
                <ImageBackground style={styles.imgHeader} source={require('../../assets/img/icon-wallet.svg')}/>
            </View>
            <Text style={styles.desc}>Ingresa tu usuario y contraseña para poder utilizar el monedero digital</Text>
        </View>
        <View style={styles.body}>
            <View style={styles.form}>
                <View style={styles.inputField}>
                    <ImageBackground style={styles.icon} source={require('../../assets/img/user.svg')} />
                    <TextInput style={styles.input} placeholder="Ingresa tu usuario" placeholderTextColor="rgb(190, 190, 190)"/>
                </View>
                <View style={styles.inputField}>
                    <ImageBackground style={styles.icon} source={require('../../assets/img/lock.svg')} />
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
        <View style={styles.footer}>
            <Text>¿No tienes una cuenta?</Text>
            <Pressable>
                <Text style={styles.link}>Registrarse</Text>
            </Pressable>
        </View>
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
    alert: {
        color: 'red',
        textAlign: 'center'
    },
    icon: {
        width: 25,
        height: 25,
    },
    header: {
        alignItems: 'center',
        
    },
    body:{
        alignSelf: 'stretch'
    },
    footer:{
        alignItems: 'center'
    },
    form:{
        alignItems: 'center'
    },
    link: {
        color: '#0000ff'
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