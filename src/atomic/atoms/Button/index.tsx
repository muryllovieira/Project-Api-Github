import { StyleSheet, TouchableOpacity, Text } from "react-native";
import { ButtonProps } from "./props";
import { LinearGradient } from 'expo-linear-gradient';


export function Button({ title, onPress }: ButtonProps) {
    return (
        <LinearGradient
            colors={['#fff', '#fff']}
            style={{ borderRadius: 5, }}
        >
            <TouchableOpacity style={styles.button} onPress={onPress}>
                <Text style={{ color: '#482E59' }}>{title}</Text>
            </TouchableOpacity>
        </LinearGradient>

    );
}

const styles = StyleSheet.create({
    button: {
        padding: 10,
        width: 100,
        alignItems: "center",
        justifyContent: "center",
        color: '#482E59',
    }
})