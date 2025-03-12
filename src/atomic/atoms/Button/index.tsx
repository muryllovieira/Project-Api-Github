import { StyleSheet, TouchableOpacity , Text} from "react-native";
import { ButtonProps } from "./props";

export function Button({title, onPress}: ButtonProps){
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: "#4CAF50",
        padding: 10,
        borderRadius: 5,
        width: 100,
        alignItems: "center",
        justifyContent: "center"
    }
})