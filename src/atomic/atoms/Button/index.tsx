import { StyleSheet, TouchableOpacity, Text } from "react-native";
import { ButtonProps } from "./props";
import { LinearGradient } from 'expo-linear-gradient';


export function Button({ title, onPress }: ButtonProps) {
    return (
        <LinearGradient
            style={styles.button}
            colors={['#632D84', '#482E59']}
        >
            <TouchableOpacity onPress={onPress}>
                <Text style={{color: 'white'}}>{title}</Text>
            </TouchableOpacity>
        </LinearGradient>

    );
}

const styles = StyleSheet.create({
    button: {
        padding: 10,
        borderRadius: 5,

        width: 100,
        alignItems: "center",
        justifyContent: "center",
        color: 'white',
        
    }
})