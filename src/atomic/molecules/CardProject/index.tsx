import { CardProjectProps } from "./props";
import { Card } from '@rneui/themed';
import { View, Text, StyleSheet} from "react-native";

export function CardProject({ name, description }: CardProjectProps) {
    return (
        <Card containerStyle={styles.cardContainer}>
            <Card.Title>{name}</Card.Title>
            <Card.Divider />
                <Text style={styles.description}>{description}</Text>
        </Card>
    );
}

const styles = StyleSheet.create({
    cardContainer: {
        backgroundColor: 'green'
    },
    description: {
        backgroundColor: 'purple',
        color: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
    }
})