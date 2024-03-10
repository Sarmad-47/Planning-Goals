import { StyleSheet, View, ScrollView, FlatList,Button } from "react-native";
import { useState } from "react";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";
import { StatusBar } from "expo-status-bar";
const App = () => {
  const [modalIsVisible,setModalIsVisible]=useState(false);
  const [courseGoals, setCourseGoals] = useState([]);
  const addGoalHandler = (enteredGoalText) => {
    /**
     * Keeping the existing course goals  ...courseGoals
     * Adding the new goals.
     * new state depends upon the previous state.
     */

    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredGoalText, key: Math.random().toString() },
    ]);
    endGoalHandler();
  };

  const deleteGoalHandler = (key) => {
    setCourseGoals((currentCourseGoals) => {
      return currentCourseGoals.filter((goal) => goal.key !== key);
    });

  };

  const startAddGoalHandler=()=>{
    setModalIsVisible(true);
  }

  const endGoalHandler=()=>{
    setModalIsVisible(false);
  }

  return (
    <>
    <StatusBar style='light'/>
    <View style={styles.container}>
      <Button title='Add new Goal' color='#5e0acc' onPress={startAddGoalHandler}/>
   <GoalInput visible={modalIsVisible} onAddGoal={addGoalHandler} onCancel={endGoalHandler} />
      <View style={styles.goalsContainer}>
        {/* <ScrollView alwaysBounceVertical={false}>
          {courseGoals.map((goal) => (
            <Text key={goal} style={styles.goalItem}>
              {goal}
            </Text>
          ))}
        </ScrollView> */}

        <FlatList
          data={courseGoals}
          renderItem={(itemData) => {
            return (
              <GoalItem
                text={itemData.item.text}
                id={itemData.item.key}
                onDeleteItem={deleteGoalHandler}
              />
            );
          }}
        />
      </View>
    </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor:'#1e085a'
  },
  
  goalsContainer: {
    flex: 5,
  },
});

export default App;
