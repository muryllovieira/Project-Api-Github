import { Text, View, StyleSheet, Image } from "react-native";
import { SearchBar } from "../../molecules/SearchBar";
import { LinearGradient } from 'expo-linear-gradient'
const githubLogo = require('../../../../assets/github-mark.png');

export function Main() {

    return (
        <LinearGradient
            style={styles.container}
            colors={['#332332', '#A15EF2']}
             end={{ x: 0.9, y: 1.7 }}
        >
            <Text style={styles.textLabel}>Olá! Aqui faço a listagem de todos os seus projetos do Github</Text>
            <View style={styles.githubLogo}>
                <Image
                    source={githubLogo}
                    style={{ width: 100, height: 100 }}
                    resizeMode="contain"
                    tintColor={'white'}
                />
            </View>
            <Text style={styles.textLabel}>Digite abaixo o seu usuário do Github: </Text>
            <SearchBar />
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        textAlign: "center",
        alignItems: 'center',
        gap: 5,
    },
    textLabel: {
        fontSize: 20,
        fontWeight: "900",
        color: "white",
        justifyContent: 'center',
        textAlign: "center",
        padding: 20
    },
    githubLogo: {
        width: 100,
        height: 100,
    }
})