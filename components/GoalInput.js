import { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

function GoalInput(props) {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  // Function to handle changes in the goal input text
  function textInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    props.onAddGoal(enteredGoalText);

    // Clear the text input by resetting its value
    setEnteredGoalText("");
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.inputText}
        placeholder="Your Course Goal"
        onChangeText={textInputHandler}
        value={enteredGoalText}
      />
      <Button
        title="Add Goal"
        color="rgb(28, 96, 125)"
        onPress={addGoalHandler}
      />
    </View>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
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
});
