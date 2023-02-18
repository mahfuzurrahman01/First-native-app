import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, View, Alert, ScrollView, FlatList } from 'react-native';
import { styles } from './useStyles';
import GoalList from './Components/GoalList';
import GoalInput from './Components/GoalInput';

export default function App() {
  const [goals, setGoals] = useState([])
  const [modalIsVisible, setModalIsVisible] = useState(false)
  function addGoal(enteredGoals) {
    if (enteredGoals === "") {
      alert("Please input something")
      return
    }
    setGoals((previousGoal) => [...previousGoal, { text: enteredGoals, id: Math.random().toString() }])
    endModal()
  }
  //delete handle
  function deleteHandle(id) {
    console.log("cliked")
    setGoals((currentGoals) => currentGoals.filter(goal => goal.id !== id))
  }

  function addNewGoal() {
    setModalIsVisible(true)
  }

  // on cancel button this function will work
  function endModal() {
    setModalIsVisible(false)
  }


  return (
    <>
      <StatusBar style='light'/>
      <View style={styles.container}>
        <View style={styles.addButton}>
          <Button title="Add new goal" onPress={addNewGoal} color="green" />
        </View>
        <GoalInput addHandler={addGoal} visible={modalIsVisible} onCancel={endModal} />
        <View style={styles.goalContainer}>
          <FlatList data={goals} renderItem={(itemData) => {
            return <GoalList
              item={itemData.item.text}
              id={itemData.item.id}
              onDelete={deleteHandle}
            />
          }}
            keyExtractor={(item, index) => {
              return item.id;
            }}
          />
        </View>
      </View>
    </>
  );
}




