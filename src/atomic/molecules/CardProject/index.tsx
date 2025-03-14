import { CardProjectProps } from "./props";
import { Card } from '@rneui/themed';
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Linking } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

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
        <LinearGradient
            colors={['#6C3483', '#A15EF2']}
            style={styles.cardContainer}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
        >
            <Card containerStyle={styles.innerCard}>
                <Card.Title style={styles.textTitle}>{name}</Card.Title>
                <Card.Divider />
                <Text style={styles.description}>{description}</Text>
                <Card.Divider />
                <Text style={styles.date}>Criado em: {formatDate(created_at)}</Text>
                <Card.Divider />
                <TouchableOpacity onPress={() => Linking.openURL(html_url)}>
                    <Text style={styles.link}>🔗 Ver Projeto</Text>
                </TouchableOpacity>
            </Card>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    cardContainer: {
        borderRadius: 16,
        margin: 10,
        padding: 2,
        elevation: 4, 
        shadowColor: "#000", 
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
    },
    innerCard: {
        borderRadius: 16,
        backgroundColor: "#1C1C1E",
        padding: 15,
        marginBottom: 15,
    },
    textTitle: {
        color: "#F8F8F8",
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
    },
    description: {
        color: "#E0E0E0",
        textAlign: "center",
        fontSize: 14,
        marginBottom: 10,
    },
    date: {
        color: "#A1A1A1",
        fontSize: 12,
        textAlign: "center",
    },
    link: {
        color: "#FFD700",
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 16,
    }
});
