import { StyleSheet, View } from "react-native";
import { Button } from "../../atoms/Button";
import { Input } from "../../atoms/Input";
import { useState } from "react";

export function SearchBar() {

    const [text, setText] = useState("");

    return (
        <View style={styles.container}>
            <Input value={text} onChangeText={setText}/>
            <Button title="Buscar" onPress={() => console.log("API: ....")} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column', 
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center'
    }
})