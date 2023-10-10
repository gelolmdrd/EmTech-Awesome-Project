import { View, Text, StyleSheet } from "react-native";

function GoalItem(props) {
  return (
    <View style={styles.goalItems}>
      <Text style={styles.goalText}>{props.text}</Text>
    </View>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItems: {
    padding: 20,
    marginVertical: 5,
    borderRadius: 10,
    backgroundColor: "rgb(28, 96, 125)",
    color: "#fefefe",
    fontSize: 16,
    fontFamily: "Rubik_400Regular",
    textAlignVertical: "center",
  },

  goalText: {
    fontSize: 14,
    fontFamily: "Rubik_400Regular",
    justifyContent: "center",
    alignItems: "baseline",
    color: "rgb(224,224,224)",
  },
});
