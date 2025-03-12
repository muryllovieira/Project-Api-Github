import { View, StyleSheet } from "react-native";
import { CardProject } from "../../molecules/CardProject";

export function CardContainer(){
    return(
        <View style={styles.container}>
            <CardProject title="PROJETO" description="Descrição do projeto que vier da Api."/>
            <CardProject title="PROJETO" description="Descrição do projeto que vier da Api."/>
            <CardProject title="PROJETO" description="Descrição do projeto que vier da Api."/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap: 5,
        justifyContent: 'center',
    }
})