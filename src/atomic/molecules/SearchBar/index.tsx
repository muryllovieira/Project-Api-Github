import { StyleSheet, View } from "react-native";
import { Button } from "../../atoms/Button";
import { Input } from "../../atoms/Input";
import { useState } from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../../routes/stack.routes";
import { useNavigation } from '@react-navigation/native'
import { loadRepositoryData } from "../CardProject/actions";
import { CardProjectProps } from "../CardProject/props";

type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList, "home">;
export function SearchBar() {

    const [text, setText] = useState("");
    const navigation = useNavigation<LoginScreenNavigationProp>();
    const [repositoryData, setRepositoryData] = useState<CardProjectProps[] | null>(null);


    const handleSearch = async () => {
        loadRepositoryData(text, setRepositoryData);
        navigation.navigate("projects", { username: text })

    }


    return (
        <View style={styles.container}>
            <Input value={text} onChangeText={setText} />
            <Button title="Buscar" onPress={() => { handleSearch() }} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center'
    }
})