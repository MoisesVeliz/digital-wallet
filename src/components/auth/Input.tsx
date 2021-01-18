import React from "react";
import { Dimensions, Image, StyleSheet, TextInput, View } from "react-native";

export default ({ placeholder, iconUrl, value, onChangeText, secureTextEntry }: {placeholder: string, iconUrl: any, value: string, onChangeText: any, secureTextEntry?: boolean | undefined}) => {
  return (
    <View style={styles.inputField}>
      <Image style={styles.icon} source={iconUrl} />
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor="rgb(190, 190, 190)"
        value={value}
        onChangeText={(text) => onChangeText(text)}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  icon: {
    width: 25,
    height: 25,
  },
  inputField: {
    flexDirection: "row",
    height: 50,
    alignItems: "center",
    marginBottom: 20,
    width: "80%",
    justifyContent: 'center'
  },
  input: {
    marginLeft: 20,
    borderBottomColor: "#b0b0b0",
    borderBottomWidth: 1,
    width: Dimensions.get("window").width - 100,
    paddingBottom: 10,
    fontSize: 16,
  },
});
