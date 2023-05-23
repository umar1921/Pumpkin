import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";

import color from "../config/Colors";

const CustomInput = ({ lable, placeholder, password }) => {
  const [hidePassword, setHidePassword] = useState(password);
  return (
    <View style={styles.outerContainer}>
      <View style={styles.innerContainer}>
        <Text style={styles.lable}>{lable}</Text>
        <TextInput
          style={styles.input}
          underlineColorAndroid="transparent"
          placeholder={placeholder}
          placeholderTextColor={color.color_text_light}
          autoCapitalize="none"
          secureTextEntry={hidePassword}
        />
      </View>
    </View>
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  innerContainer: {
    marginVertical: 10,
  },
  lable: {
    paddingBottom: 5,
  },
  input: {
    height: 50,
    backgroundColor: color.grey_light,
    paddingLeft: 10,
    borderRadius: 10,
  },
});
