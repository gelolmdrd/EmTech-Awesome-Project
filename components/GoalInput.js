import { useState } from "react";
import { View, TextInput, Text, Pressable, StyleSheet } from "react-native";

function GoalInput(props) {
  const [enteredGoalText, setEnteredGoalText] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    // Set focus on the text input when the modal is closed
    if (!props.isVisible && isAppStarted.current) {
      inputRef.current.focus();
    }
  }, [props.isVisible]);

  const isAppStarted = useRef(false);

  useEffect(() => {
    // Set the app as started after initial render
    isAppStarted.current = true;
  }, []);

  function textInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    if (enteredGoalText.trim().length === 0) {
      return;
    }

    props.onAddGoal(enteredGoalText);

    // Clear the text input by resetting its value
    setEnteredGoalText("");
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        ref={inputRef}
        style={styles.inputText}
        placeholder="Your Course Goal"
        onChangeText={textInputHandler}
        value={enteredGoalText}
      />
      <Pressable
        onPress={addGoalHandler}
        style={({ pressed }) => [
          {
            backgroundColor: pressed
              ? "rgb(172, 217, 236)"
              : "rgb(28, 96, 125)",
          },
          styles.buttonStyle,
        ]}
      >
        <Text style={styles.buttonText}>Add Goal</Text>
      </Pressable>
    </View>
  );
}

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

  buttonStyle: {
    borderRadius: 246,
    padding: 6,
    height: 50,
    width: "30%",
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
  },

  buttonText: {
    fontSize: 16,
    color: "white",
  },
});

export default GoalInput;
