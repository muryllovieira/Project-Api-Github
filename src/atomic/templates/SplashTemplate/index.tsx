import React, { useEffect } from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import {
  useSharedValue,
  withTiming,
  useAnimatedStyle
} from "react-native-reanimated";
import Animated from "react-native-reanimated";
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../../routes/stack.routes";

const githubLogo = require("../../../../assets/github-mark.png");
type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList, "home">;
export function SplashTemplate() {
  const navigation = useNavigation<LoginScreenNavigationProp>();
  const opacity = useSharedValue(0);
  const translateY = useSharedValue(50);
  const scale = useSharedValue(1);

  useEffect(() => {
    
    opacity.value = withTiming(1, { duration: 1000 });
    translateY.value = withTiming(0, { duration: 800 });
    scale.value = withTiming(1.1, { duration: 1000 });

    setTimeout(() => {
      navigation.navigate('home'); 
    }, 2000); 
  }, []);

  const animatedContainerStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
    transform: [{ translateY: translateY.value }],
  }));

  const animatedLogoStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  return (
    <Animated.View style={styles.flexContainer}>
      <LinearGradient
        style={styles.container}
        colors={["#332332", "#A15EF2"]}
        end={{ x: 0.9, y: 1.7 }}
      >
        <Animated.View style={[styles.logoContainer, animatedContainerStyle]}>
          <Text style={styles.textLabel}>
            Bem-vindo ao seu app Github
          </Text>
          <Animated.View style={[styles.githubLogo, animatedLogoStyle]}>
            <Image
              source={githubLogo}
              style={{ width: 100, height: 100 }}
              resizeMode="contain"
              tintColor={"white"}
            />
          </Animated.View>
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
    gap: 20,
  },
  textLabel: {
    fontSize: 24,
    fontWeight: "900",
    color: "white",
    textAlign: "center",
    padding: 20
  },
  logoContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  githubLogo: {
    width: 100,
    height: 100,
  },
});
