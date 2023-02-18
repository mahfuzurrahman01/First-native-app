import { useState } from "react";
import { Button, Image, Modal, TextInput, View } from "react-native";
import { styles } from "../useStyles";


function GoalInput(props) {
    const [enteredGoals, setEnteredGoals] = useState('')
    function inputGoal(enteredText) {
        setEnteredGoals(enteredText)
    }

    function onAddGoal() {
        props.addHandler(enteredGoals)
        setEnteredGoals("")
    }

   
    return (
        <Modal visible={props.visible} animationType={"slide"}>
            <View style={styles.inputContainer}>
                <Image style={styles.image} source={require('../assets/images/arrow.png')}/>
                <TextInput
                    style={styles.inputBox}
                    onChangeText={inputGoal}
                    placeholder='Enter your goal'
                    value={enteredGoals}
                />
                <View style={styles.buttonContainer}>
                <View style={styles.button}>
                        <Button
                            onPress={props.onCancel}
                            title='Cancel'
                            color="#e84747"
                        />
                    </View>
                    <View style={styles.button}>
                        <Button
                            onPress={onAddGoal}
                            title='Add Goal'
                            color="#daa520"
                        />
                    </View>
                   
                </View>
            </View>
        </Modal>
    )
}

export default GoalInput;