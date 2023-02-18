import { Pressable, Text, View } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { styles } from "../useStyles";

function GoalList(props) {
    return (

        <View style={styles.goalView} >
            <Pressable
                android_ripple={{ color: '#ccc' }}
                onPress={props.onDelete.bind(this, props.id)}
                style={({ pressed }) => pressed && styles.iosPress}
            >
                <Text style={styles.goalText}>{props.item}</Text>
            </Pressable>
        </View>

    )
}

export default GoalList;