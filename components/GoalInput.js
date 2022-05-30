import { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

function GoalInput(props) {
  const [entredGoalText, setEnteredGoalText] = useState("");
  function goalInputHandler(entredText) {
    setEnteredGoalText(entredText);
  }
  function addGoalHandler() {
    props.onAddGoal(entredGoalText);
    setEnteredGoalText("");
  }
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="Your course goal!!"
        onChangeText={goalInputHandler}
        value={entredGoalText}
      />
      <Button title="Add Goal" onPress={addGoalHandler} />
    </View>
  );
}
export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
    borderBottomWidth: 0.5,
    borderBottomColor: "red",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "70%",
    marginRight: 8,
    padding: 8,
    fontSize: 16,
  },
});
