import { View, Text, StyleSheet, Pressable } from "react-native";
import { useFonts, Rubik_400Regular } from "@expo-google-fonts/rubik";

function GoalListHeader({ onPress }) {
  let [fontsLoaded, fontError] = useFonts({
    Rubik_400Regular,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <View style={styles.Container}>
      <Text style={styles.goalsText}>List of Goals</Text>
      <Pressable
        onPress={onPress}
        style={({ pressed }) => [
          {
            backgroundColor: pressed
              ? 'color="rgb(172, 217, 236)'
              : 'color="rgb(28, 96, 125)',
          },
          styles.buttonStyle,
        ]}
      >
        <Text style={styles.buttonText}>Clear</Text>
      </Pressable>
    </View>
  );
}
export default GoalListHeader;

const styles = StyleSheet.create({
  Container: {
    flex: 2,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    maxHeight: "10%",
    paddingTop: 15,
    borderTopWidth: 2,
    borderColor: "rgb(224,224,224)",
  },

  goalsText: {
    fontSize: 24,
    paddingBottom: 5,
    fontFamily: "Rubik_400Regular",
    justifyContent: "center",
    alignItems: "baseline",
  },

  buttonStyle: {
    borderRadius: 246,
    padding: 6,
    height: 40,
    width: "20%",
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
  },

  buttonText: {
    fontSize: 16,
    color: "white",
  },
});
