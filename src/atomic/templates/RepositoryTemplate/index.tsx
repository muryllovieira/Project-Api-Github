import { View, StyleSheet } from "react-native";
import { CardContainer } from "../../organisms/CardContainer";
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from "../../../routes/stack.routes";
import { LinearGradient } from 'expo-linear-gradient'

type RepositoryTemplateRouteProp = RouteProp<RootStackParamList, 'projects'>;
export function RepositoryTemplate({ route }: { route: RepositoryTemplateRouteProp }) {
  const { username } = route.params;
  return (
    <LinearGradient
    style={styles.container}
    colors={['#332332', '#A15EF2']}
     end={{ x: 0.9, y: 1.7 }}
    >
      <CardContainer username={username} />
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
  }
})

