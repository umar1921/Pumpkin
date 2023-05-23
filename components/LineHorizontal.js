import { StyleSheet, Text, View } from "react-native";
import React from "react";

import colors from "../config/Colors";

const LineHorizontal = () => {
  return (
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <View style={{ flex: 1, height: 1, backgroundColor: colors.grey_dark }} />
      <View>
        <Text
          style={{
            paddingHorizontal: 10,
            textAlign: "center",
            color: colors.color_text_dark,
          }}
        >
          Or continue with
        </Text>
      </View>
      <View style={{ flex: 1, height: 1, backgroundColor: colors.grey_dark }} />
    </View>
  );
};

export default LineHorizontal;
