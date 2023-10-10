import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  ScrollView,
  FlatList,
  View,
  ImageBackground,
  Dimensions,
} from "react-native";

import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";
import Header from "./components/Header";
import GoalListHeader from "./components/GoalListHeader";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);

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

  function clearAllGoals() {
    setCourseGoals([]);
  }

  return (
    <ImageBackground
      source={require("./assets/bg-image.jpg")}
      style={styles.appBackground}
    >
      <View style={styles.appContainer}>
        <Header />
        <GoalInput onAddGoal={addGoalHandler} />
        <GoalListHeader onPress={clearAllGoals} />
        <View style={styles.goalListContainer}>
          <FlatList
            style={styles.goalContainer}
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

  appBackground: {
    position: "absolute",
    left: 0,
    top: 0,
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },

  goalListContainer: {
    maxHeight: "65%",
  },

  goalContainer: {
    paddingHorizontal: 25,
  },
});
