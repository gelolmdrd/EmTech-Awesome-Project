import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ImageBackground,
  Dimensions,
} from "react-native";
import {
  useFonts,
  Rubik_700Bold,
  Rubik_400Regular,
} from "@expo-google-fonts/rubik";

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState("");
  const [courseGoals, setCourseGoals] = useState([]);

  let [fontsLoaded, fontError] = useFonts({
    Rubik_700Bold,
    Rubik_400Regular,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  // Function to handle changes in the goal input text
  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  // Function to handle adding a new goal
  function addGoalHandler() {
    /* 
      Bad Programming Practice
      setCourseGoals([...courseGoals, enteredGoalText]);
    */
    // Update the courseGoals array by adding the enteredGoalText
    setCourseGoals((currentCourseGoals) => [...courseGoals, enteredGoalText]);
    // Clear the text input by resetting its value
    setEnteredGoalText("");
  }

  return (
    <ImageBackground
      source={require("./assets/bg-image.jpg")}
      style={styles.appBackground}
    >
      <View style={styles.appContainer}>
        <Text style={styles.appTitle}>COURSE GOALS</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputText}
            placeholder="Your Course Goal"
            onChangeText={goalInputHandler}
            value={enteredGoalText}
          />
          <Button
            title="Add Goal"
            color="rgb(28, 96, 125)"
            onPress={addGoalHandler}
          />
        </View>
        <View style={styles.goalsContainer}>
          <Text style={styles.goalsText}>List of Goals</Text>
          {courseGoals.map((goal) => (
            <Text key={goal} style={styles.enteredGoalsText}>
              {goal}
            </Text>
          ))}
        </View>
      </View>
      <StatusBar style="auto" />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    margin: 25,
    flex: 1,
    alignContent: "center",
    backgroundColor: "rgba(245, 245, 245, 0.5)",
    height: "90%",
    borderRadius: 15,
  },

  appTitle: {
    fontFamily: "Rubik_700Bold",
    fontSize: 40,
    color: "rgb(28, 96, 125)",
  },

  appBackground: {
    position: "absolute",
    left: 0,
    top: 0,
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },

  inputContainer: {
    padding: 13,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 20,
    marginBottom: 20,
    borderWidth: 2,
    borderColor: "rgb(224,224,224)",
  },

  inputText: {
    flex: 1,
    borderWidth: 0,
    borderColor: "rgba(200, 200, 225, 0.5)",
    backgroundColor: "rgba(217, 232, 251, 0.5)",
    color: "#000000",
    width: "70%",
    marginRight: 8,
    padding: 13,
    justifyContent: "center",
    alignItems: "center",
  },

  goalsContainer: {
    flex: 5,
    paddingTop: 15,
    padding: 25,
    borderTopWidth: 2,
    borderColor: "rgb(224,224,224)",
  },

  goalsText: {
    fontSize: 22,
    paddingBottom: 5,
    fontFamily: "Rubik_400Regular",
    justifyContent: "center",
    alignItems: "baseline",
  },

  enteredGoalsText: {
    padding: 15,
    marginVertical: 5,
    borderRadius: 10,
    backgroundColor: "rgb(28, 96, 125)",
    color: "#fefefe",
    fontSize: 16,
    fontFamily: "Rubik_400Regular",
    height: "12%",
    textAlignVertical: "center",
  },
});
