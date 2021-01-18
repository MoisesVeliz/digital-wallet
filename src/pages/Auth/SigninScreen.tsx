import React, { useEffect, useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import Header from "../../components/auth/Header";
import Footer from "../../components/auth/Footer";
import Input from "../../components/auth/Input";
import { connect } from "react-redux";
import { login } from '../../redux/thunk';
import Loading from "../../components/Loading";



const SigninSreen = ({navigation, signin, auth}: any) => {

  const [showAlert, setShoeAlert] = useState(false);
  const [userName, setUserName] = useState('moises');
  const [password, setPassword] = useState('1234');

  return (
    <View style={styles.container}>
      <Header
        title="Iniciar sesion"
        desc="Ingresa tu usuario y contraseña para poder utilizar el monedero digital"
        logoUrl={require("../../../assets/img/icon-wallet.png")}
      />
      
      <View style={styles.body}>
        <View style={styles.form}>
          <Input
            placeholder="Ingresa usuario"
            iconUrl={require("../../../assets/img/user.png")}
            value={userName}
            onChangeText={(text: string) => setUserName(text)}
          />
          <Input
            placeholder="Ingresa tu contraseña"
            iconUrl={require("../../../assets/img/lock.png")}
            value={password}
            onChangeText={(text: string) => setPassword(text)}
            secureTextEntry={true}
          />
          {auth.showAlert
            ? <Text style={styles.alert}>{auth.msgError}</Text>
            : <Text> </Text>}
          <View style={styles.btnSubmit}>
            <Button title="ingresar" onPress={() => signin({user: userName, password: password})} />
          </View>
        </View>
      </View>
      <Footer
        desc="¿No tienes una cuenta?"
        btnTitle="Registrate"
        onPress={() => navigation.navigate("Signup")}
      />
      <Loading visible={auth.isLoading}/>
    </View>
  );
};

const mapStateToProps = (state: object) => {
  console.log(state);
  
  return state
}

const mapDispatchToProps = ( dispatch: any ): {signin: any} => {
  return {
    signin: (props: {userName: string, password: string}) => dispatch(login(props))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SigninSreen)

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    justifyContent: "space-evenly",
    paddingHorizontal: 20,
  },
  alert: {
    color: "red",
    textAlign: "center",
  },
  body: {
    alignSelf: "stretch",
  },
  form: {
    alignItems: "center",
  },
  btnSubmit: {
    width: 120,
    marginTop: 20,
  },
});
