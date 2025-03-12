import { CardProjectProps } from "./props";
import { Card } from '@rneui/themed';
import { View, Text, StyleSheet} from "react-native";

export function CardProject({ title, description }: CardProjectProps) {
    return (
        <Card>
            <Card.Title>{title}</Card.Title>
            <Card.Divider />
                <Text style={styles.description}>{description}</Text>
        </Card>
    );
}

const styles = StyleSheet.create({
    description: {
        backgroundColor: 'purple',
        color: 'white'
    }
})