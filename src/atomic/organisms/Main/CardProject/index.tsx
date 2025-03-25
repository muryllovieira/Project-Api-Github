import { CardProjectProps } from "./props";
import { Card } from "@rneui/themed";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Linking } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { formatDate } from "../../../../utils/formatDate";

export function CardProject({
  name,
  description,
  created_at,
  html_url,
}: CardProjectProps) {
  return (
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
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    width: "100%",
    borderRadius: 16,
    padding: 4,
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  innerCard: {
    borderRadius: 16,
    backgroundColor: "#1C1C1E",
    padding: 16,
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
    marginBottom: 8,
  },
  date: {
    color: "#A1A1A1",
    fontSize: 12,
    textAlign: "center",
    alignSelf: "center",
    marginBottom: 8,
  },
  link: {
    color: "#FFD700",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 16,
  },
});
