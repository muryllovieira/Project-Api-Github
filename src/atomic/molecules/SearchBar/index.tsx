import { StyleSheet, View, Alert } from "react-native";
import { Button } from "../../atoms/Button";
import { Input } from "../../atoms/Input";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../../routes/stack.routes";
import { useNavigation } from "@react-navigation/native";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useEffect } from "react";

const schema = z.object({
    username: z.string().min(3, "O nome de usuário deve ter pelo menos 3 caracteres")
});

type FormData = z.infer<typeof schema>;

type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList, "home">;

export function SearchBar() {
    const navigation = useNavigation<LoginScreenNavigationProp>();

    const {
        control,
        handleSubmit,
        formState: { errors }
    } = useForm<FormData>({
        resolver: zodResolver(schema),
    });

    useEffect(() => {
        if (errors.username) {
            Alert.alert("Erro", errors.username.message);
        }
    }, [errors.username]);

    const handleSearch = async (data: FormData) => {
        try {
            const response = await fetch(`https://api.github.com/users/${data.username}`);
            const userData = await response.json();

            if (userData.message === "Not Found") {
                Alert.alert("Erro", "Usuário não encontrado.");
                return;
            }

            navigation.navigate("projects", { username: data.username });
        } catch (error) {
            Alert.alert("Erro", "Ocorreu um erro ao buscar os repositórios.");
        }
    };

    return (
        <View style={styles.container}>
            <Controller
                control={control}
                name="username"
                render={({ field }) => (
                    <Input value={field.value} onChangeText={field.onChange} />
                )}
            />
            <Button title="Buscar" onPress={handleSubmit(handleSearch)} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
        gap: 16
    }
});
