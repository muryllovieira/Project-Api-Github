import React, { useEffect } from "react";
import { Text, View, StyleSheet, Image, Alert } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import {
  useSharedValue,
  withTiming,
  useAnimatedStyle,
  useAnimatedKeyboard,
} from "react-native-reanimated";
import Animated from "react-native-reanimated";
import { Button } from "../../atoms/Button";
import { Input } from "../../atoms/Input";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../../routes/stack.routes";
import { useNavigation } from "@react-navigation/native";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const githubLogo = require("../../../../assets/splash-icon.png");

const schema = z.object({
  username: z
    .string()
    .min(3, "O nome de usuário deve ter pelo menos 3 caracteres"),
});

type FormData = z.infer<typeof schema>;

type LoginScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "home"
>;

export function HomeTemplate() {
  const navigation = useNavigation<LoginScreenNavigationProp>();

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  useEffect(() => {
    if (errors.username) {
      Alert.alert("Erro", errors.username.message);
    }
  }, [errors.username]);

  const handleSearch = async (data: FormData) => {
    try {
      const response = await fetch(
        `https://api.github.com/users/${data.username}`
      );
      const userData = await response.json();

      if (userData.message === "Not Found") {
        Alert.alert("Erro", "Usuário não encontrado.");
        return;
      }

      navigation.navigate("projects", { username: data.username });
      reset();
    } catch (error) {
      Alert.alert("Erro", "Ocorreu um erro ao buscar os repositórios.");
    }
  };

  const opacity = useSharedValue(0);
  const translateY = useSharedValue(50);
  const scale = useSharedValue(1);
  const keyboard = useAnimatedKeyboard();

  useEffect(() => {
    opacity.value = withTiming(1, { duration: 1000 });
    translateY.value = withTiming(0, { duration: 800 });
    scale.value = withTiming(1.1, { duration: 1000 });
  }, []);

  const animatedContainerStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
    transform: [{ translateY: translateY.value }],
  }));

  const animatedLogoStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  const animatedKeyboardStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: -keyboard.height.value }],
  }));

  return (
    <Animated.View style={[styles.flexContainer, animatedKeyboardStyle]}>
      <LinearGradient
        style={styles.container}
        colors={["#332332", "#A15EF2"]}
        end={{ x: 0.9, y: 1.7 }}
      >
        <Animated.View style={animatedContainerStyle}>
          <Text style={styles.textLabel}>
            Olá! Aqui faço a listagem de todos os seus projetos do Github
          </Text>
          <Animated.View style={[styles.githubLogo, animatedLogoStyle]}>
            <Image
              source={githubLogo}
              style={{ width: 100, height: 100 }}
              resizeMode="contain"
              tintColor={"white"}
            />
          </Animated.View>
          <Text style={styles.textLabel}>
            Digite abaixo um nome de usuário do Github:
          </Text>
          <View style={styles.searchBar}>
            <Controller
              control={control}
              name="username"
              render={({ field }) => (
                <Input value={field.value} onChangeText={field.onChange} />
              )}
            />
            <Button title="Buscar" onPress={handleSubmit(handleSearch)} />
          </View>
        </Animated.View>
      </LinearGradient>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  flexContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
    padding: 32,
  },
  textLabel: {
    fontSize: 20,
    fontWeight: "900",
    color: "white",
    textAlign: "center",
    padding: 20,
  },
  githubLogo: {
    width: 100,
    height: 100,
    alignSelf: "center",
  },
  searchBar: {
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 12,
  },
});
