import { Text, View } from "react-native";

export function Header() {
  return (
    <View style={{ padding: 20, backgroundColor: "#f8f9fa" }}>
      <Text style={{ fontSize: 24, fontWeight: "bold" }}>Meu App</Text>
    </View>
  );
}