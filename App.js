import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  ScrollView,
  FlatList,
  View,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
} from "react-native";

import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";
import Header from "./components/Header";
import GoalListHeader from "./components/GoalListHeader";
import GoalModal from "./components/GoalModal";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isModalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    if (courseGoals.length === 5) {
      setModalVisible(true);
    }
  }, [courseGoals]);

  function addGoalHandler(enteredGoalText) {
    const goalId = Math.random().toString();

    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredGoalText, id: goalId },
    ]);

    if (courseGoals.length === 4) {
      setModalVisible(true);
    }
  }

  function closeModal() {
    setModalVisible(false);
  }

  function clearAllGoals() {
    setCourseGoals([]);
  }

  function deleteGoalHandler(goalId) {
    setCourseGoals((currentCourseGoals) =>
      currentCourseGoals.filter((goal) => goal.id !== goalId)
    );
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
            renderItem={(itemData) => (
              <GoalItem
                text={itemData.item.text}
                id={itemData.item.id}
                onDelete={deleteGoalHandler}
              />
            )}
          />
        </View>
        <StatusBar style="auto" />
        <GoalModal isVisible={isModalVisible} closeModal={closeModal} />
      </View>
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

  addButton: {
    backgroundColor: "rgb(28, 96, 125)",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    marginBottom: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
});
