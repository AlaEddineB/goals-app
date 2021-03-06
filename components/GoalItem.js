import { StyleSheet, View, Text, Pressable } from "react-native";

function GoalItem(props) {
  return (
    <Pressable onPress={props.onDeleteItem}>
      <View style={styles.gaolitem}>
        <Text style={styles.goaltext}>{props.text}</Text>
      </View>
    </Pressable>
  );
}
export default GoalItem;

const styles = StyleSheet.create({
  gaolitem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  goaltext: {
    color: "white",
  },
});
