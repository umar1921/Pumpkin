import { Dimensions, Image, Text, View, StyleSheet } from "react-native";
import React, { useState } from "react";
import AppIntroSlider from "react-native-app-intro-slider";

import Screen from "../components/Screen";

const slides = [
  {
    id: 0,
    title: "Track your\nPumpkin Growth",
    text: "Lorem ipsum dolor sit amet consectetur. Ac pellentesque convallis sagittis justo.",
    image: require("../assets/images/intro1.png"),
  },
  {
    id: 1,
    title: "Track your\nPumpkin Growth",
    text: "Lorem ipsum dolor sit amet consectetur. Ac pellentesque convallis sagittis justo.",
    image: require("../assets/images/intro2.png"),
  },
  {
    id: 2,
    title: "Track your\nPumpkin Growth",
    text: "Lorem ipsum dolor sit amet consectetur. Ac pellentesque convallis sagittis justo.",
    image: require("../assets/images/intro3.png"),
  },
];

const IntroSlider = ({ navigation }) => {
  //   const [showHome, setShowHome] = useState(false);

  _renderItem = ({ item }) => {
    return (
      <Screen>
        <View style={{ backgroundColor: "#fff" }}>
          <Image
            source={item.image}
            style={{
              resizeMode: "contain",
              width: Dimensions.get("window").width,
              height: Dimensions.get("window").height / 2,
            }}
          />
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.text}>{item.text}</Text>
        </View>
      </Screen>
    );
  };
  return (
    <AppIntroSlider
      style={{ backgroundColor: "#fff" }}
      renderItem={_renderItem}
      data={slides}
      dotStyle={{
        backgroundColor: "rgba(0, 0, 0, .3)",
        marginBottom: "50%",
      }}
      activeDotStyle={{
        backgroundColor: "#F77E20",
        marginBottom: "50%",
      }}
      bottomButton={true}
      onDone={() => navigation.navigate("signIn")}
    />
  );
};

export default IntroSlider;

const styles = StyleSheet.create({
  title: {
    textAlign: "center",
    fontSize: 24,
    fontWeight: 700,
    alignSelf: "center",
    paddingTop: 20,
  },
  text: {
    textAlign: "center",
    width: "80%",
    alignSelf: "center",
  },
});
