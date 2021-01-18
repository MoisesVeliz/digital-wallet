import React, { useState } from "react";
import {
  Button,
  StyleSheet,
  View,
} from "react-native";
import Footer from "../../components/auth/Footer";
import Header from "../../components/auth/Header";
import Input from "../../components/auth/Input";

export default ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <Header
        title="Registrarse"
        desc="Ingresa tus satos para crear tu cuenta"
        logoUrl={require("../../../assets/img/icon-wallet.png")}
      />
      <View style={styles.body}>
        <View style={styles.form}>
          <Input
            placeholder="Ingresa tu usuario"
            iconUrl={require("../../../assets/img/user.png")}
          />
          <Input
            placeholder="Ingresa tu contraseña"
            iconUrl={require("../../../assets/img/lock.png")}
          />
          <Input
            placeholder="Confirmar contraseña"
            iconUrl={require("../../../assets/img/lock.png")}
          />
          <View style={styles.btnSubmit}>
            <Button
              title="registrarse"
              onPress={() => navigation.navigate("Signin")}
            />
          </View>
        </View>
      </View>
      <Footer
        desc="¿Ya tienes una cuenta?"
        btnTitle="Iniciar sesion"
        onPress={() => navigation.navigate("Signin")}
      />
    </View>
  );
};

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
  link: {
    color: "#0000ff",
  },
  btnSubmit: {
    width: 120,
    marginTop: 20,
  },
});
