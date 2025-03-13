import { CardProjectProps } from "./props";
import { Card } from '@rneui/themed';
import { View, Text, StyleSheet } from "react-native";
import { Linking } from "react-native";

function formatDate(dateString: string | undefined): string {
    if (!dateString) return "Data inválida"; 
    const date = new Date(dateString);
    
    if (isNaN(date.getTime())) return "Data inválida";

    return new Intl.DateTimeFormat("pt-BR", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
    }).format(date);
}

export function CardProject({ name, description, created_at, html_url }: CardProjectProps) {
    return (
        <Card containerStyle={styles.cardContainer}>
            <Card.Title style={styles.textTitle}>{name}</Card.Title>
            <Card.Divider />
            <Text style={styles.description}>{description}</Text>
            <Card.Divider />
            <Text style={styles.description}>Projeto criado em:  {formatDate(created_at)}</Text>
            <Card.Divider />
            <Text style={styles.description}>Link do projeto: 
                <Text
                    style={{ color: 'black', fontWeight: '900' }}
                    onPress={() => Linking.openURL(html_url)}>
                     {" "}Clique aqui
                </Text>
            </Text>
        </Card>
    );
}

const styles = StyleSheet.create({
    cardContainer: {
        borderRadius: 24,
    },
    description: {
        color: 'black',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
    },
    textTitle: {
        color: 'purple',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        paddingVertical: 10,
    }
})