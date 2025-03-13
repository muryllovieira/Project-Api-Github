import { StyleSheet, View, Alert } from "react-native";
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

        if (text.trim() === "") {
            Alert.alert("Erro", "Por favor, insira um nome de usuário.");
            return;
        }
    
        try {
            const response = await fetch(`https://api.github.com/users/${text}`);
            const data = await response.json();
            
            if(data.status == '404') {
                Alert.alert("Erro", "Usuário não encontrado.");
                return;
            } else {
                navigation.navigate("projects", { username: text })
                // setRepositoryData(data.repositories);
                // Alert.alert('Repositórios carregados com sucesso')
            }

        } catch (error) {
            Alert.alert("Erro", "Ocorreu um erro ao buscar os repositórios.");
        }

        // loadRepositoryData(text, setRepositoryData);
        // if (loadRepositoryData == null) {
        //     Alert.alert('Usuário invalido')
        // } else {
        //     navigation.navigate("projects", { username: text })
        // }

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