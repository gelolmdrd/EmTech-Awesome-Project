import { Text, StyleSheet } from "react-native";
import { useFonts, Rubik_700Bold } from "@expo-google-fonts/rubik";

function Header() {
  let [fontsLoaded, fontError] = useFonts({
    Rubik_700Bold,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return <Text style={styles.appTitle}>COURSE GOALS</Text>;
}

const styles = StyleSheet.create({
  appTitle: {
    fontFamily: "Rubik_700Bold",
    fontSize: 40,
    color: "rgb(28, 96, 125)",
  },
});

export default Header;
