import { TextInput, View, StyleSheet } from "react-native";
import { InputProps } from "./props";
import { useState } from "react";

export function Input({ value, onChangeText }: InputProps) {

    return (
        <View>
            <TextInput
                style={styles.input}
                value={value}
                onChangeText={onChangeText}
                placeholder="Digite seu username do github"
                placeholderTextColor={'white'}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        borderColor: 'white',
        borderWidth: 2,
        paddingHorizontal: 10,
        marginBottom: 10,
        borderRadius: 5,
        color: 'white',
        width: 215
    }
})