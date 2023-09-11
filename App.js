import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  FlatList,
  View,
  ImageBackground,
  Dimensions,
} from "react-native";
import {
  useFonts,
  Rubik_700Bold,
  Rubik_400Regular,
} from "@expo-google-fonts/rubik";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

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

  // Function to handle adding a new goal
  function addGoalHandler(enteredGoalText) {
    /* 
      Bad Programming Practice
      setCourseGoals([...courseGoals, enteredGoalText]);
    */
    // Update the courseGoals array by adding the enteredGoalText
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredGoalText, key: Math.random().toString() },
    ]);
  }

  return (
    <ImageBackground
      source={require("./assets/bg-image.jpg")}
      style={styles.appBackground}
    >
      <View style={styles.appContainer}>
        <Text style={styles.appTitle}>COURSE GOALS</Text>
        <GoalInput onAddGoal={addGoalHandler} />
        <View style={styles.goalListContainer}>
          <Text style={styles.goalsText}>List of Goals</Text>
          <FlatList
            data={courseGoals}
            renderItem={(itemData) => <GoalItem text={itemData.item.text} />}
          />
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

  goalListContainer: {
    flex: 1,
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
});
