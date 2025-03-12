import { View } from "react-native";
import { Header } from "../../organisms/Header";
import { Main } from "../../organisms/Main";

export function HomeTemplate() {
  return (
    <View style={{ flex: 1 }}>
      <Header />
      <Main />
    </View>
  );
}