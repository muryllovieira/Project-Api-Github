import { View } from "react-native";
import { CardContainer } from "../../organisms/CardContainer";
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from "../../../routes/stack.routes";

type RepositoryTemplateRouteProp = RouteProp<RootStackParamList, 'projects'>;
export function RepositoryTemplate({ route }: { route: RepositoryTemplateRouteProp } ) {
  const { username } = route.params; 
  return (
    <View style={{ flex: 1 }}>
      <CardContainer username={username} />
    </View>
  );
}