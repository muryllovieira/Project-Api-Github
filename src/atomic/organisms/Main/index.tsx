import { Text, View, StyleSheet } from "react-native";
import { SearchBar } from "../../molecules/SearchBar";

export function Main() {
    return (
        <View style={styles.container}>
            <Text style={styles.textLabel}>Main Screen</Text>
            <Text style={styles.textLabel}>Search Bar Component</Text>
            <SearchBar />
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent:'center',
        textAlign: "center",
        alignItems: 'center',
        gap: 5
    },
    textLabel: {
        fontSize: 20,
        fontWeight: "bold",
        color: "black",
    }
})