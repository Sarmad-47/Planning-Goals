import { StyleSheet, Text, Pressable } from "react-native";

const GoalItem = (props) => {
  /**
   * Using bind:
   * this keyword
   * next its id.
   * we use it to delete an item. Another way for deleting it.
   */

  return (
    <Pressable
      android_ripple={{ color: "#dddddd" }}
      onPress={props.onDeleteItem.bind(this, props.id)}
    >
      <Text style={styles.goalItem}>{props.text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
    color: "white",
  },
});

export default GoalItem;
