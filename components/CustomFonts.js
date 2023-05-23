import { useFonts } from "expo-font";

const CustomFonts = () => {
  return useFonts({
    Roboto_regular: require("../assets/fonts/Roboto-Regular.ttf"),
    Roboto_medium: require("../assets/fonts/Roboto-Medium.ttf"),
    Roboto_mediumItalic: require("../assets/fonts/Roboto-MediumItalic.ttf"),
    Roboto_boldIalic: require("../assets/fonts/Roboto-BoldItalic.ttf"),
    Roboto_light: require("../assets/fonts/Roboto-Light.ttf"),
  });
};
export default CustomFonts;
