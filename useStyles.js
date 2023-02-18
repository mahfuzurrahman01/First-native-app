import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        justifyContent: "center",
        marginTop: 50,
        flex: 1,
    },
    inputContainer: {
        flex: 1,
        paddingTop: 1,
        paddingHorizontal: 20,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        borderBottomWidth: 1,
backgroundColor:"darkslategrey",
    },
    inputBox: {
        borderWidth: 2,
        borderTopColor: "#e84747",
        borderRightColor: "#daa520",
        borderBottomColor: "#daa520",
        borderLeftColor: "#e84747",
        paddingLeft: 8,
        padding: 2,
        borderRadius: 3,
        width: "100%",
        backgroundColor: "gainsboro"
    },
    goalContainer: {
        flex: 1,
        marginTop: 5,
        paddingHorizontal: 20,
        borderTopWidth: 1,
        borderTopColor: "#cccccc",
        paddingTop: 20,

    },
    goalView: {
        margin: 8,
        borderRadius: 6,
        backgroundColor: "#899",
    },
    goalText: {
        color: "white",
        padding: 8,
        borderRadius: 6,
    },
    //IOS TEXT STYLE on pressed it will be shown in Ios device 
    iosPress: {
        backgroundColor: '#ccd',
        color: "black",
    },

    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 16,
    },

    button: {
        width: 100,
        marginHorizontal: 8,
    },
    image: {
        width: 130,
        height: 110,
        margin: 20,
    },
    addButton:{
        marginHorizontal: 16,
    }
});